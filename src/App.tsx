import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Wind, 
  Home, 
  DollarSign, 
  Smile, 
  Sun, 
  Sparkles, 
  Coffee, 
  ShoppingCart, 
  Clock, 
  Pencil, 
  MessageCircle, 
  Star, 
  Zap, 
  Moon, 
  Footprints, 
  Tv, 
  BookOpen, 
  Mic, 
  Search, 
  Shield,
  FileText,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Calendar,
  Settings,
  Palette,
  X,
  Music,
  ArrowRight,
  Mail,
  Facebook,
  Instagram,
  Database,
  RefreshCw
} from 'lucide-react';
import { HABITS, HABIT_CATEGORIES, QUOTES, Habit } from './data';

// --- Components ---

// Beautiful floral elements for the "ערכת צבעים פרחונית" (Floral Theme)
const FloralTwig: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none select-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main stem */}
    <path d="M10 90C40 70 65 35 85 15" stroke="#8EA499" strokeWidth="1.0" strokeLinecap="round" opacity="0.3" />
    
    {/* Leaf 1 */}
    <path d="M30 76C20 74 15 65 20 58C28 60 32 68 30 76Z" fill="#B2C4B9" fillOpacity="0.18" stroke="#8EA499" strokeWidth="0.6" opacity="0.8" />
    {/* Leaf 2 */}
    <path d="M60 51C55 42 45 42 41 49C44 57 54 57 60 51Z" fill="#B2C4B9" fillOpacity="0.15" stroke="#8EA499" strokeWidth="0.6" opacity="0.8" />
    {/* Leaf 3 */}
    <path d="M72 32C76 22 68 18 62 23C62 31 69 34 72 32Z" fill="#B2C4B9" fillOpacity="0.18" stroke="#8EA499" strokeWidth="0.6" opacity="0.8" />

    {/* Blossom 1 (Large Peach/Cream Flower) */}
    <g transform="translate(85, 15)" opacity="0.85">
      <circle cx="-5" cy="5" r="9" fill="#FFF3EB" fillOpacity="0.6" />
      <circle cx="5" cy="-5" r="9" fill="#FFFDF8" fillOpacity="0.75" />
      <circle cx="-5" cy="-5" r="9" fill="#FFF3EB" fillOpacity="0.6" />
      <circle cx="5" cy="5" r="9" fill="#FFFDF8" fillOpacity="0.75" />
      <circle cx="0" cy="0" r="10" fill="#FCD5CE" fillOpacity="0.45" />
      <circle cx="0" cy="0" r="4" fill="#EAB7A5" fillOpacity="0.9" />
      <circle cx="0" cy="0" r="1.5" fill="#E3CBD3" />
    </g>

    {/* Small Blossom 2 */}
    <g transform="translate(45, 62)" opacity="0.8">
      <circle cx="-3" cy="3" r="6" fill="#FAF0E6" fillOpacity="0.7" />
      <circle cx="3" cy="-3" r="6" fill="#FCD5C5" fillOpacity="0.7" />
      <circle cx="-3" cy="-3" r="6" fill="#FAF0E6" fillOpacity="0.7" />
      <circle cx="3" cy="3" r="6" fill="#FCD5C5" fillOpacity="0.7" />
      <circle cx="0" cy="0" r="2" fill="#DB9E93" />
    </g>

    {/* Small Blossom 3 */}
    <g transform="translate(68, 38)" opacity="0.8">
      <circle cx="-2" cy="2" r="5" fill="#FFEAE0" fillOpacity="0.6" />
      <circle cx="2" cy="-2" r="5" fill="#F5DFD6" fillOpacity="0.7" />
      <circle cx="-2" cy="-2" r="5" fill="#FFEAE0" fillOpacity="0.6" />
      <circle cx="2" cy="2" r="5" fill="#F5DFD6" fillOpacity="0.7" />
      <circle cx="0" cy="0" r="1.5" fill="#DB9E93" />
    </g>
  </svg>
);

const SingleBlossom: React.FC<{ className?: string, size?: number }> = ({ className = "", size = 40 }) => (
  <svg className={`pointer-events-none select-none inline-block ${className}`} width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(25, 25)">
      {/* Five delicate round petals using soft warm peach and ivory */}
      <path d="M0 0 C-10 -15, 10 -15, 0 0" fill="#FFF2EB" fillOpacity="0.6" stroke="#F4D3C4" strokeWidth="0.5" />
      <path d="M0 0 C15 -10, 15 10, 0 0" fill="#FAD9D0" fillOpacity="0.7" stroke="#FFF0FA" strokeWidth="0.5" transform="rotate(72)" />
      <path d="M0 0 C10 15, -10 15, 0 0" fill="#FFF2EB" fillOpacity="0.6" stroke="#F4D3C4" strokeWidth="0.5" transform="rotate(144)" />
      <path d="M0 0 C-15 10, -15 -10, 0 0" fill="#FAD9D0" fillOpacity="0.7" stroke="#FFF0FA" strokeWidth="0.5" transform="rotate(216)" />
      <path d="M0 0 C-15 -10, -5 -20, 0 0" fill="#FFFDF8" fillOpacity="0.85" stroke="#F1D1CA" strokeWidth="0.5" transform="rotate(288)" />
      
      {/* Golden flower pistil */}
      <circle cx="0" cy="0" r="4.5" fill="#FAD4C0" fillOpacity="0.9" />
      <circle cx="0" cy="0" r="2" fill="#EAB7A5" />
      
      {/* Center pollen threads */}
      <line x1="0" y1="0" x2="-2" y2="-2" stroke="#DB9E93" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="2" y2="-2" stroke="#DB9E93" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="2" y2="2" stroke="#DB9E93" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="-2" y2="2" stroke="#DB9E93" strokeWidth="0.5" />
    </g>
  </svg>
);

