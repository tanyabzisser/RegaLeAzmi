import { GoogleGenAI } from "@google/genai";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const getFallbackScript = (today?: string) => {
  const scripts = [
    `קחי נשימה עמוקה, אהובה. ביום הזה, ${today || 'היום'}, את עושה עבודה מופלאה והכל בסדר עכשיו. הרפי את הכתפיים, שחררי את המתח. הניחי למחשבות לחלוף כמו עננים. השקט הזה מגיע לך.`,
    `ברוכה הבאה לרגע השקט שלך ליום ${today || 'הזה'}. שימי לב לאוויר הקריר שנכנס ולחום הנשימה שיוצא. אין שום דבר שאת צריכה לעשות כרגע – העולם יכול להמתין דקה וחצי בזמן שאת מתמלאת.`,
    `עצמי את העיניים ביום ${today || 'הזה'} ורככי את המבט. הרגישי את הקרקע תחתייך, יציבה ומחזיקה אותך. נשמי פנימה שלווה ורוגע, ושלחי החוצה את הדאגות. את אמא מדהימה ומגיע לך לעצור.`,
    `נשמי אט אט ביום ${today || 'הזה'}. שימי יד אחת עדינה על ליבך המעניק כל כך הרבה אהבה בכל יום. הרגישי את פעימותיו. הרגע הזה הוא כולו מתנה קטנה בשבילך, לעצור ולהרפות את הכל.`,
    `נשימה פנימה... והחוצה. ביום ${today || 'הזה'}, תני לכתפיים לצנוח ולמצח להתנקות. היום היה מלא בעשייה, אבל עכשיו את בנשימה מלאה. את מוגנת, את עטופה, ואת תמיד מספיקה בדיוק כמו שאת.`
  ];
  return scripts[Math.floor(Math.random() * scripts.length)];
};

// API route first with extremely robust graceful fallback handling
app.post("/api/meditation", async (req, res) => {
  const { today } = req.body;
  try {
    // Check if key is available
    if (!process.env.GEMINI_API_KEY) {
      console.warn("Maternal Care Info: Using pre-assembled relaxation script (API key not set)");
      return res.json({ text: getFallbackScript(today), isFallback: true });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `צור תסריט קצר למדיטציה מונחית בעברית עבור אמא שמרגישה מוצפת היום (${today || new Date().toLocaleDateString('he-IL')}). 
      התסריט צריך להוביל אותה דרך 90 שניות של נשימה איטית ומודעת. 
      השפה צריכה להיות פואטית, אמפתית, רכה ומחזקת מאוד. 
      דברי אליה בקול מרגיע (כטקסט), התמקדי בכך שמותר לה לעצור, שהיא עושה מספיק, ושהשקט הזה מגיע לה.
      חשוב: התסריט צריך להיות מספיק ארוך כדי לקרוא אותו בקצב איטי מאוד במשך כדקה וחצי.
      אל תשתמשי במילים מורכבות, אלא במשפטים קצרים ונושמים.
      פורמט: רק הטקסט המדובר בעברית, ללא הוראות בימוי, ללא שמות וללא מטא-דאטה.`,
    });

    res.json({ text: response.text || getFallbackScript(today), isFallback: !response.text });
  } catch (error: any) {
    // Graceful recovery for rate-limiting, missing key, quota exceeded or system errors
    console.warn("Maternal Care Info: Generating robust elegant template for user (Quota/System Warm State applied)");
    res.json({ text: getFallbackScript(today), isFallback: true });
  }
});

// Audio proxy endpoint to bypass CORS and hotlinking restrictions
app.get("/api/audio-proxy", async (req, res) => {
  try {
    const audioUrl = req.query.url as string;
    if (!audioUrl) {
      res.status(400).send("Missing url parameter");
      return;
    }

    const response = await fetch(audioUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "audio/mpeg, audio/*, */*"
      }
    });

    if (!response.ok) {
      res.status(response.status).send(`Failed to fetch audio: ${response.statusText}`);
      return;
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.setHeader("Content-Length", buffer.length);
    res.status(200).send(buffer);
  } catch (error: any) {
    console.error("Audio proxy error:", error);
    res.status(500).send("Error proxying audio");
  }
});

