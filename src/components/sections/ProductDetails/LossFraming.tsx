"use client";

export default function LossFraming() {
  return (
    <div className="mt-10 lg:mt-14 rounded-2xl bg-brand-text p-6 lg:p-8 text-center">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-2">فكري كده</p>
      <h3 className="font-serif text-xl lg:text-2xl text-white mb-3">لو مش اشتريتي النهارده — هتفضلي إزاي؟</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          اسمرار مستمر
        </div>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ثقة أقل
        </div>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          منتجات تانية مش شغالة
        </div>
      </div>
      <button onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block mt-6 bg-brand-pink-dark text-white rounded-full px-8 py-3 text-sm tracking-wide font-medium transition-all duration-300 hover:bg-brand-pink hover:scale-105">
        مش هضيع وقت تاني — اطلبي الآن
      </button>
    </div>
  );
}