const DelicateVines: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none select-none ${className}`} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* A lovely soft botanical border garland */}
    <path d="M5 25C25 10 45 10 65 25C75 30 85 27 95 15" stroke="#B5BD89" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    
    <path d="M15 19C10 17 8 10 14 6C18 9 17 17 15 19Z" fill="#9BB0A5" fillOpacity="0.15" stroke="#7A9085" strokeWidth="0.6" />
    <path d="M35 15C32 8 38 4 43 7C42 12 38 15 35 15Z" fill="#9BB0A5" fillOpacity="0.15" stroke="#7A9085" strokeWidth="0.6" />
    <path d="M55 16C58 9 65 9 67 15C63 19 57 18 55 16Z" fill="#9BB0A5" fillOpacity="0.15" stroke="#7A9085" strokeWidth="0.6" />
    <path d="M78 24C82 18 88 20 88 25C84 28 80 27 78 24Z" fill="#9BB0A5" fillOpacity="0.15" stroke="#7A9085" strokeWidth="0.6" />
    
    {/* Cute pink accent dots */}
    <circle cx="25" cy="16" r="2" fill="#FFAAA6" />
    <circle cx="48" cy="15" r="1.5" fill="#FF8B94" />
    <circle cx="68" cy="23" r="2.5" fill="#FFAAA6" />
  </svg>
);

const LavenderTwig: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none select-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Delicate lavender/sage flower stalk */}
    <path d="M50 90C45 60 48 30 52 10" stroke="#7E9A8C" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M49 70C35 65 30 55 35 50" stroke="#7E9A8C" strokeWidth="0.8" opacity="0.25" />
    <path d="M51 50C65 45 70 35 65 30" stroke="#7E9A8C" strokeWidth="0.8" opacity="0.25" />
    {/* Little leaves */}
    <path d="M35 50C33 46 39 44 42 47" fill="#9BB0A5" fillOpacity="0.2" />
    <path d="M65 30C67 34 61 36 58 33" fill="#9BB0A5" fillOpacity="0.2" />
    {/* Clustered blooms using peach, rose, and cream colors */}
    <circle cx="52" cy="12" r="4.5" fill="#E3CBD3" fillOpacity="0.75" />
    <circle cx="48" cy="18" r="4" fill="#DB9E93" fillOpacity="0.75" />
    <circle cx="55" cy="22" r="4" fill="#FAF0E6" fillOpacity="0.8" />
    <circle cx="49" cy="28" r="4.5" fill="#E3CBD3" fillOpacity="0.7" />
    <circle cx="54" cy="34" r="4" fill="#DB9E93" fillOpacity="0.7" />
    <circle cx="50" cy="42" r="4.5" fill="#FAF0E6" fillOpacity="0.8" />
    <circle cx="48" cy="50" r="3.5" fill="#E3CBD3" fillOpacity="0.6" />
  </svg>
);

const FloralBouquet: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none select-none z-0 ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stems tied together */}
    <path d="M35 85C45 70 50 55 45 35" stroke="#7E9A8C" strokeWidth="1" opacity="0.4" />
    <path d="M50 85C50 70 45 55 35 30" stroke="#7E9A8C" strokeWidth="1" opacity="0.4" />
    <path d="M65 85C55 70 55 55 65 35" stroke="#7E9A8C" strokeWidth="1" opacity="0.4" />
    
    {/* Ribbon tie */}
    <path d="M42 72C48 70 52 70 58 72C52 74 48 74 42 72Z" fill="#DB9E93" fillOpacity="0.8" />
    <path d="M48 72C42 78 40 85 41 88" stroke="#DB9E93" strokeWidth="0.8" fill="none" />
    <path d="M52 72C58 78 60 85 59 88" stroke="#DB9E93" strokeWidth="0.8" fill="none" />

    {/* Leaves */}
    <path d="M28 42C20 40 18 30 25 24C32 26 31 36 28 42Z" fill="#9BB0A5" fillOpacity="0.2" stroke="#7A9085" strokeWidth="0.6" />
    <path d="M72 42C80 40 82 30 75 24C68 26 69 36 72 42Z" fill="#9BB0A5" fillOpacity="0.2" stroke="#7A9085" strokeWidth="0.6" />

    {/* Flowers */}
    {/* Left Flower (lavender) */}
    <g transform="translate(32, 30)" opacity="0.8">
      <circle cx="0" cy="0" r="10" fill="#E3CBD3" fillOpacity="0.65" />
      <circle cx="-5" cy="-5" r="5" fill="#FAF0E6" />
      <circle cx="5" cy="5" r="5" fill="#FAF0E6" />
      <circle cx="2" cy="-3" r="3" fill="#DB9E93" />
    </g>
    
    {/* Right Flower (peach) */}
    <g transform="translate(68, 30)" opacity="0.8">
      <circle cx="0" cy="0" r="11" fill="#FCD5CE" fillOpacity="0.65" />
      <circle cx="4" cy="-4" r="5" fill="#FFF2EB" />
      <circle cx="-4" cy="4" r="5" fill="#FFF2EB" />
      <circle cx="-2" cy="-2" r="3" fill="#DB9E93" />
    </g>

    {/* Center Flower (main rose/anemone) */}
    <g transform="translate(50, 22)">
      <circle cx="0" cy="0" r="14" fill="#FAD9D0" fillOpacity="0.75" stroke="#E3CBD3" strokeWidth="0.5" />
      <circle cx="-5" cy="0" r="7" fill="#FFFDF8" fillOpacity="0.8" />
      <circle cx="5" cy="0" r="7" fill="#FFFDF8" fillOpacity="0.8" />
      <circle cx="0" cy="-5" r="7" fill="#FFF3EB" fillOpacity="0.8" />
      <circle cx="0" cy="5" r="7" fill="#FFF3EB" fillOpacity="0.8" />
      <circle cx="0" cy="0" r="4" fill="#DB9E93" />
    </g>
  </svg>
);

const IconMap: Record<string, any> = {
  Coffee, Heart, Wind, Home, DollarSign, Smile, Sun, Sparkles, 
  ShoppingCart, Clock, Pencil, MessageCircle, Star, Zap, Moon, 
  Footprints, Tv, BookOpen, Mic, Search, Shield
};

interface HabitCardProps {
  habit: Habit;
  isCompleted: boolean;
  onToggle: () => void;
  onSelect: () => void;
  theme?: 'calm' | 'floral';
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, isCompleted, onToggle, onSelect, theme = 'calm' }) => {
  const category = HABIT_CATEGORIES.find(c => c.id === habit.category);
  const Icon = IconMap[habit.icon] || Sparkles;

  const isFloral = theme === 'floral';

  return (
    <motion.div 
      layout
      onClick={onSelect}
      className={`relative p-5 rounded-[2rem] card-shadow transition-all duration-500 overflow-hidden border cursor-pointer ${
        isCompleted 
          ? isFloral 
            ? 'bg-rose-50/30 border-rose-100/30' 
            : 'bg-calm-sage-light/40 border-calm-sage/20' 
          : isFloral
            ? 'bg-white hover:border-rose-200 border-rose-100/30'
            : 'bg-white hover:border-calm-sage/30 border-calm-border'
      }`}
    >
      {/* Decorative background blossom for floral theme */}
      {isFloral && (
        <SingleBlossom className="absolute -bottom-2 -left-2 opacity-[0.08] pointer-events-none transform -rotate-12" size={48} />
      )}

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl ${
          isFloral 
            ? 'bg-rose-50/50 text-[#DB9E93]' 
            : (category?.color || 'bg-gray-100')
        } ${!isFloral ? (category?.textColor || 'text-gray-600') : ''}`}>
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1 text-right">
            <span className={`text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded-full ${
              isFloral 
                ? 'bg-rose-50/50 text-[#DB9E93]' 
                : `${category?.color} ${category?.textColor}`
            }`}>
              {category?.name}
            </span>
          </div>
          <h3 className={`font-serif text-xl text-right mt-1 ${isCompleted ? 'line-through opacity-50' : 'text-calm-ink'}`}>
            {habit.title}
          </h3>
          <p className={`text-sm opacity-70 leading-relaxed mt-1 text-right font-sans line-clamp-2 ${isCompleted ? 'opacity-30' : ''}`}>
            {habit.description}
          </p>
        </div>
      </div>
      
      <button 
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={`mt-4 w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold transition-all text-sm ${
          isCompleted 
            ? isFloral 
              ? 'bg-rose-100/30 text-[#DB9E93]' 
              : 'bg-calm-border text-calm-sage' 
            : isFloral
              ? 'bg-[#E5A49D] text-white hover:bg-[#D9918A] shadow-sm hover:shadow'
              : 'bg-calm-sage text-white hover:bg-calm-sage-dark'
        }`}
      >
        {isCompleted ? <CheckCircle2 size={16} /> : null}
        {isCompleted 
          ? isFloral 
            ? 'כל הכבוד, אמא! 🌸' 
            : 'כל הכבוד, אמא! ✨' 
          : '✔️ ביצעתי היום'}
      </button>

      {isCompleted && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 left-2"
        >
          {isFloral ? (
            <SingleBlossom size={18} className="text-[#DB9E93] opacity-60" />
          ) : (
            <span className="text-calm-sage-dark"><Sparkles size={16} /></span>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const HabitDetail: React.FC<{ habit: Habit; onClose: () => void; isCompleted: boolean; onToggle: () => void; history: string[]; theme?: 'calm' | 'floral' }> = ({ habit, onClose, isCompleted, onToggle, history, theme = 'calm' }) => {
  const category = HABIT_CATEGORIES.find(c => c.id === habit.category);
  const Icon = IconMap[habit.icon] || Sparkles;
  
  const totalCompleted = history.length;
  const isFloral = theme === 'floral';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={`fixed inset-0 z-[100] flex flex-col font-sans transition-all duration-500 overflow-hidden ${
        isFloral
          ? 'bg-gradient-to-b from-[#FCFBF9] via-[#FAF6F4] to-[#F3F7F5]'
          : 'bg-white'
      }`}
    >
      {/* Delicate floral elements for habit details */}
      {isFloral && (
        <>
          <FloralTwig className="w-36 h-36 -left-12 -top-10 z-0 opacity-25 transform scale-x-[-1]" />
          <FloralTwig className="w-44 h-44 -left-16 bottom-16 z-0 opacity-15 transform -rotate-45" />
          <SingleBlossom className="absolute right-8 bottom-32 opacity-10 pointer-events-none transform rotate-12" size={80} />
        </>
      )}

      <div className="p-8 flex items-center justify-between flex-row-reverse relative z-10">
        <button onClick={onClose} className="p-2 rounded-full bg-gray-100/80 hover:bg-gray-200 transition-colors"><X size={24} /></button>
        <span className="text-calm-ink/40 font-bold tracking-widest text-xs uppercase">הרגל #{habit.number}</span>
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-32 text-right relative z-10">
        <div className="flex flex-col items-center mb-8">
           <div className={`p-6 rounded-[2.5rem] card-shadow mb-6 ${category?.color} ${category?.textColor}`}>
              <Icon size={48} />
           </div>
           <span className={`text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-3 ${category?.color} ${category?.textColor}`}>
              {category?.name}
           </span>
           <h2 className="font-serif text-3xl mb-4 text-calm-dark leading-tight">{habit.title}</h2>
           <p className="text-lg opacity-70 leading-relaxed max-w-sm font-sans">{habit.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
           <div className={`p-4 rounded-2xl border text-center ${
             isFloral 
               ? 'bg-rose-50/20 border-rose-150/40' 
               : 'bg-calm-beige border-calm-border'
           }`}>
              <p className={`text-2xl font-bold ${isFloral ? 'text-[#DB9E93]' : 'text-calm-sage-dark'}`}>{totalCompleted}</p>
              <p className="text-[10px] uppercase font-bold opacity-40">סך הכל בוצע</p>
           </div>
           <div className={`p-4 rounded-2xl border text-center ${
             isFloral 
               ? 'bg-rose-50/20 border-rose-150/40' 
               : 'bg-calm-beige border-calm-border'
           }`}>
              <p className={`text-2xl font-bold ${isFloral ? 'text-[#DB9E93]' : 'text-calm-rose-dark'}`}>{isCompleted ? 'היום ✅' : 'טרם'}</p>
              <p className="text-[10px] uppercase font-bold opacity-40">סטטוס יומי</p>
           </div>
        </div>

        <div className="space-y-10">
          <section>
            <h4 className="text-sm font-bold text-calm-ink/40 uppercase tracking-widest mb-4 flex items-center gap-2 flex-row-reverse border-b border-gray-100 pb-2">
              <Sparkles size={14} className={isFloral ? 'text-[#DB9E93]' : 'text-calm-sage-dark'} />
              איך עושים את זה בפועל?
            </h4>
            <p className="text-calm-ink/80 text-lg leading-relaxed">{habit.howTo}</p>
          </section>

          <section>
            <h4 className="text-sm font-bold text-calm-ink/40 uppercase tracking-widest mb-4 flex items-center gap-2 flex-row-reverse border-b border-gray-100 pb-2">
              <Zap size={14} className={isFloral ? 'text-[#DB9E93]' : 'text-calm-sage-dark'} />
              3 דרכים להתמיד
            </h4>
            <ul className="space-y-4">
              {habit.tips?.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 flex-row-reverse">
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    isFloral 
                      ? 'bg-[#FAD9D0]/50 text-[#DB9E93]' 
                      : 'bg-calm-sage-light text-calm-sage-dark'
                  }`}>
                    {i + 1}
                  </div>
                  <span className="text-calm-ink/80">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className={`p-8 rounded-[3rem] text-center border relative overflow-hidden ${
            isFloral 
              ? 'bg-rose-50/25 border-rose-100/40' 
              : 'bg-calm-beige border-calm-border'
          }`}>
             <div className="absolute top-0 right-0 p-4 opacity-5"><Icon size={80} /></div>
             <p className="text-calm-ink/50 text-xs font-bold uppercase tracking-widest mb-3">משפט תזכורת</p>
             <p className={`font-serif text-2xl leading-tight relative z-10 ${
               isFloral ? 'text-[#DB9E93]' : 'text-calm-sage-dark'
             }`}>
                "{habit.reminder}"
             </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-8 glass-dark border-t border-gray-100 z-20">
        <button 
          onClick={() => { onToggle(); onClose(); }}
          className={`w-full py-5 rounded-3xl font-bold text-xl card-shadow transition-all flex items-center justify-center gap-3 ${
            isCompleted 
            ? isFloral 
              ? 'bg-rose-100/40 text-[#DB9E93] border border-rose-200/30' 
              : 'bg-calm-border text-calm-sage' 
            : isFloral
              ? 'bg-[#E5A49D] hover:bg-[#D9918A] text-white shadow-sm hover:shadow'
              : 'bg-calm-dark text-white hover:bg-opacity-90'
          }`}
        >
          {isCompleted ? <CheckCircle2 size={24} /> : <CheckCircle2 size={24} />}
          {isCompleted ? 'כבר בוצע היום' : 'ביצעתי את ההרגל!'}
        </button>
      </div>
    </motion.div>
  );
}

const MEDITATION_TRACKS = [
  {
    id: 1,
    name: "שלוות נשימה (Breath)",
    style: "צלילי נשימה מונחים",
    atmosphere: "ויסות נשימה, רוגע טבעי ושקט מהיר ברגעי עומס",
    url: "/audio/track1_breath.mp3"
  },
  {
    id: 2,
    name: "נשימה עמוקה (Breath 2)",
    style: "מרחב נשימה עוטף",
    atmosphere: "שחרור לחצים, חיבור פנימי, ונשימה איטית ומרגיעה",
    url: "/audio/track2_breath2.mp3"
  },
  {
    id: 3,
    name: "זרימת הנהר (River)",
    style: "רעש מים טבעי",
    atmosphere: "רעש של נהר זורם בעדינות, ניקוי מחשבות ושלווה מוחלטת",
    url: "/audio/track3_river.mp3"
  },
  {
    id: 4,
    name: "רוגע ספא (Spa)",
    style: "סינתיסייזר אמביינט",
    atmosphere: "שחרור שרירים, תחושת מסאז' קולי, פינוק ורוגע עמוק",
    url: "/audio/track4_spa.mp3"
  },
  {
    id: 5,
    name: "דממה פנימית (Stillness)",
    style: "אווירה מרחפת",
    atmosphere: "שקיעה לתוך שקט, עצירת המרוץ היומי ואיזון רגשי",
    url: "/audio/track5_stillness.mp3"
  },
  {
    id: 6,
    name: "שקט מוחלט (Stillness 2)",
    style: "תדר של שלווה",
    atmosphere: "מרחב אינסופי נטול דאגות, רוגע פנימי ואיפוס מחשבות",
    url: "/audio/track6_stillness2.mp3"
  },
  {
    id: 7,
    name: "ריחוף רגוע (Drift)",
    style: "נבל קוסמי עדין",
    atmosphere: "תדר גלים איטיים, עטיפה אימהית של שלווה וביטחון",
    url: "/audio/track7_drift.mp3"
  }
];

function SOSMode({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'loading' | 'meditating' | 'message'>('intro');
  const [timer, setTimer] = useState(90);
  const [sessionDuration, setSessionDuration] = useState(90);
  const [script, setScript] = useState<string>("קחי נשימה עמוקה. את עושה עבודה מדהימה. פשוט תהיי כאן.");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<typeof MEDITATION_TRACKS[0] | null>(null);
  const [isSynthActive, setIsSynthActive] = useState(false);
  const [hasTriedRemoteFallback, setHasTriedRemoteFallback] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // References for Web Audio API Ambient Synthesizer fallback
  const synthCtxRef = React.useRef<AudioContext | null>(null);
  const osc1Ref = React.useRef<OscillatorNode | null>(null);
  const osc2Ref = React.useRef<OscillatorNode | null>(null);
  const filterRef = React.useRef<BiquadFilterNode | null>(null);
  const gainRef = React.useRef<GainNode | null>(null);
  const breatheIntervalRef = React.useRef<any>(null);

  const startFallbackSynth = () => {
    setIsSynthActive(true);
    if (synthCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      synthCtxRef.current = ctx;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filterRef.current = filter;

      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(110, ctx.currentTime); // Soft low-frequency chord tone (A2 note)
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110.4, ctx.currentTime); // Sweet beating chorus resonance
      osc2Ref.current = osc2;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainRef.current = gainNode;

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      // Slow, relaxing maternal heartbeat-synchronized breathing swell (6 seconds cycle)
      let phaseCount = 0;
      breatheIntervalRef.current = setInterval(() => {
        if (!gainRef.current || !synthCtxRef.current) return;
        const currentGainVal = 0.08 + Math.sin(phaseCount) * 0.05;
        gainRef.current.gain.setTargetAtTime(currentGainVal, synthCtxRef.current.currentTime, 1.0);

        if (filterRef.current) {
          const filterFreq = 160 + Math.sin(phaseCount) * 60;
          filterRef.current.frequency.setTargetAtTime(filterFreq, synthCtxRef.current.currentTime, 1.2);
        }

        phaseCount += 0.15;
      }, 150);
    } catch (e) {
      console.warn("Could not initiate native synthesizer context:", e);
    }
  };

  const stopFallbackSynth = () => {
    setIsSynthActive(false);
    if (breatheIntervalRef.current) {
      clearInterval(breatheIntervalRef.current);
      breatheIntervalRef.current = null;
    }
    try {
      if (osc1Ref.current) { osc1Ref.current.stop(); osc1Ref.current.disconnect(); osc1Ref.current = null; }
      if (osc2Ref.current) { osc2Ref.current.stop(); osc2Ref.current.disconnect(); osc2Ref.current = null; }
      if (filterRef.current) { filterRef.current.disconnect(); filterRef.current = null; }
      if (gainRef.current) { gainRef.current.disconnect(); gainRef.current = null; }
      if (synthCtxRef.current) {
        if (synthCtxRef.current.state !== 'closed') {
          synthCtxRef.current.close();
        }
        synthCtxRef.current = null;
      }
    } catch (e) {
      console.warn("Synthesizer cleanup completed with warnings:", e);
    }
  };

  const generateMeditation = async () => {
    setPhase('loading');
    
    // Pick a random track that is different from the last track played
    const lastTrackIdStr = localStorage.getItem('lastPlayedTrackId');
    const filteredTracks = lastTrackIdStr 
      ? MEDITATION_TRACKS.filter(t => t.id.toString() !== lastTrackIdStr)
      : MEDITATION_TRACKS;
    
    const tracksToChooseFrom = filteredTracks.length > 0 ? filteredTracks : MEDITATION_TRACKS;
    const randomTrack = tracksToChooseFrom[Math.floor(Math.random() * tracksToChooseFrom.length)];
    
    localStorage.setItem('lastPlayedTrackId', randomTrack.id.toString());
    setCurrentTrack(randomTrack);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      const today = new Date().toLocaleDateString('he-IL');
      const response = await fetch("/api/meditation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ today }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setScript(data.text || "קחי נשימה עמוקה. את עושה עבודה ממהממת. פשוט תהיי כאן.");
      startMeditation(randomTrack.url);
    } catch (error) {
      clearTimeout(timeoutId);
      console.warn("Maternal Care Info: Utilizing robust client-side backup guide script.", error instanceof Error ? error.message : String(error));
      
      const FALLBACK_SCRIPTS = [
        "קחי נשימה עמוקה, אהובה. את עושה עבודה נפלאה, והכל בסדר עכשיו. הרפי את הכתפיים, שחררי את כל המתח מהגוף. הניחי לכל מחשבה או משימה לחלוף כמו ענן בשמיים.",
        "ברוכה הבאה לרגע השקט הנוכחי שלך. שימי לב לאוויר הקריר שנכנס ולחום העדין שיוצא. אין שום דבר שאת צריכה לעשות כאן כרגע, פרט ללהיות איתנו ולתת לעצמך פשוט להיות.",
        "עצמי את העיניים אם תרצי, או פשוט רככי את המבט. הרגישי את הקרקע תחתייך, יציבה ומחזיקה אותך. נשמי פנימה שקט ורוגע, ושלחי החוצה כל דאגה מליבך.",
        "נשמי אט אט. שימי יד אחת רכה על ליבך המתרחב, המעניק כל כך הרבה אהבה בכל יום לביתך. הרגישי את פעימותיו העמוקות. הרגע הזה הוא כולו מתנה קטנה בשבילך."
      ];
      const randomFallback = FALLBACK_SCRIPTS[Math.floor(Math.random() * FALLBACK_SCRIPTS.length)];
      setScript(randomFallback);
      
      const trackUrl = randomTrack?.url || MEDITATION_TRACKS[0].url;
      startMeditation(trackUrl);
    }
  };

  const startMeditation = (url: string) => {
    setPhase('meditating');
    setTimer(90);
    setSessionDuration(90);
    setIsMusicPlaying(true);
    setHasTriedRemoteFallback(false);
    if (audioRef.current) {
      const proxyUrl = url.startsWith('/') ? url : `/api/audio-proxy?url=${encodeURIComponent(url)}`;
      audioRef.current.src = proxyUrl;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(error => {
        console.warn("Audio play() blocked/failed, starting warm synthesizer fallback...", error);
        startFallbackSynth();
      });
    } else {
      startFallbackSynth();
    }
  };

  useEffect(() => {
    let interval: any;
    if (phase === 'meditating' && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    } else if (timer === 0 && phase === 'meditating') {
      setPhase('message');
      setIsMusicPlaying(false);
      window.speechSynthesis.cancel();
      stopFallbackSynth();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    return () => clearInterval(interval);
  }, [phase, timer]);

  // Handle Tab Visiblity Change & Navigation (stops playback when leaving the tab/app)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pauses playback if the user switches tabs, minimizes or leaves the window
        if (audioRef.current) {
          audioRef.current.pause();
        }
        stopFallbackSynth();
        window.speechSynthesis.pause();
      } else {
        // Resumes audio only if they were actively meditating when they tabbed out
        if (phase === 'meditating' && isMusicPlaying) {
          if (audioRef.current && audioRef.current.src && audioRef.current.src !== window.location.href) {
            audioRef.current.play().catch(err => {
              console.warn("Failed to resume audio on focus:", err);
              startFallbackSynth();
            });
          } else {
            startFallbackSynth();
          }
          window.speechSynthesis.resume();
        }
      }
    };

    const handlePageHide = () => {
      // Destroys playback immediately if navigating away or closing
      stopFallbackSynth();
      window.speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        try { audioRef.current.load(); } catch (e) {}
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);
    };
  }, [phase, isMusicPlaying]);

  // Handle sudden unmount/dismissal of meditation
  useEffect(() => {
    return () => {
      stopFallbackSynth();
      window.speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        try { audioRef.current.load(); } catch (e) {}
      }
    };
  }, []);

  const handleContinueBreathing = () => {
    let remainingSeconds = 120; // Default backup if NaN, 0, or using fallback synth
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      remainingSeconds = Math.max(5, Math.ceil(audioRef.current.duration - audioRef.current.currentTime));
    }
    
    setSessionDuration(remainingSeconds);
    setTimer(remainingSeconds);
    setPhase('meditating');
    setIsMusicPlaying(true);

    if (audioRef.current && audioRef.current.src && audioRef.current.src !== window.location.href) {
      audioRef.current.play().catch(error => {
        console.warn("Audio play() failed during resume, starting synth fallback:", error);
        startFallbackSynth();
      });
    } else {
      startFallbackSynth();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-calm-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8 text-white text-center font-sans overflow-hidden"
    >
      <audio 
        ref={audioRef} 
        loop 
        className="hidden" 
        onError={(e) => {
          console.warn("Audio element failed to load or play:", e);
          if (!hasTriedRemoteFallback && currentTrack && currentTrack.url) {
            setHasTriedRemoteFallback(true);
            const remoteUrl = `https://ais-pre-jhycsdjlndfixk3jhu6x5l-241522889105.europe-west2.run.app${currentTrack.url}`;
            console.info("Attempting to stream audio from high-availability remote backup:", remoteUrl);
            if (audioRef.current) {
              audioRef.current.src = remoteUrl;
              audioRef.current.load();
              audioRef.current.play().catch(err => {
                console.warn("Remote audio fallback failed too, starting synthesizer:", err);
                startFallbackSynth();
              });
            }
          } else {
            console.warn("Falling back to browser-native synthesizer.");
            startFallbackSynth();
          }
        }}
        onStalled={() => {
          console.warn("Audio download/playback stalled...");
        }}
      />
      
      <button 
        onClick={() => {
          window.speechSynthesis.cancel();
          stopFallbackSynth();
          setIsMusicPlaying(false);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
            try { audioRef.current.load(); } catch (e) {}
          }
          onClose();
        }} 
        className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[60]"
      >
        <X size={24} />
      </button>

      {phase === 'intro' && (
        <div className="flex flex-col items-center gap-8 max-w-sm relative z-10 animate-fade-in">
          <Wind size={64} className="text-calm-sage animate-pulse" />
          <h2 className="text-4xl font-serif leading-tight">זמן לעצור, אהובה.</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            אנחנו הולכים לקחת דקה וחצי של שקט, נשימות ומילים מחזקות. 
            רק את והכוח הפנימי שלך.
          </p>
          <button 
            onClick={generateMeditation}
            className="w-full py-5 bg-white text-calm-dark rounded-3xl font-bold text-xl card-shadow hover:scale-105 transition-all relative z-20 cursor-pointer"
          >
            אני מוכנה לנשום
          </button>
        </div>
      )}

      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-6 relative z-10">
          <div className="w-16 h-16 border-4 border-calm-sage border-t-white rounded-full animate-spin" />
          <p className="text-xl font-serif italic">מתחברת לשקט שבך...</p>
        </div>
      )}

      {phase === 'meditating' && (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg relative z-10 px-4">
          {/* Smaller, beautiful countdown circle */}
          <div className="relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.08, 0.25]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-20px] rounded-full bg-calm-sage blur-2xl"
            />
            <div className="w-36 h-36 rounded-full border border-white/15 flex items-center justify-center relative bg-white/5 backdrop-blur-md shadow-inner">
               <motion.div 
                 animate={{ scale: [1, 1.15, 1] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-28 h-28 rounded-full bg-calm-sage/25"
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-serif font-semibold text-white tracking-wide mb-0.5">{timer}</span>
                  <span className="text-[9px] uppercase tracking-[0.15em] opacity-50 font-bold">שניות לרוגע</span>
               </div>
            </div>
          </div>

          {/* Spacious glassmorphic container for relaxing guide script */}
          <div className="bg-white/10 border border-white/10 p-6 md:p-8 rounded-[2rem] w-full text-center shadow-lg backdrop-blur-lg space-y-3">
            <h2 className="text-xl font-serif font-medium text-amber-200">פשוט תנשמי, אהובה...</h2>
            <p className="text-lg md:text-xl text-white/95 font-serif leading-relaxed max-h-[220px] overflow-y-auto px-1 scrollbar-hide rtl whitespace-pre-line">
              {script}
            </p>
          </div>

          {/* Progress bar and track description */}
          <div className="w-full space-y-2">
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "100%" }}
                 animate={{ width: `${(timer / sessionDuration) * 100}%` }}
                 className="h-full bg-calm-sage transition-all duration-1000 linear"
               />
            </div>
            {isSynthActive ? (
              <div className="flex items-center justify-center gap-1.5 text-xs text-amber-200/90 font-serif">
                <span>✨</span>
                <span>מנגן כעת: <strong className="font-sans font-bold">סינתיסייזר נשימה מקומי (Offline)</strong> – צלילים מרגיעים מובנים</span>
              </div>
            ) : currentTrack && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-calm-sage-light opacity-90 font-serif">
                <span>🎵</span>
                <span>מנגן כעת: <strong className="font-sans font-bold">{currentTrack.name}</strong> – {currentTrack.style}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {phase === 'message' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8 max-w-sm relative z-10 w-full"
        >
          <div className="p-6 bg-white rounded-[2.5rem] card-shadow mb-4">
            <Sparkles size={64} className="text-calm-sage" />
          </div>
          <h2 className="text-3xl font-serif text-center leading-tight">איך את מרגישה עכשיו?</h2>
          <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 text-2xl font-serif w-full">
            "את אמא נהדרת, והעולם שלך מחכה לך ברוך."
          </div>
          <div className="flex flex-row gap-3 w-full">
            <button 
              onClick={handleContinueBreathing}
              className="flex-1 py-4 bg-calm-sage hover:bg-calm-sage-dark text-white rounded-3xl font-bold text-lg shadow-md transition-all relative z-20 cursor-pointer"
            >
              להמשיך לנשום
            </button>
            <button 
              onClick={() => {
                stopFallbackSynth();
                setIsMusicPlaying(false);
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.src = "";
                  try { audioRef.current.load(); } catch (e) {}
                }
                onClose();
              }}
              className="flex-1 py-4 bg-white text-calm-dark rounded-3xl font-bold text-lg hover:bg-opacity-90 shadow-md transition-all relative z-20 cursor-pointer"
            >
              חזרה ליום שלי
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  
  const slides = [
    {
      title: "ברוכה הבאה לעולם של רוגע",
      desc: "כאן אף אחת לא מצפה ממך להיות מושלמת. אנחנו כאן בשביל הצעדים הקטנים.",
      icon: <Wind size={64} className="text-calm-sage" />
    },
    {
      title: "אמא רגועה = בית רגוע",
      desc: "הרגלים קטנים יוצרים שינוי גדול באנרגיה של הבית שלך ושל הילדים.",
      icon: <Heart size={64} className="text-calm-rose" />
    },
    {
      title: "בלי לחץ, רק רוך",
      desc: "7 הרגלים בכל יום. אם עשית - מצוין. אם לא - הכל בסדר, מחר יום חדש.",
      icon: <Sun size={64} className="text-amber-400" />
    }
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-calm-beige flex flex-col items-center justify-between p-6 text-center overflow-y-auto">
      {/* Upper Content Spacer & Slide Container */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto py-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center gap-6 max-w-md"
          >
            <div className="p-8 bg-white rounded-[2.5rem] card-shadow mb-2">
              {slides[step].icon}
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif leading-tight text-calm-dark">{slides[step].title}</h1>
            <p className="text-lg sm:text-xl text-calm-ink/70 leading-relaxed font-sans">{slides[step].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls Container */}
      <div className="w-full max-w-xs flex flex-col items-center gap-5 mt-auto pb-4 shrink-0">
        {/* Step Indicator dots */}
        <div className="flex gap-2 justify-center mb-1">
          {slides?.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === step ? 'w-8 bg-calm-sage-dark' : 'bg-calm-sage-light'}`} />
          ))}
        </div>

        {/* Primary Action Button */}
        <button 
          onClick={() => step < slides.length - 1 ? setStep(step + 1) : onComplete()}
          className="w-full py-4 bg-calm-dark text-white rounded-3xl font-bold text-lg card-shadow hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-sans cursor-pointer"
        >
          {step < slides.length - 1 ? (
            <span className="flex items-center gap-2">
              המשך
              <ArrowRight size={20} className="rotate-180" />
            </span>
          ) : (
            <span>בואי נתחיל</span>
          )}
        </button>

        {/* Secondary Back Button */}
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} className="text-calm-ink/50 font-bold text-sm py-1 cursor-pointer hover:text-calm-dark transition-colors">
            חזרה
          </button>
        ) : (
          <div className="h-[28px]" /> /* spacer to prevent layout shifts */
        )}

        {/* Copyright notice (safe from overlap) */}
        <div className="text-[10px] text-gray-400 font-sans mt-2 flex flex-col gap-0.5 items-center" id="copyright-onboarding">
          <div>כל הזכויות שמורות לטניה זיסר – רגע לעצמי</div>
          <div>האפליקציה נוצרה על פי הספר "מאה הרגלים לאימא עצמאית"</div>
        </div>
      </div>
    </div>
  );
}

interface CommunityModalProps {
  onClose: () => void;
  newsletter: boolean;
  setNewsletter: (val: boolean) => void;
  facebook: boolean;
  setFacebook: (val: boolean) => void;
  instagram: boolean;
  setInstagram: (val: boolean) => void;
  whatsapp: boolean;
  setWhatsapp: (val: boolean) => void;
  theme: 'calm' | 'floral';
  isSubmitted: boolean;
  setIsSubmitted: (val: boolean) => void;
  fullName: string;
  email: string;
}

const CommunityModal: React.FC<CommunityModalProps> = ({
  onClose,
  newsletter,
  setNewsletter,
  facebook,
  setFacebook,
  instagram,
  setInstagram,
  whatsapp,
  setWhatsapp,
  theme,
  isSubmitted,
  setIsSubmitted,
  fullName,
  email
}) => {
  const isFloral = theme === 'floral';
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const subject = "בקשת הצטרפות לקהילה \"מאה הרגלים לאימא עצמאית\"";
    const channelsListHe: string[] = [];
    if (newsletter) channelsListHe.push("הרשמה לניוזלטר חודשי");
    if (facebook) channelsListHe.push("הרשמה לקהילה בפייסבוק");
    if (instagram) channelsListHe.push("הרשמה לקהילה באינסטגרם");
    if (whatsapp) channelsListHe.push("הצטרפות לערוץ ווטסאפ שקט");

    const channelsText = channelsListHe.length > 0 
      ? channelsListHe.map(c => `• ${c}`).join("\n") 
      : "לא נבחרו ערוצים";

    const mailText = `שלום רב,\n\nברצוני להצטרף לקהילה המורחבת של "מאה הרגלים לאימא עצמאית".\n\nפרטים שלי:\nשם מלא: ${fullName || "לא צוין"}\nאימייל ליצירת קשר: ${email || "tanyab.zisser@gmail.com"}\n\nערוצי הצטרפות מבוקשים:\n${channelsText}\n\nבברכה,\n${fullName || "אמא עצמאית"}`;

    const mailtoUrl = `mailto:tanyab.zisser@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailText)}`;

    try {
      const response = await fetch('/api/register-community', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          email,
          channels: {
            newsletter,
            facebook,
            instagram,
            whatsapp
          }
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
        // If simulated (no SMTP is set up in env vars), trigger mailto automatically to guarantee actual sending
        if (data.simulated) {
          window.location.href = mailtoUrl;
        }
      } else {
        setErrorMessage(data.error || "אופס, אירעה שגיאה בעיבוד הבקשה. נפתח עבורך את היישומון לשליחה ישירה.");
        // Fallback to mailto automatically so the registration never fails
        setTimeout(() => {
          window.location.href = mailtoUrl;
          setIsSubmitted(true);
        }, 1500);
      }
    } catch (err) {
      console.error("Community registration error:", err);
      // Fallback directly to mailto protocol
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const hasSelections = newsletter || facebook || instagram || whatsapp;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-[120] flex items-start md:items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
      dir="rtl"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-md rounded-[2.5rem] card-shadow overflow-hidden relative flex flex-col font-sans my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background flourishes if floral */}
        {isFloral && (
          <div className="absolute top-0 right-0 pointer-events-none select-none opacity-10">
            <FloralTwig className="w-28 h-28 -mr-6 -mt-6 transform" />
          </div>
        )}

        {/* Close Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8 text-right flex flex-col">
            <div className="flex flex-col items-center text-center mt-2 mb-6">
              <div className={`p-4 rounded-3xl mb-3 ${isFloral ? 'bg-[#FAD9D0]/50 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'}`}>
                <Heart size={32} className="animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl text-calm-dark leading-tight">הרשמה לקהילה</h3>
              <p className="text-xs text-gray-400 mt-1.5 max-w-xs font-sans leading-relaxed">
                בחרי את הדרכים שבהן תרצי להתחבר, לקבל השראה ולהיות חלק מהמסע המשותף שלנו ב"מאה הרגלים לאימא עצמאית"
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Option 1: Newsletter */}
              <div 
                onClick={() => setNewsletter(!newsletter)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                  newsletter 
                    ? isFloral 
                      ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                      : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                    : 'border-gray-100 bg-white hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-row-reverse w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    newsletter
                      ? isFloral ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                      : 'bg-gray-50 text-gray-400'
                  }`}>
                    <Mail size={18} />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 text-sm block">הרשמה לניוזלטר חודשי</span>
                    <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                      מאמרי העצמה, טיפים להתמודדות ורעיונות להרגלים מרגיעים
                    </span>
                  </div>
                </div>
                
                {/* Checkbox circle indicator */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  newsletter
                    ? isFloral 
                      ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                      : 'border-calm-sage bg-calm-sage text-white'
                    : 'border-gray-200'
                }`}>
                  {newsletter && <span className="text-[10px] font-bold">✔</span>}
                </div>
              </div>

              {/* Option 2: Facebook */}
              <div 
                onClick={() => setFacebook(!facebook)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                  facebook 
                    ? isFloral 
                      ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                      : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                    : 'border-gray-100 bg-white hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-row-reverse w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    facebook
                      ? isFloral ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                      : 'bg-gray-50 text-gray-400'
                  }`}>
                    <Facebook size={18} />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 text-sm block">הרשמה לקהילה בפייסבוק</span>
                    <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                      קבוצה פתוחה ומחבקת לשיתוף, פריקה והחלפת כוחות
                    </span>
                  </div>
                </div>
                
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  facebook
                    ? isFloral 
                      ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                      : 'border-calm-sage bg-calm-sage text-white'
                    : 'border-gray-200'
                }`}>
                  {facebook && <span className="text-[10px] font-bold">✔</span>}
                </div>
              </div>

              {/* Option 3: Instagram */}
              <div 
                onClick={() => setInstagram(!instagram)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                  instagram 
                    ? isFloral 
                      ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                      : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                    : 'border-gray-100 bg-white hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-row-reverse w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    instagram
                      ? isFloral ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                      : 'bg-gray-50 text-gray-400'
                  }`}>
                    <Instagram size={18} />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 text-sm block">הרשמה לקהילה באינסטגרם</span>
                    <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                      תוכני העשרה קצרים, השראות יומיות וקהילה חמה בסטורי
                    </span>
                  </div>
                </div>
                
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  instagram
                    ? isFloral 
                      ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                      : 'border-calm-sage bg-calm-sage text-white'
                    : 'border-gray-200'
                }`}>
                  {instagram && <span className="text-[10px] font-bold">✔</span>}
                </div>
              </div>

              {/* Option 4: WhatsApp Channel */}
              <div 
                onClick={() => setWhatsapp(!whatsapp)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                  whatsapp 
                    ? isFloral 
                      ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                      : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                    : 'border-gray-100 bg-white hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-row-reverse w-full">
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    whatsapp
                      ? isFloral ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                      : 'bg-gray-50 text-gray-400'
                  }`}>
                    <MessageCircle size={18} />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 text-sm block">הצטרפות לערוץ ווטסאפ שקט</span>
                    <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                      טיפים חשובים, ציטוטים מרגיעים, עדכונים ותזכורת נשימה עבורך ישר לנייד
                    </span>
                  </div>
                </div>
                
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  whatsapp
                    ? isFloral 
                      ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                      : 'border-calm-sage bg-calm-sage text-white'
                    : 'border-gray-200'
                }`}>
                  {whatsapp && <span className="text-[10px] font-bold">✔</span>}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center text-[11px] font-bold leading-relaxed font-sans mt-4">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={!hasSelections || isLoading}
                className={`w-full mt-6 py-4 rounded-2xl font-bold font-sans text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${
                  hasSelections && !isLoading
                    ? isFloral
                      ? 'bg-[#E5A49D] hover:bg-[#D9918A] text-white shadow hover:shadow-md cursor-pointer'
                      : 'bg-calm-sage hover:bg-calm-sage-light text-white shadow hover:shadow-md cursor-pointer'
                    : 'bg-gray-150 text-gray-400 cursor-not-allowed bg-gray-100'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    שולח בקשה...
                  </>
                ) : (
                  "הצטרפות והרשמה"
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center flex flex-col items-center">
            {/* Animated Celebration Icon */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`p-5 rounded-[2.5rem] mb-4 mt-2 ${
                isFloral ? 'bg-[#FAD9D0]/50 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
              }`}
            >
              <Heart size={40} className="fill-current text-[#DB9E93] inline" />
            </motion.div>

            <h3 className="font-serif text-2xl mb-2 text-calm-dark leading-tight">ברוכה הבאה לקהילה! ❤️</h3>
            <p className="text-calm-ink/70 text-xs sm:text-sm leading-relaxed max-w-xs mb-5 font-sans">
              אנחנו כל כך שמחים שאת איתנו. יחד אנחנו יוצרות ומחזקות מרחב תומך, עוטף ורגוע להורות מחברת ומעצימה.
            </p>

            {/* Listing what she joined nicely list */}
            <div className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 mb-6 text-right space-y-2">
              <span className="text-[10px] text-gray-400 font-bold block mb-1">העדפות שבחרת נקלטו במערכת בהצלחה</span>
              
              {newsletter && (
                <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                  <span className="text-emerald-500">✔</span>
                  <span>הרשמה לניוזלטר חודשי</span>
                </div>
              )}
              {facebook && (
                <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                  <span className="text-emerald-500">✔</span>
                  <span>הרשמה לקהילה בפייסבוק</span>
                </div>
              )}
              {instagram && (
                <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                  <span className="text-emerald-500">✔</span>
                  <span>הרשמה לקהילה באינסטגרם</span>
                </div>
              )}
              {whatsapp && (
                <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                  <span className="text-emerald-500">✔</span>
                  <span>הצטרפות לערוץ ווטסאפ שקט</span>
                </div>
              )}
            </div>

            <button 
              onClick={onClose}
              className={`w-full py-4 rounded-2xl font-bold font-sans text-sm transition-all ${
                isFloral
                  ? 'bg-[#E5A49D] hover:bg-[#D9918A] text-white shadow-sm'
                  : 'bg-calm-sage hover:bg-calm-sage-light text-white shadow-sm'
              }`}
            >
              לחזרה לאפליקציה
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(() => localStorage.getItem('hasOnboarded') === 'true' ? false : true);
  const [showSOS, setShowSOS] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [tab, setTab] = useState<'today' | 'stats' | 'journal' | 'community' | 'settings'>('today');
  const [showProfile, setShowProfile] = useState(false);
  const [showDisplaySettings, setShowDisplaySettings] = useState(false);
  const [theme, setTheme] = useState<'calm' | 'floral'>(() => {
    return (localStorage.getItem('appTheme') as 'calm' | 'floral') || 'floral';
  });

  const [fullName, setFullName] = useState<string>(() => {
    return localStorage.getItem('fullName') || 'Tanya B. Zisser';
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(fullName);

  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [confirmWipe, setConfirmWipe] = useState(false);
  const [showComplianceSettings, setShowComplianceSettings] = useState(false);
  const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
  const CURRENT_APP_VERSION = "2.1.0";

  // Automatic Version Migration and Backup system
  useEffect(() => {
    try {
      const savedVersion = localStorage.getItem('app_version');
      if (savedVersion !== CURRENT_APP_VERSION) {
        // Automatically compile and store an safety backup of all user's data prior to migration
        const keysToBackup = [
          'appTheme', 'fullName', 'community_newsletter', 'community_facebook',
          'community_instagram', 'community_whatsapp', 'lastDate', 'todayHabits',
          'completedHabits', 'overwhelmedCount', 'habitHistory', 'journal', 'hasOnboarded'
        ];
        const backupPayload: Record<string, string | null> = {};
        keysToBackup.forEach(k => {
          backupPayload[k] = localStorage.getItem(k);
        });
        
        // Save the automatic safety restore point
        localStorage.setItem(`auto_backup_before_update_${savedVersion || 'unknown_v1'}`, JSON.stringify(backupPayload));
        
        // Write the current application version safely
        localStorage.setItem('app_version', CURRENT_APP_VERSION);
        console.log(`Automatic background backup completed for version update from ${savedVersion || 'v1'} to ${CURRENT_APP_VERSION}.`);
      }
    } catch (e) {
      console.error("Auto version backup failed:", e);
    }
  }, []);

  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [communityNewsletter, setCommunityNewsletter] = useState<boolean>(() => {
    return localStorage.getItem('community_newsletter') === 'true';
  });
  const [communityFacebook, setCommunityFacebook] = useState<boolean>(() => {
    return localStorage.getItem('community_facebook') === 'true';
  });
  const [communityInstagram, setCommunityInstagram] = useState<boolean>(() => {
    return localStorage.getItem('community_instagram') === 'true';
  });
  const [communityWhatsapp, setCommunityWhatsapp] = useState<boolean>(() => {
    return localStorage.getItem('community_whatsapp') === 'true';
  });
  const [isCommunitySubmitted, setIsCommunitySubmitted] = useState<boolean>(() => {
    return localStorage.getItem('community_newsletter') === 'true' ||
           localStorage.getItem('community_facebook') === 'true' ||
           localStorage.getItem('community_instagram') === 'true' ||
           localStorage.getItem('community_whatsapp') === 'true';
  });
  const [isCommunityLoading, setIsCommunityLoading] = useState(false);
  const [communityError, setCommunityError] = useState("");

  const handleWipeData = () => {
    localStorage.clear();
    setCompletedHabits([]);
    setOverwhelmedCount(0);
    setHistory({});
    setJournal([]);
    setDailyReflection("");
    setFullName("Tanya B. Zisser");
    setTheme("calm");
    setConfirmWipe(false);
    setShowPrivacySettings(false);
    setShowCommunityModal(false);
    setCommunityNewsletter(false);
    setCommunityFacebook(false);
    setCommunityInstagram(false);
    setCommunityWhatsapp(false);
    setIsCommunitySubmitted(false);
    
    // re-initialize habits
    const today = new Date().toDateString();
    const selected: Habit[] = HABIT_CATEGORIES?.map(cat => {
      const catHabits = HABITS.filter(h => h.category === cat.id);
      if (catHabits.length === 0) return null;
      return catHabits[Math.floor(Math.random() * catHabits.length)];
    }).filter((h): h is Habit => h !== null);
    
    setTodayHabits(selected);
    localStorage.setItem('lastDate', today);
    localStorage.setItem('todayHabits', JSON.stringify(selected));
    localStorage.setItem('completedHabits', JSON.stringify([]));
    localStorage.setItem('overwhelmedCount', '0');
  };

  const handleRegisterCommunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCommunityLoading(true);
    setCommunityError("");

    const subject = "בקשת הצטרפות לקהילה \"מאה הרגלים לאימא עצמאית\"";
    const channelsListHe: string[] = [];
    if (communityNewsletter) channelsListHe.push("הרשמה לניוזלטר חודשי");
    if (communityFacebook) channelsListHe.push("הרשמה לקהילה בפייסבוק");
    if (communityInstagram) channelsListHe.push("הרשמה לקהילה באינסטגרם");
    if (communityWhatsapp) channelsListHe.push("הצטרפות לערוץ ווטסאפ שקט");

    const channelsText = channelsListHe.length > 0 
      ? channelsListHe.map(c => `• ${c}`).join("\n") 
      : "לא נבחרו ערוצים";

    const mailText = `שלום רב,\n\nברצוני להצטרף לקהילה המורחבת של "מאה הרגלים לאימא עצמאית".\n\nפרטים שלי:\nשם מלא: ${fullName || "לא צוין"}\nאימייל ליצירת קשר: tanyab.zisser@gmail.com\n\nערוצי הצטרפות מבוקשים:\n${channelsText}\n\nבברכה,\n${fullName || "אמא עצמאית"}`;

    const mailtoUrl = `mailto:tanyab.zisser@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailText)}`;

    try {
      const response = await fetch('/api/register-community', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          email: "tanyab.zisser@gmail.com",
          channels: {
            newsletter: communityNewsletter,
            facebook: communityFacebook,
            instagram: communityInstagram,
            whatsapp: communityWhatsapp
          }
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsCommunitySubmitted(true);
        if (data.simulated) {
          window.location.href = mailtoUrl;
        }
      } else {
        setCommunityError(data.error || "אופס, אירעה שגיאה בעיבוד הבקשה. נפתח עבורך את היישומון לשליחה ישירה.");
        setTimeout(() => {
          window.location.href = mailtoUrl;
          setIsCommunitySubmitted(true);
        }, 1500);
      }
    } catch (err) {
      console.error("Community registration error:", err);
      window.location.href = mailtoUrl;
      setIsCommunitySubmitted(true);
    } finally {
      setIsCommunityLoading(false);
    }
  };



  const handleSaveName = () => {
    const trimmed = tempName.trim();
    if (trimmed) {
      setFullName(trimmed);
      localStorage.setItem('fullName', trimmed);
    }
    setIsEditingName(false);
  };

  const getFirstName = () => {
    if (!fullName || fullName.trim() === 'Tanya B. Zisser') {
      return 'אהובה';
    }
    const parts = fullName.trim().split(/\s+/);
    return parts[0] || 'אהובה';
  };

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const [completedHabits, setCompletedHabits] = useState<string[]>(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastDate');
    const savedCompleted = localStorage.getItem('completedHabits');
    return (savedDate === today && savedCompleted) ? JSON.parse(savedCompleted) : [];
  });
  const [overwhelmedCount, setOverwhelmedCount] = useState<number>(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastDate');
    const count = localStorage.getItem('overwhelmedCount');
    return (savedDate === today && count) ? parseInt(count, 10) : 0;
  });
  const [history, setHistory] = useState<Record<string, string[]>>(() => {
    const savedHistory = localStorage.getItem('habitHistory');
    return savedHistory ? JSON.parse(savedHistory) : {};
  });
  const [journal, setJournal] = useState<{id: string, date: string, content: string, month: number, year: number}[]>(() => {
    const savedJournal = localStorage.getItem('journal');
    return savedJournal ? JSON.parse(savedJournal) : [];
  });
  const [dailyReflection, setDailyReflection] = useState("");
  const [todayHabits, setTodayHabits] = useState<Habit[]>(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastDate');
    const savedHabits = localStorage.getItem('todayHabits');
    if (savedDate === today && savedHabits) {
      return JSON.parse(savedHabits);
    }
    return []; // Will be populated in useEffect if empty
  });
  const [quote, setQuote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  const [journalFilter, setJournalFilter] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });

  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastDate');

    if (savedDate !== today || todayHabits.length === 0) {
      const selected: Habit[] = HABIT_CATEGORIES?.map(cat => {
        const catHabits = HABITS.filter(h => h.category === cat.id);
        if (catHabits.length === 0) return null;
        return catHabits[Math.floor(Math.random() * catHabits.length)];
      }).filter((h): h is Habit => h !== null);
      
      setTodayHabits(selected);
      setCompletedHabits([]);
      setOverwhelmedCount(0);
      localStorage.setItem('lastDate', today);
      localStorage.setItem('todayHabits', JSON.stringify(selected));
      localStorage.setItem('completedHabits', JSON.stringify([]));
      localStorage.setItem('overwhelmedCount', '0');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedHabits', JSON.stringify(completedHabits));
  }, [completedHabits]);

  useEffect(() => {
    localStorage.setItem('habitHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('journal', JSON.stringify(journal));
  }, [journal]);

  const [saveSuccess, setSaveSuccess] = useState(false);

  const saveJournalEntry = () => {
    if (!dailyReflection.trim()) return;
    
    const now = new Date();
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      date: now.toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric' }),
      content: dailyReflection,
      month: now.getMonth(),
      year: now.getFullYear(),
      timestamp: now.getTime()
    };
    
    setJournal(prev => [newEntry, ...prev]);
    setDailyReflection("");
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    
    // Switch to journal tab and set current month/year filter
    setTab('journal');
    setJournalFilter({ month: now.getMonth(), year: now.getFullYear() });
  };

  const toggleHabit = (id: string) => {
    const today = new Date().toDateString();
    const isNowCompleted = !completedHabits.includes(id);

    setCompletedHabits(prev => 
      isNowCompleted ? [...prev, id] : prev.filter(h => h !== id)
    );

    setHistory(prev => {
      const habitHistory = prev[id] || [];
      if (isNowCompleted) {
        return { ...prev, [id]: [...new Set([...habitHistory, today])] };
      } else {
        return { ...prev, [id]: habitHistory.filter(d => d !== today) };
      }
    });
  };

  const getWeeklyStats = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);
    
    return [0, 1, 2, 3, 4, 5, 6].map(i => {
      const d = new Date(sunday);
      d.setDate(sunday.getDate() + i);
      const dateStr = d.toDateString();
      
      let count = 0;
      (Object.values(history) as string[][]).forEach(dates => {
        if (dates.includes(dateStr)) count++;
      });

      const total = todayHabits.length || 7;
      const pct = Math.min(100, Math.round((count / total) * 100));
      
      return {
        day: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'][i],
        date: d.getDate(),
        pct,
        isToday: dateStr === today.toDateString(),
        isFuture: d > today
      };
    });
  };

  const getWeeklyRangeStr = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);
    const saturday = new Date(sunday);
    saturday.setDate(sunday.getDate() + 6);
    
    const startStr = `${sunday.getDate()}.${sunday.getMonth() + 1}`;
    const endStr = `${saturday.getDate()}.${saturday.getMonth() + 1}`;
    return `${startStr} - ${endStr}`;
  };

  const getMonthlyStats = () => {
    const now = new Date();
    const year = now.getFullYear();
    const monthNames = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
    
    return monthNames.map((name, monthIndex) => {
      const firstDay = new Date(year, monthIndex, 1);
      const lastDay = new Date(year, monthIndex + 1, 0);
      let totalPct = 0;
      let countedDays = 0;

      for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
        if (d > now) break;
        
        const dateStr = d.toDateString();
        let dailyCount = 0;
        (Object.values(history) as string[][]).forEach(dates => {
          if (dates.includes(dateStr)) dailyCount++;
        });

        const total = todayHabits.length || 7;
        totalPct += Math.min(100, Math.round((dailyCount / total) * 100));
        countedDays++;
      }

      return {
        name,
        pct: countedDays > 0 ? Math.round(totalPct / countedDays) : 0,
        isCurrent: monthIndex === now.getMonth()
      };
    });
  };

  const progress = (completedHabits.length / todayHabits.length) * 100;

  if (showOnboarding) return <Onboarding onComplete={() => {
    setShowOnboarding(false);
    localStorage.setItem('hasOnboarded', 'true');
  }} />;

  return (
    <div className={`min-h-screen pb-24 max-w-md mx-auto relative overflow-x-hidden flex flex-col font-sans transition-all duration-500 ${
      theme === 'floral' 
        ? 'bg-gradient-to-b from-[#FCFBF9] via-[#FAF6F4] to-[#F3F7F5]' 
        : 'bg-calm-beige'
    }`}>
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-20%] w-64 h-64 bg-calm-pink/40 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-20%] w-80 h-80 bg-calm-sage-light/50 blur-[100px] rounded-full pointer-events-none" />

      {/* Delicate floral elements for the floral theme */}
      {theme === 'floral' && (
        <>
          <FloralTwig className="w-44 h-44 -left-12 -top-6 z-0 opacity-35 transform scale-x-[-1]" />
          <FloralTwig className="w-48 h-48 -left-16 top-96 z-0 opacity-15 transform -rotate-45 pointer-events-none" />
          <LavenderTwig className="w-40 h-40 -right-16 top-[550px] z-0 opacity-20 pointer-events-none" />
          <FloralTwig className="w-44 h-44 -left-12 bottom-36 z-0 opacity-15 transform rotate-12 pointer-events-none" />
          {/* Newly added subtle background decorations that won't overlap reading */}
          <DelicateVines className="w-56 h-auto opacity-15 absolute -right-20 top-[220px] rotate-45 pointer-events-none" />
          <FloralBouquet className="w-40 h-40 absolute -right-12 top-[750px] opacity-12 pointer-events-none" />
          <SingleBlossom size={42} className="absolute left-[8%] top-[250px] opacity-10 pointer-events-none animate-pulse" />
          <SingleBlossom size={48} className="absolute right-[12%] top-[400px] opacity-12 pointer-events-none" />
          <SingleBlossom size={36} className="absolute left-[15%] top-[650px] opacity-10 pointer-events-none" />
          <SingleBlossom size={44} className="absolute right-[8%] top-[980px] opacity-12 pointer-events-none" />
          <SingleBlossom size={52} className="absolute left-[10%] bottom-[200px] opacity-12 pointer-events-none" />
          <DelicateVines className="w-56 h-auto opacity-15 absolute -left-16 bottom-[100px] -rotate-12 pointer-events-none" />
        </>
      )}

      {/* Header */}
      <header className="p-8 pt-12 text-right relative z-10 font-sans" dir="rtl">
        <div className="flex flex-col items-start mb-6">
          <h1 className="font-serif text-4xl text-calm-dark flex items-center gap-2 justify-start w-full">
            <span>שלום, אהובה <span className="text-rose-400 text-2xl inline-block select-none">🩷</span></span>
            {theme === 'floral' && (
              <SingleBlossom size={20} className="animate-pulse opacity-80" />
            )}
          </h1>
          <p className="text-calm-sage font-medium mt-1 mb-4">״אמא רגועה — בית רגוע.״</p>
          <button 
            onClick={() => {
              setShowSOS(true);
              setOverwhelmedCount(prev => {
                const newCount = prev + 1;
                localStorage.setItem('overwhelmedCount', newCount.toString());
                return newCount;
              });
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-calm-rose bg-opacity-20 text-calm-rose-dark border border-calm-rose border-opacity-30 rounded-full font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all font-sans"
          >
            <span role="img" aria-label="overwhelmed">🧘‍♀️</span>
            <span>אני מוצפת</span>
          </button>
        </div>

        <div className="flex justify-between items-center px-1 flex-row-reverse opacity-70">
          <p className="text-xs text-gray-400">
            {new Date().toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
          <p className="text-sm font-semibold">יום חדש, הזדמנות חדשה</p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 relative z-10 mb-12">
        {tab === 'today' && (
          <div className="space-y-6">
            <div className="space-y-1 px-2">
              <div className="flex items-center justify-between flex-row-reverse">
                <h2 className="text-xl font-bold flex items-center gap-2 flex-row-reverse">
                  {theme === 'floral' ? (
                    <SingleBlossom size={18} className="text-[#DB9E93] animate-pulse" />
                  ) : (
                    <Sparkles size={20} className="text-calm-sage-dark" />
                  )}
                  7 הרגלים מומלצים
                </h2>
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                  theme === 'floral'
                    ? 'bg-rose-100/40 text-[#DB9E93]'
                    : 'bg-calm-sage-light text-calm-sage-dark'
                }`}>
                  {completedHabits.length}/{todayHabits.length} בוצעו
                </span>
              </div>
              <p className="text-xs text-gray-500 text-right leading-relaxed font-sans opacity-90 mt-1">
                לחצי על כותרת ההרגל כדי ללמוד איך לבצע את זה בפועל
              </p>
            </div>

            <div className="space-y-5 relative z-10">
              {todayHabits?.map(habit => (
                habit && (
                  <HabitCard 
                    key={habit.id} 
                    habit={habit} 
                    isCompleted={completedHabits.includes(habit.id)} 
                    onToggle={() => toggleHabit(habit.id)}
                    onSelect={() => setSelectedHabit(habit)}
                    theme={theme}
                  />
                )
              ))}
            </div>

            {/* Gratitude / Evening Note */}
            <div className={`mt-12 p-8 rounded-[40px] border text-center relative overflow-hidden ${
              theme === 'floral'
                ? 'bg-rose-50/20 border-rose-100/40 shadow-sm'
                : 'bg-calm-pink/30 border border-calm-pink/50'
            }`}>
              {theme === 'floral' && (
                <LavenderTwig className="w-32 h-32 -left-8 -bottom-8 opacity-25 transform rotate-12 pointer-events-none z-0" />
              )}
              
              <div className="relative z-10">
                <Heart className={`mx-auto mb-4 ${theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-rose'}`} size={32} />
                <h3 className="text-xl font-serif font-bold mb-2 leading-tight">משהו טוב שקרה לי היום?</h3>
                <p className="text-calm-ink/60 mb-6 text-sm">קחי רגע קטן להעריך את עצמך על הדרך.</p>
                <textarea 
                  value={dailyReflection}
                  onChange={(e) => setDailyReflection(e.target.value)}
                  placeholder="תכתבי כאן מילה טובה אחת..."
                  className="w-full bg-white/60 p-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-calm-rose/30 transition-all resize-none h-24 text-right font-sans"
                />
                <button 
                  onClick={saveJournalEntry}
                  disabled={!dailyReflection.trim()}
                  className={`mt-4 w-full py-3 rounded-2xl font-bold text-sm shadow-sm border transition-all flex items-center justify-center gap-2 ${
                    saveSuccess 
                    ? theme === 'floral' ? 'bg-[#9BB0A5] text-white border-[#9BB0A5]' : 'bg-calm-sage text-white border-calm-sage' 
                    : theme === 'floral'
                      ? 'bg-white text-[#DB9E93] border-rose-200/50 hover:bg-rose-50/50'
                      : 'bg-white text-calm-rose-dark border-calm-rose/20 hover:bg-calm-rose/10'
                  } disabled:opacity-50`}
                >
                  {saveSuccess ? <CheckCircle2 size={16} /> : (theme === 'floral' ? <SingleBlossom size={16} className="text-[#DB9E93] inline" /> : <Sparkles size={16} />)}
                  {saveSuccess ? 'נשמר בהצלחה!' : 'שמירה בפרגון עצמי'}
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 'journal' && (
          <div className="space-y-8 text-right" dir="rtl">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-2 justify-start">
              {theme === 'floral' ? <SingleBlossom size={24} className="text-[#DB9E93]" /> : null}
              פרגון עצמי
            </h2>
            
            {/* Journal Filters */}
            <div className="flex gap-2 overflow-x-auto p-1 pb-4 scrollbar-hide">
              {(() => {
                const monthNames = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
                const now = new Date();
                const currentMonth = now.getMonth();
                
                // Construct months in reverse order starting from current
                const months = [];
                for (let i = 0; i < 12; i++) {
                  const m = (currentMonth - i + 12) % 12;
                  months.push({ index: m, name: monthNames[m] });
                }

                return months.map(({ index, name }) => (
                  <button
                    key={index}
                    onClick={() => setJournalFilter(f => ({ ...f, month: index }))}
                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                      journalFilter.month === index 
                      ? theme === 'floral'
                        ? 'bg-[#E5A49D] text-white ring-2 ring-rose-200/50 ring-offset-2'
                        : 'bg-calm-sage text-white ring-2 ring-calm-sage/30 ring-offset-2' 
                      : 'bg-white border border-calm-border text-calm-ink/60'
                    }`}
                  >
                    {name}
                  </button>
                ));
              })()}
            </div>

            <div className="flex gap-2 justify-start p-1">
              {(() => {
                const currentYear = new Date().getFullYear();
                const years = [currentYear, currentYear - 1, currentYear - 2];
                
                return years.map(y => (
                  <button
                    key={y}
                    onClick={() => setJournalFilter(f => ({ ...f, year: y }))}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      journalFilter.year === y 
                      ? theme === 'floral'
                        ? 'bg-[#DB9E93] text-white ring-2 ring-rose-200/50 ring-offset-2'
                        : 'bg-calm-dark text-white ring-2 ring-calm-dark/30 ring-offset-2' 
                      : 'bg-white border border-calm-border text-calm-ink/60'
                    }`}
                  >
                    {y}
                  </button>
                ));
              })()}
            </div>

            {/* Journal List */}
            <div className="space-y-6">
              {journal.filter(e => e.month === journalFilter.month && e.year === journalFilter.year).length > 0 ? (
                journal
                  .filter(e => e.month === journalFilter.month && e.year === journalFilter.year)
                  .map(entry => (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={entry.id} 
                      className={`p-6 rounded-[2.5rem] card-shadow border relative overflow-hidden ${
                        theme === 'floral'
                          ? 'bg-rose-50/10 border-rose-100/40'
                          : 'bg-white border-calm-border'
                      }`}
                    >
                      <div className={`absolute top-0 right-0 w-2 h-full ${theme === 'floral' ? 'bg-[#E5A49D]/40' : 'bg-calm-rose/20'}`} />
                      
                      {theme === 'floral' && (
                        <SingleBlossom size={32} className="absolute bottom-2 left-2 opacity-15 transform rotate-12 pointer-events-none z-0" />
                      )}

                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <span className="text-[10px] font-bold text-calm-ink/40 uppercase tracking-widest">{entry.date}</span>
                        <Heart size={14} className={theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-rose'} />
                      </div>
                      <p className="text-lg leading-relaxed text-calm-dark font-sans relative z-10">{entry.content}</p>
                    </motion.div>
                  ))
              ) : (
                <div className="py-16 text-center relative flex flex-col items-center">
                  {theme === 'floral' ? (
                    <div className="relative w-28 h-28 mb-4">
                      <FloralBouquet className="w-full h-full opacity-60" />
                    </div>
                  ) : (
                    <BookOpen size={48} className="mx-auto mb-4 opacity-40 text-calm-sage" />
                  )}
                  <p className="text-lg font-serif opacity-50">עדיין אין פרגונים לחודש הזה...</p>
                  <button onClick={() => setTab('today')} className={`mt-4 underline font-bold ${theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-sage'}`}>תוסיפי את הראשון שלך היום!</button>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'stats' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-right flex items-center gap-2 justify-start">
              {theme === 'floral' ? <SingleBlossom size={24} className="text-[#DB9E93]" /> : null}
              ההתקדמות שלך
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-[2rem] card-shadow text-center relative overflow-hidden border ${
                theme === 'floral' 
                  ? 'bg-white border-rose-100/40' 
                  : 'bg-white border-calm-border'
              }`}>
                {theme === 'floral' && (
                  <SingleBlossom size={24} className="absolute bottom-1 left-1 opacity-10 pointer-events-none" />
                )}
                <p className={`text-3xl font-bold ${theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-sage'}`}>{completedHabits.length}</p>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-1">הרגלים היום</p>
              </div>
              <div className={`p-6 rounded-[2rem] card-shadow text-center relative overflow-hidden border ${
                theme === 'floral' 
                  ? 'bg-white border-rose-100/40' 
                  : 'bg-white border-calm-border'
              }`}>
                {theme === 'floral' && (
                  <SingleBlossom size={24} className="absolute bottom-1 left-1 opacity-10 pointer-events-none" />
                )}
                <p className={`text-3xl font-bold ${theme === 'floral' ? 'text-[#E5A49D]' : 'text-calm-rose-dark'}`}>{overwhelmedCount}</p>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-1 text-center">רגעים של הצפה היום</p>
              </div>
            </div>

            <div className={`p-8 rounded-[2.5rem] card-shadow flex flex-col items-center border ${
              theme === 'floral' 
                ? 'bg-white border-rose-100/40' 
                : 'bg-white border-calm-border'
            }`}>
              <div className="relative w-40 h-40">
                {theme === 'floral' && (
                  <>
                    <SingleBlossom size={16} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 opacity-80 text-[#DB9E93]" />
                    <SingleBlossom size={14} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 opacity-80 text-[#DB9E93]" />
                    <SingleBlossom size={14} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 opacity-80 text-[#DB9E93]" />
                    <SingleBlossom size={16} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 opacity-80 text-[#DB9E93]" />
                    <SingleBlossom size={12} className="absolute top-4 left-4 opacity-60 text-[#DB9E93]" />
                    <SingleBlossom size={12} className="absolute top-4 right-4 opacity-60 text-[#DB9E93]" />
                    <SingleBlossom size={12} className="absolute bottom-4 left-4 opacity-60 text-[#DB9E93]" />
                    <SingleBlossom size={12} className="absolute bottom-4 right-4 opacity-60 text-[#DB9E93]" />
                  </>
                )}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="#F1F5F1" strokeWidth="12" />
                  <motion.circle 
                    cx="80" cy="80" r="70" fill="transparent" 
                    stroke={theme === 'floral' ? "#E5A49D" : "#A7B9A7"} 
                    strokeWidth="12" 
                    strokeDasharray={440}
                    initial={{ strokeDashoffset: 440 }}
                    animate={{ strokeDashoffset: 440 - (440 * progress) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${theme === 'floral' ? 'text-[#DB9E93]' : ''}`}>{Math.round(progress)}%</span>
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-widest">הצלחה יומית</span>
                </div>
              </div>
              <p className="mt-8 text-center text-sm font-sans opacity-70 leading-relaxed px-4">
                כל צעד קטן הוא שינוי גדול. את בונה לעצמך מרחב של שפיות.
              </p>
            </div>

            <div className={`p-6 rounded-[2rem] card-shadow text-right border relative overflow-hidden ${
              theme === 'floral' 
                ? 'bg-white border-rose-100/40' 
                : 'bg-white border-calm-border'
            }`} dir="rtl">
              {theme === 'floral' && (
                <SingleBlossom size={28} className="absolute bottom-2 left-2 opacity-10 transform -rotate-12 pointer-events-none" />
              )}
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3 relative z-10">
                <Calendar size={18} className={theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-sage'} />
                מבט שבועי - {getWeeklyRangeStr()}
              </h3>
              <div className="grid grid-cols-7 gap-2 relative z-10">
                {getWeeklyStats().map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className={`text-[10px] font-bold ${stat.isToday ? theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-sage-dark' : 'opacity-40'}`}>
                      {stat.day}
                    </span>
                    <div 
                      className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center transition-all border ${
                        stat.isToday 
                        ? theme === 'floral'
                          ? 'border-[#E5A49D] bg-rose-50/40 font-bold shadow-sm'
                          : 'border-calm-sage bg-calm-sage-light/30' 
                        : stat.isFuture 
                          ? 'border-gray-50 bg-gray-50/50' 
                          : stat.pct > 0 
                            ? theme === 'floral'
                              ? 'border-rose-100/40 bg-rose-50/20'
                              : 'border-calm-sage/20 bg-calm-sage-light/10'
                            : 'border-calm-beige bg-calm-beige/30'
                      }`}
                    >
                      <span className={`text-xs font-bold ${stat.isFuture ? 'opacity-20' : 'text-calm-dark'}`}>
                        {stat.date}
                      </span>
                      {!stat.isFuture && (
                        <span className={`text-[8px] font-bold mt-0.5 ${stat.pct >= 100 ? theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-sage-dark' : 'text-calm-ink/40'}`}>
                          {stat.pct}%
                        </span>
                      )}
                    </div>
                    {stat.pct >= 100 && !stat.isFuture && (
                       <Star size={10} className="text-amber-400 fill-amber-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-[2rem] card-shadow text-right border relative overflow-hidden ${
              theme === 'floral' 
                ? 'bg-white border-rose-100/40' 
                : 'bg-white border-calm-border'
            }`} dir="rtl">
              {theme === 'floral' && (
                <SingleBlossom size={28} className="absolute bottom-2 left-2 opacity-10 transform rotate-12 pointer-events-none" />
              )}
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3 relative z-10">
                <Calendar size={18} className={theme === 'floral' ? 'text-[#E5A49D]' : 'text-calm-rose'} />
                מבט חודשי - שנת {new Date().getFullYear()}
              </h3>
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {getMonthlyStats().map((stat, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-2xl border flex flex-col items-center gap-1 transition-all ${
                      stat.isCurrent 
                      ? theme === 'floral'
                        ? 'border-[#E5A49D] bg-rose-50/20 shadow-sm font-bold'
                        : 'border-calm-rose bg-calm-pink/20 shadow-sm' 
                      : 'border-calm-border bg-white'
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${stat.isCurrent ? theme === 'floral' ? 'text-[#DB9E93]' : 'text-calm-rose-dark' : 'opacity-40'}`}>
                      {stat.name}
                    </span>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          stat.pct > 70 
                            ? theme === 'floral' ? 'bg-[#9BB0A5]' : 'bg-calm-sage' 
                            : stat.pct > 40 
                              ? theme === 'floral' ? 'bg-[#E5A49D]' : 'bg-calm-rose' 
                              : 'bg-gray-300'
                        }`}
                        style={{ width: `${stat.pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-black mt-0.5">{stat.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'community' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-right">קהילה וחיבורים</h2>
            
            <div className="bg-white rounded-[2rem] card-shadow p-6 sm:p-8 text-right flex flex-col relative overflow-hidden">
              {/* Subtle background flourishes if floral */}
              {theme === 'floral' && (
                <div className="absolute top-0 right-0 pointer-events-none select-none opacity-10">
                  <FloralTwig className="w-28 h-28 -mr-6 -mt-6 transform" />
                </div>
              )}

              {!isCommunitySubmitted ? (
                <div className="flex flex-col">
                  <div className="flex flex-col items-center text-center mt-2 mb-6">
                    <div className={`p-4 rounded-3xl mb-3 ${theme === 'floral' ? 'bg-[#FAD9D0]/50 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'}`}>
                      <Heart size={32} className="animate-pulse" />
                    </div>
                    <h3 className="font-serif text-2xl text-calm-dark leading-tight font-bold">הרשמה לקהילה</h3>
                    <p className="text-xs text-gray-500 mt-1.5 max-w-xs font-sans leading-relaxed">
                      בחרי את הדרכים שבהן תרצי להתחבר, לקבל השראה ולהיות חלק מהמסע המשותף שלנו ב"מאה הרגלים לאימא עצמאית"
                    </p>
                  </div>

                  <form onSubmit={handleRegisterCommunity} className="space-y-4">
                    {/* Option 1: Newsletter */}
                    <div 
                      onClick={() => {
                        const val = !communityNewsletter;
                        setCommunityNewsletter(val);
                        localStorage.setItem('community_newsletter', String(val));
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                        communityNewsletter 
                          ? theme === 'floral' 
                            ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                            : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                          : 'border-gray-100 bg-white hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-row-reverse w-full">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          communityNewsletter
                            ? theme === 'floral' ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                            : 'bg-gray-50 text-gray-400'
                        }`}>
                          <Mail size={18} />
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-800 text-sm block">הרשמה לניוזלטר חודשי</span>
                          <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                            מאמרי העצמה, טיפים להתמודדות ורעיונות להרגלים מרגיעים
                          </span>
                        </div>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        communityNewsletter
                          ? theme === 'floral' 
                            ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                            : 'border-calm-sage bg-calm-sage text-white'
                          : 'border-gray-200'
                      }`}>
                        {communityNewsletter && <span className="text-[10px] font-bold">✔</span>}
                      </div>
                    </div>

                    {/* Option 2: Facebook */}
                    <div 
                      onClick={() => {
                        const val = !communityFacebook;
                        setCommunityFacebook(val);
                        localStorage.setItem('community_facebook', String(val));
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                        communityFacebook 
                          ? theme === 'floral' 
                            ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                            : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                          : 'border-gray-100 bg-white hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-row-reverse w-full">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          communityFacebook
                            ? theme === 'floral' ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                            : 'bg-gray-50 text-gray-400'
                        }`}>
                          <Facebook size={18} />
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-800 text-sm block">הרשמה לקהילה בפייסבוק</span>
                          <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                            קבוצה פתוחה ומחבקת לשיתוף, פריקה והחלפת כוחות
                          </span>
                        </div>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        communityFacebook
                          ? theme === 'floral' 
                            ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                            : 'border-calm-sage bg-calm-sage text-white'
                          : 'border-gray-200'
                      }`}>
                        {communityFacebook && <span className="text-[10px] font-bold">✔</span>}
                      </div>
                    </div>

                    {/* Option 3: Instagram */}
                    <div 
                      onClick={() => {
                        const val = !communityInstagram;
                        setCommunityInstagram(val);
                        localStorage.setItem('community_instagram', String(val));
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                        communityInstagram 
                          ? theme === 'floral' 
                            ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                            : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                          : 'border-gray-100 bg-white hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-row-reverse w-full">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          communityInstagram
                            ? theme === 'floral' ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                            : 'bg-gray-50 text-gray-400'
                        }`}>
                          <Instagram size={18} />
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-800 text-sm block">הרשמה לקהילה באינסטגרם</span>
                          <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                            תוכני העשרה קצרים, השראות יומיות וקהילה חמה בסטורי
                          </span>
                        </div>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        communityInstagram
                          ? theme === 'floral' 
                            ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                            : 'border-calm-sage bg-calm-sage text-white'
                          : 'border-gray-200'
                      }`}>
                        {communityInstagram && <span className="text-[10px] font-bold">✔</span>}
                      </div>
                    </div>

                    {/* Option 4: WhatsApp */}
                    <div 
                      onClick={() => {
                        const val = !communityWhatsapp;
                        setCommunityWhatsapp(val);
                        localStorage.setItem('community_whatsapp', String(val));
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-row-reverse items-center justify-between gap-4 ${
                        communityWhatsapp 
                          ? theme === 'floral' 
                            ? 'bg-rose-50/30 border-[#E5A49D] shadow-sm' 
                            : 'bg-calm-sage-light/20 border-calm-sage shadow-sm'
                          : 'border-gray-100 bg-white hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-row-reverse w-full">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          communityWhatsapp
                            ? theme === 'floral' ? 'bg-[#E5A49D]/20 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                            : 'bg-gray-50 text-gray-400'
                        }`}>
                          <MessageCircle size={18} />
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-800 text-sm block">הצטרפות לערוץ ווטסאפ שקט</span>
                          <span className="text-[10px] text-gray-400 font-sans block leading-relaxed">
                            טיפים חשובים, ציטוטים מרגיעים, עדכונים ותזכורת נשימה עבורך ישר לנייד
                          </span>
                        </div>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        communityWhatsapp
                          ? theme === 'floral' 
                            ? 'border-[#E5A49D] bg-[#E5A49D] text-white' 
                            : 'border-calm-sage bg-calm-sage text-white'
                          : 'border-gray-200'
                      }`}>
                        {communityWhatsapp && <span className="text-[10px] font-bold">✔</span>}
                      </div>
                    </div>

                    {communityError && (
                      <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center text-[11px] font-bold leading-relaxed font-sans mt-4">
                        ⚠️ {communityError}
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={(!communityNewsletter && !communityFacebook && !communityInstagram && !communityWhatsapp) || isCommunityLoading}
                      className={`w-full mt-6 py-4 rounded-2xl font-bold font-sans text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${
                        (communityNewsletter || communityFacebook || communityInstagram || communityWhatsapp) && !isCommunityLoading
                          ? theme === 'floral'
                            ? 'bg-[#E5A49D] hover:bg-[#D9918A] text-white shadow hover:shadow-md cursor-pointer'
                            : 'bg-calm-sage hover:bg-calm-sage-light text-white shadow hover:shadow-md cursor-pointer'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isCommunityLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          שולח בקשה...
                        </>
                      ) : (
                        "הצטרפות והרשמה"
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center flex flex-col items-center py-4">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`p-5 rounded-[2.5rem] mb-4 mt-2 ${
                      theme === 'floral' ? 'bg-[#FAD9D0]/50 text-[#DB9E93]' : 'bg-calm-sage-light text-calm-sage-dark'
                    }`}
                  >
                    <Heart size={40} className="fill-current text-[#DB9E93] inline" />
                  </motion.div>

                  <h3 className="font-serif text-2xl mb-2 text-calm-dark leading-tight font-bold">ברוכה הבאה לקהילה! ❤️</h3>
                  <p className="text-calm-ink/70 text-xs sm:text-sm leading-relaxed max-w-xs mb-5 font-sans">
                    אנחנו כל כך שמחים שאת איתנו. יחד אנחנו יוצרות ומחזקות מרחב תומך, עוטף ורגוע להורות מחברת ומעצימה.
                  </p>

                  <div className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 mb-6 text-right space-y-2.5">
                    <span className="text-[10px] text-gray-400 font-bold block mb-1">העדפות ההצטרפות שלך נקלטו במערכת:</span>
                    
                    {communityNewsletter && (
                      <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                        <span className="text-emerald-500">✔</span>
                        <span>רשומה לניוזלטר חודשי</span>
                      </div>
                    )}
                    {communityFacebook && (
                      <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                        <span className="text-emerald-500">✔</span>
                        <span>רשומה לקהילת פייסבוק</span>
                      </div>
                    )}
                    {communityInstagram && (
                      <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                        <span className="text-emerald-500">✔</span>
                        <span>עוקבת באינסטגרם</span>
                      </div>
                    )}
                    {communityWhatsapp && (
                      <div className="flex gap-2 items-center flex-row-reverse text-xs text-gray-700 font-semibold font-sans">
                        <span className="text-emerald-500">✔</span>
                        <span>מחוברת לערוץ הווטסאפ השקט</span>
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => setIsCommunitySubmitted(false)}
                    className={`w-full py-4 rounded-2xl font-bold font-sans text-xs transition-all ${
                      theme === 'floral'
                        ? 'bg-rose-100 hover:bg-rose-200 text-[#DB9E93]'
                        : 'bg-calm-sage-light hover:bg-opacity-80 text-calm-sage-dark'
                    }`}
                  >
                    עדכון או שינוי ערוצי הקהילה
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div className="space-y-6">
             <h2 className="text-2xl font-serif font-bold text-right">הגדרות וחיבורים</h2>
             
             <div className="bg-white rounded-[2rem] card-shadow divide-y divide-gray-50 overflow-hidden">
                <div className="w-full">
                  <button 
                    onClick={() => setShowProfile(!showProfile)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors flex-row-reverse"
                  >
                    <div className="flex items-center gap-4 flex-row-reverse">
                      <div className="p-3 bg-calm-sage-light rounded-xl text-calm-sage-dark"><Settings size={20} /></div>
                      <span className="font-bold tracking-wide text-sm">פרופיל אישי</span>
                    </div>
                    <ChevronLeft size={20} className={`opacity-30 transition-transform ${showProfile ? '-rotate-90' : 'rotate-180'}`} />
                  </button>
                  
                  {showProfile && (
                    <div className="p-6 bg-slate-50/50 border-t border-gray-100 text-right space-y-4">
                      <div className="flex justify-between flex-row-reverse items-center gap-4">
                        <span className="text-gray-500 text-xs font-bold whitespace-nowrap">שם מלא</span>
                        {isEditingName ? (
                          <div className="flex gap-2 items-center flex-row-reverse w-full max-w-[200px]">
                            <input
                              type="text"
                              value={tempName}
                              onChange={(e) => setTempName(e.target.value)}
                              className="w-full bg-white px-3 py-1 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-calm-sage/30 text-right font-sans"
                              dir="rtl"
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSaveName();
                                if (e.key === 'Escape') {
                                  setIsEditingName(false);
                                  setTempName(fullName);
                                }
                              }}
                            />
                            <button 
                              onClick={handleSaveName}
                              className={`p-1.5 rounded-lg text-white shrink-0 ${theme === 'floral' ? 'bg-[#E5A49D] hover:bg-[#D9918A]' : 'bg-calm-sage hover:bg-calm-sage-dark'}`}
                              title="שמירה"
                            >
                              <CheckCircle2 size={16} />
                            </button>
                            <button 
                              onClick={() => {
                                setIsEditingName(false);
                                setTempName(fullName);
                              }}
                              className="p-1.5 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg shrink-0"
                              title="ביטול"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 flex-row-reverse">
                            <span className="font-semibold text-calm-dark text-sm font-sans">{fullName}</span>
                            <button 
                              onClick={() => {
                                setTempName(fullName);
                                setIsEditingName(true);
                              }}
                              className={`p-1 rounded-lg transition-colors ${theme === 'floral' ? 'text-[#DB9E93] hover:bg-rose-50' : 'text-calm-sage hover:bg-calm-sage-light/30'}`}
                              title="ערוך שם"
                            >
                              <Pencil size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-between flex-row-reverse items-center">
                        <span className="text-gray-500 text-xs font-bold">אימייל רכישה</span>
                        <span className="font-mono text-xs text-calm-dark">tanyab.zisser@gmail.com</span>
                      </div>

                      <div className="flex justify-between flex-row-reverse items-center">
                        <span className="text-gray-500 text-xs font-bold">מקור רכישה</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xl text-xs font-bold inline-flex items-center gap-1">
                          Google Play Store 💎
                        </span>
                      </div>

                      <div className="flex justify-between flex-row-reverse items-center">
                        <span className="text-gray-500 text-xs font-bold font-sans">סטטוס מנוי</span>
                        <span className="text-calm-sage-dark bg-calm-sage-light/60 px-2.5 py-1 rounded-xl text-xs font-bold">
                          פעיל ומסונכרן
                        </span>
                      </div>

                      <div className="pt-2 border-t border-gray-100 text-center">
                        <p className="text-[11px] text-gray-400 bg-white p-3 rounded-2xl border border-gray-100 leading-relaxed shadow-sm">
                          ✏️ באפשרותך לערוך את השם המלא שלך ידנית בכל עת, והוא יעודכן לאורך כל האפליקציה במכשירך.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button 
                    onClick={() => setShowDisplaySettings(!showDisplaySettings)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors flex-row-reverse"
                  >
                    <div className="flex items-center gap-4 flex-row-reverse">
                      <div className="p-3 bg-rose-50 rounded-xl text-rose-500"><Palette size={20} /></div>
                      <span className="font-bold tracking-wide text-sm">הגדרות תצוגה</span>
                    </div>
                    <ChevronLeft size={20} className={`opacity-30 transition-transform ${showDisplaySettings ? '-rotate-90' : 'rotate-180'}`} />
                  </button>

                  {showDisplaySettings && (
                    <div className="p-6 bg-slate-50/50 border-t border-gray-100 text-right space-y-4">
                      <div className="text-right">
                        <span className="text-gray-500 text-xs font-bold block mb-3">סגנון עיצוב</span>
                        <div className="grid grid-cols-2 gap-3">
                          {/* Calm Theme */}
                          <button
                            onClick={() => setTheme('calm')}
                            className={`p-4 rounded-3xl border-2 text-center transition-all flex flex-col items-center justify-center gap-2 ${
                              theme === 'calm'
                                ? 'border-calm-sage-dark bg-white shadow-sm ring-2 ring-calm-sage/20'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <span className="text-2xl">🌿</span>
                            <span className="text-xs font-bold text-calm-ink">ערכת צבעים רגועה</span>
                            <span className="text-[10px] text-gray-400">העיצוב המקורי והשקט</span>
                          </button>

                          {/* Floral Theme */}
                          <button
                            onClick={() => setTheme('floral')}
                            className={`p-4 rounded-3xl border-2 text-center transition-all flex flex-col items-center justify-center gap-2 relative overflow-hidden ${
                              theme === 'floral'
                                ? 'border-[#E5A49D] bg-white shadow-sm ring-2 ring-rose-100/40'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <span className="text-2xl select-none animate-pulse">🌸</span>
                            <span className="text-xs font-bold text-[#DB9E93]">ערכת צבעים פרחונית</span>
                            <span className="text-[10px] text-gray-400">שילוב צבעוני ופרחוני</span>
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-100 text-center">
                        <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                          {theme === 'floral'
                            ? '🌸 הערכה הפרחונית פתוחה והגרפיקה העדינה מופעלת בכל חלקי האפליקציה!'
                            : '🌿 ערכת העיצוב הרגועה והשלווה פעילה כעת ובכל אזורי האפליקציה.'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button 
                    onClick={() => setShowPrivacySettings(!showPrivacySettings)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors flex-row-reverse"
                  >
                    <div className="flex items-center gap-4 flex-row-reverse">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Shield size={20} /></div>
                      <span className="font-bold tracking-wide text-sm">פרטיות ואבטחה</span>
                    </div>
                    <ChevronLeft size={20} className={`opacity-30 transition-transform ${showPrivacySettings ? '-rotate-90' : 'rotate-180'}`} />
                  </button>

                  {showPrivacySettings && (
                    <div className="p-6 bg-slate-50/50 border-t border-gray-100 text-right space-y-5">
                      {/* On-device secure indicators */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 flex-row-reverse">
                          <span className="text-emerald-500 mt-1">✔</span>
                          <div className="text-right">
                            <span className="font-semibold text-calm-dark text-xs block">הצפנה מקומית על גבי המכשיר (On-Device Storage)</span>
                            <p className="text-gray-400 text-[10px] leading-relaxed">
                              כל פרגוני היומן, הרגלי היום וההתקדמות שלך מאוחסנים מוצפנים זיכרון המכשיר בלבד. אין לנו שום שרת חיצוני המקבל מידע אישי זה.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 flex-row-reverse">
                          <span className="text-emerald-500 mt-1">✔</span>
                          <div className="text-right">
                            <span className="font-semibold text-calm-dark text-xs block">אנונימיות מובטחת (No Cloud Sync)</span>
                            <p className="text-gray-400 text-[10px] leading-relaxed">
                              האפליקציה אינה דורשת הרשמה, שלב הזדהות או שיתוף של פרופילים חברתיים. המרחב הרגוע שלך בטוח ב-100%.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Version upgrade protection and update safety statement */}
                      <div className="border-t border-gray-100 pt-4 space-y-3">
                        <h4 className="font-semibold text-calm-dark text-xs flex items-center justify-end gap-1.5 flex-row">
                          <span>שמירת נתונים בעדכון גרסה (Google Play)</span>
                          <Database size={14} className="text-calm-sage-dark" />
                        </h4>
                        
                        <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/60 leading-relaxed text-right">
                          <div className="flex items-start gap-2.5 flex-row-reverse">
                            <span className="text-emerald-600 text-xs mt-0.5">✔</span>
                            <div className="text-right space-y-1">
                              <span className="font-bold text-emerald-800 text-xs block">הגנה אוטומטית בעדכונים פעילה</span>
                              <p className="text-gray-600 text-[11px] leading-relaxed">
                                המידע המשפחתי, ההרגלים היומיים, ההיסטוריה השבועית וכל היומנים שלך נשמרים תמיד בזיכרון המכשיר.
                              </p>
                              <p className="text-gray-600 font-medium text-[11px] leading-relaxed">
                                בעת עדכון האפליקציה לגרסה חדשה דרך Google Play, מערכת ההפעלה שומרת על קבצי האפליקציה המקומיים וכל המידע ההיסטורי והאישי שלך יישמר ויועבר אוטומטית ללא שום מחיקה או איבוד נתונים!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reset option */}
                      <div className="border-t border-gray-100 pt-4">
                        {confirmWipe ? (
                          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 text-center space-y-3">
                            <p className="text-xs font-bold text-red-700 font-sans leading-relaxed">
                              האם את בטוחה שברצונך למחוק לצמיתות את כל המידע האישי שלך באפליקציה? החלטה זו אינה הפיכה ותמחק הכל.
                            </p>
                            <div className="flex gap-2 justify-center">
                              <button 
                                onClick={handleWipeData}
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold font-sans"
                              >
                                כן, מחק הכל
                              </button>
                              <button 
                                onClick={() => setConfirmWipe(false)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-xs font-bold font-sans"
                              >
                                ביטול
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center flex-row-reverse">
                            <div className="text-right">
                              <span className="font-semibold text-calm-dark text-xs block">איפוס ומחיקת מידע</span>
                              <span className="text-gray-400 text-[9px] block">הסרת כל הנתונים, היומן וההיסטוריה מהמכשיר</span>
                            </div>
                            <button 
                              onClick={() => setConfirmWipe(true)}
                              className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 transition-colors rounded-xl text-xs font-semibold"
                            >
                              למחיקת מידע
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <button 
                    onClick={() => setShowComplianceSettings(!showComplianceSettings)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors flex-row-reverse"
                  >
                    <div className="flex items-center gap-4 flex-row-reverse">
                      <div className="p-3 bg-teal-50 rounded-xl text-teal-600"><FileText size={20} /></div>
                      <span className="font-bold tracking-wide text-sm font-sans">מדיניות פרטיות ותנאים</span>
                    </div>
                    <ChevronLeft size={20} className={`opacity-30 transition-transform ${showComplianceSettings ? '-rotate-90' : 'rotate-180'}`} />
                  </button>

                  {showComplianceSettings && (
                    <div className="p-6 bg-slate-50/50 border-t border-gray-100 text-right space-y-4">
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">
                        האפליקציה פועלת בהתאם להנחיות ולמדיניות המחמירה של Google Play. 
                        מדיניות הפרטיות ותנאי השימוש הרשמיים שלנו זמינים לצפייה מלאה בכל עת.
                      </p>

                      <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-2xl flex items-start gap-3 flex-row-reverse">
                        <span className="text-emerald-600 text-lg">✔</span>
                        <div className="text-right w-full">
                          <span className="text-xs font-bold text-emerald-800 block mb-1">קישור רשמי וציבורי תואם Google Play Console:</span>
                          <span className="text-[10px] text-gray-400 font-mono select-all block break-all bg-white p-2 rounded-lg border border-gray-100 text-left" dir="ltr">
                            https://ais-pre-jhycsdjlndfixk3jhu6x5l-241522889105.europe-west2.run.app/privacy
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-2">
                        <button 
                          onClick={() => setShowPrivacyPolicyModal(true)}
                          className={`w-full py-3 px-4 rounded-xl font-bold text-xs text-white transition-colors text-center ${theme === 'floral' ? 'bg-[#E5A49D] hover:bg-[#D9918A]' : 'bg-calm-sage hover:bg-calm-sage-dark'}`}
                        >
                          📖 קריאת המדיניות בתוך האפליקציה
                        </button>
                        
                        <a 
                          href="/privacy" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors text-xs font-bold text-center block"
                        >
                          🌐 פתיחה בדפדפן חיצוני
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

             <div className="mt-8 p-8 bg-calm-sage-dark text-white rounded-[40px] text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                <Heart size={32} className="mx-auto mb-4 opacity-70" />
                <h3 className="text-xl font-serif mb-3 leading-tight">את חלק מקהילה</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-8">
                  הורות יחידנית יכולה להיות מאתגרת, אבל את לא לבד. כל הרגל כאן נבחר בקפידה עבורך.
                </p>
                <button 
                  onClick={() => {
                    setTab('community');
                  }}
                  className="w-full py-4 bg-white text-calm-sage-dark rounded-2xl font-bold text-sm tracking-widest hover:bg-opacity-90 transition-all font-sans"
                >
                  מעבר לקהילה וחיבורים
                </button>
             </div>
          </div>
        )}

        {/* Footer with copyright */}
        <div className="w-full text-center mt-12 mb-6 text-xs text-gray-400 font-medium font-sans flex flex-col gap-1 items-center" id="copyright-footer">
          <div>כל הזכויות שמורות לטניה זיסר – רגע לעצמי</div>
          <div className="text-[10px] text-gray-400">האפליקציה נוצרה על פי הספר "מאה הרגלים לאימא עצמאית"</div>
        </div>
      </main>

      {/* Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto h-24 glass z-40 px-4 flex items-center justify-around border-t rounded-t-[2.5rem] card-shadow flex-row-reverse pb-4 transition-colors duration-500 ${
        theme === 'floral' ? 'border-rose-100/60 bg-white/60' : 'border-calm-border'
      }`}>
        <button 
          onClick={() => setTab('today')}
          className={`flex flex-col items-center gap-1 transition-all ${
            tab === 'today' 
              ? theme === 'floral' ? 'text-[#DB9E93] scale-105' : 'text-calm-sage scale-105' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab === 'today' && <div className={`w-1.5 h-1.5 rounded-full mb-1 ${theme === 'floral' ? 'bg-[#DB9E93]' : 'bg-calm-sage'}`} />}
          <span className="text-[10px] font-bold">היום שלי</span>
        </button>
        <button 
          onClick={() => setTab('journal')}
          className={`flex flex-col items-center gap-1 transition-all ${
            tab === 'journal' 
              ? theme === 'floral' ? 'text-[#DB9E93] scale-105' : 'text-calm-sage scale-105' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab === 'journal' && <div className={`w-1.5 h-1.5 rounded-full mb-1 ${theme === 'floral' ? 'bg-[#DB9E93]' : 'bg-calm-sage'}`} />}
          <span className="text-[10px] font-bold">פרגון עצמי</span>
        </button>
        <button 
          onClick={() => setTab('stats')}
          className={`flex flex-col items-center gap-1 transition-all ${
            tab === 'stats' 
              ? theme === 'floral' ? 'text-[#DB9E93] scale-105' : 'text-calm-sage scale-105' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab === 'stats' && <div className={`w-1.5 h-1.5 rounded-full mb-1 ${theme === 'floral' ? 'bg-[#DB9E93]' : 'bg-calm-sage'}`} />}
          <span className="text-[10px] font-bold">התקדמות</span>
        </button>
        <button 
          onClick={() => setTab('community')}
          className={`flex flex-col items-center gap-1 transition-all ${
            tab === 'community' 
              ? theme === 'floral' ? 'text-[#DB9E93] scale-105' : 'text-calm-sage scale-105' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab === 'community' && <div className={`w-1.5 h-1.5 rounded-full mb-1 ${theme === 'floral' ? 'bg-[#DB9E93]' : 'bg-calm-sage'}`} />}
          <span className="text-[10px] font-bold">קהילה</span>
        </button>
        <button 
          onClick={() => setTab('settings')}
          className={`flex flex-col items-center gap-1 transition-all ${
            tab === 'settings' 
              ? theme === 'floral' ? 'text-[#DB9E93] scale-105' : 'text-calm-sage scale-105' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab === 'settings' && <div className={`w-1.5 h-1.5 rounded-full mb-1 ${theme === 'floral' ? 'bg-[#DB9E93]' : 'bg-calm-sage'}`} />}
          <span className="text-[10px] font-bold">הגדרות</span>
        </button>
      </nav>

      <AnimatePresence>
        {showSOS && <SOSMode onClose={() => setShowSOS(false)} />}
        {selectedHabit && (
          <HabitDetail 
            habit={selectedHabit} 
            isCompleted={completedHabits.includes(selectedHabit.id)}
            onToggle={() => toggleHabit(selectedHabit.id)}
            onClose={() => setSelectedHabit(null)} 
            history={history[selectedHabit.id] || []}
            theme={theme}
          />
        )}
        {showCommunityModal && (
          <CommunityModal 
            onClose={() => setShowCommunityModal(false)}
            newsletter={communityNewsletter}
            setNewsletter={(val) => {
              setCommunityNewsletter(val);
              localStorage.setItem('community_newsletter', String(val));
            }}
            facebook={communityFacebook}
            setFacebook={(val) => {
              setCommunityFacebook(val);
              localStorage.setItem('community_facebook', String(val));
            }}
            instagram={communityInstagram}
            setInstagram={(val) => {
              setCommunityInstagram(val);
              localStorage.setItem('community_instagram', String(val));
            }}
            whatsapp={communityWhatsapp}
            setWhatsapp={(val) => {
              setCommunityWhatsapp(val);
              localStorage.setItem('community_whatsapp', String(val));
            }}
            theme={theme}
            isSubmitted={isCommunitySubmitted}
            setIsSubmitted={setIsCommunitySubmitted}
            fullName={fullName}
            email="tanyab.zisser@gmail.com"
          />
        )}
        {showPrivacyPolicyModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="privacy-policy-modal" dir="rtl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden relative border border-gray-100 shadow-2xl"
            >
              {/* Header with Title */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <button 
                  onClick={() => setShowPrivacyPolicyModal(false)}
                  className="p-1.5 hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-xl transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="text-right">
                  <h3 className="text-base font-serif font-bold text-calm-dark">מדיניות פרטיות ותנאי שימוש</h3>
                  <p className="text-[10px] text-gray-400">רגע לעצמי</p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto text-right text-xs text-gray-600 space-y-4 font-sans leading-relaxed">
                <div className="bg-calm-sage-light/40 p-4 rounded-2xl border border-calm-sage-light/60">
                  <p className="font-bold text-calm-sage-dark text-xs mb-1">🛡️ פרטיותך מובטחת ב-100%</p>
                  <p className="text-gray-500 text-[11px]">
                    כל המידע האישי שלך, היומן, וההרגלים היומיים מאוחסנים על גבי המכשיר שלך בלבד ואינם נשלחים לאף שרת חיצוני.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-calm-dark text-xs">1. אבטחה ועדכונים ב-Google Play</h4>
                  <p>
                    בעת עדכון האפליקציה לגרסה חדשה דרך חנות Google Play, מערכת ההפעלה שומרת על קובצי הנתונים המקומיים וכל המידע ההיסטורי והאישי שלך יישמר ויועבר אוטומטית ללא שום מחיקה.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-calm-dark text-xs">2. חיבורים וקהילה</h4>
                  <p>
                    במידה ותבחרי להשאיר שם ואימייל כדי להצטרף לניוזלטר הקהילה בלבד, המידע יישלח בצורה מאובטחת לשם תקשורת איתך. אנו לעולם לא נעביר את פרטיך לגורם שלישי כלשהו.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-calm-dark text-xs">3. זכויות ומחיקת מידע</h4>
                  <p>
                    תוכלי למחוק את כל המידע האישי שלך מיידית בכל עת על ידי כניסה להגדרות &lt; "פרטיות ואבטחה" &gt; "איפוס ומחיקת מידע".
                  </p>
                </div>

                <div className="space-y-2 pb-2">
                  <h4 className="font-bold text-calm-dark text-xs">4. תנאי שימוש</h4>
                  <p>
                    התכנים וההרגלים באפליקציה נועדו להעצמה אישית בלבד ואינם מהווים תחליף לייעוץ פסיכולוגי, טיפול רווחתי או רפואי מקצועי. כל הזכויות שמורות לטניה זיסר. האפליקציה נוצרה על פי הספר "מאה הרגלים לאימא עצמאית".
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 border-t border-gray-50 bg-gray-50 flex gap-2">
                <button
                  onClick={() => setShowPrivacyPolicyModal(false)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs text-white text-center shadow-sm transition-all ${theme === 'floral' ? 'bg-[#E5A49D] hover:bg-[#D9918A]' : 'bg-calm-sage hover:bg-calm-sage-dark'}`}
                >
                  קראתי והבנתי
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