app.post("/api/register-community", async (req, res) => {
  const { fullName, email, channels } = req.body;

  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Build lists for Hebrew mail contents
    const channelsListHe: string[] = [];
    if (channels?.newsletter) channelsListHe.push("הרשמה לניוזלטר חודשי");
    if (channels?.facebook) channelsListHe.push("הרשמה לקהילה בפייסבוק");
    if (channels?.instagram) channelsListHe.push("הרשמה לקהילה באינסטגרם");
    if (channels?.whatsapp) channelsListHe.push("הצטרפות לערוץ ווטסאפ שקט");

    const channelsText = channelsListHe.length > 0 
      ? channelsListHe.map(c => `• ${c}`).join("\n") 
      : "לא נבחרו ערוצים";

    const subject = "בקשת הרשמה לקהילה מאה הרגלים לאימא עצמאית";
    const mailText = `שלום רב,\n\nהתקבלה בקשת הצטרפות חדשה לקהילה "מאה הרגלים לאימא עצמאית":\n\nשם מלא: ${fullName || "לא צוין"}\nאימייל: ${email || "לא צוין"}\n\nערוצי הצטרפות מבוקשים:\n${channelsText}\n\nבברכה,\nמערכת מאה הרגלים לאימא עצמאית`;
    
    const mailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; text-align: right; padding: 20px; line-height: 1.6; color: #333333;">
        <h2 style="color: #6b8e23; border-bottom: 2px solid #6b8e23; padding-bottom: 8px;">בקשת הצטרפות חדשה לקהילה!</h2>
        <p>שלום רב,</p>
        <p>התקבלה בקשת הצטרפות חדשה לקהילה <strong>מאה הרגלים לאימא עצמאית</strong>:</p>
        <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eeeeee; width: 120px;">שם השולחת:</td>
            <td style="padding: 10px; border: 1px solid #eeeeee;">${fullName || "לא צוין"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #eeeeee;">אימייל:</td>
            <td style="padding: 10px; border: 1px solid #eeeeee; font-family: monospace;">${email || "לא צוין"}</td>
          </tr>
        </table>
        
        <h3 style="color: #555555; margin-top: 24px;">ערוצים מבוקשים להצטרפות:</h3>
        <ul style="padding-right: 20px; color: #555555;">
          ${channelsListHe.map(c => `<li style="margin-bottom: 6px;"><strong>${c}</strong></li>`).join("")}
        </ul>
        
        <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;" />
        <p style="font-size: 11px; color: #888888; text-align: center;">הודעה זו נשלחה באופן אוטומטי ממערכת האפליקציה מאה הרגלים לאימא עצמאית.</p>
      </div>
    `;

    if (!smtpUser || !smtpPass) {
      console.warn("=== SIMULATED MAIL SENDING ===");
      console.warn("To: tanyab.zisser@gmail.com");
      console.warn("Subject:", subject);
      console.warn("Body:\n", mailText);
      console.warn("==============================");
      
      return res.json({ 
        success: true, 
        simulated: true, 
        message: "Mail sending simulated because SMTP credentials are not configured in environment variables." 
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${fullName || 'מאה הרגלים'}" <${smtpUser}>`,
      to: "tanyab.zisser@gmail.com",
      subject: subject,
      text: mailText,
      html: mailHtml,
    });

    console.log(`Email successfully sent to tanyab.zisser@gmail.com for ${fullName}`);
    res.json({ success: true, simulated: false });
  } catch (error: any) {
    console.error("Failed to send community registration email:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "שגיאה פנימית בשליחת הדואר" 
    });
  }
});

// Serve PWA and Google Play assets explicitly
app.get("/.well-known/assetlinks.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const isProd = process.env.NODE_ENV === "production";
  const filePath = isProd 
    ? path.join(process.cwd(), "dist", ".well-known", "assetlinks.json")
    : path.join(process.cwd(), "public", ".well-known", "assetlinks.json");
  res.sendFile(filePath);
});

app.get("/manifest.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const isProd = process.env.NODE_ENV === "production";
  const filePath = isProd
    ? path.join(process.cwd(), "dist", "manifest.json")
    : path.join(process.cwd(), "public", "manifest.json");
  res.sendFile(filePath);
});

app.get("/sw.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  const isProd = process.env.NODE_ENV === "production";
  const filePath = isProd
    ? path.join(process.cwd(), "dist", "sw.js")
    : path.join(process.cwd(), "public", "sw.js");
  res.sendFile(filePath);
});

// Serve Privacy Policy and Terms of Use
app.get(["/privacy", "/privacy-policy", "/terms"], (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const isProd = process.env.NODE_ENV === "production";
  const filePath = isProd
    ? path.join(process.cwd(), "dist", "privacy.html")
    : path.join(process.cwd(), "public", "privacy.html");
  res.sendFile(filePath);
});

// Vite middleware setup
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
