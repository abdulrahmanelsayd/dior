import Image from 'next/image';

export default function ScienceMeetsNature() {
  return (
    <section id="science-section" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative flex items-center justify-center min-h-[450px] lg:min-h-[65vh]">
            <Image
              src="/assets/images/hero-product-transparent.png"
              alt="كريم ديورا"
              fill
              sizes="50vw"
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-brand-pink-dark/70 mb-2 block">العلم يلتقي بالطبيعة</span>
              <div className="w-16 h-[2px] origin-right bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-4" />
              <h2 className="font-serif text-3xl lg:text-4xl text-brand-text leading-snug mb-2">
                المستحضر الطبيعي المطور
              </h2>
              <p className="text-brand-muted text-sm lg:text-base leading-relaxed max-w-md">
                كريم Check Out — المستحضر الطبيعي المطور من DIORA. تخلصي من اللون الغامق واحصلي على تبييض طبيعي ونعومة لا مثيل لها.
              </p>
            </div>

            {/* Ingredient Pills */}
            <div className="flex flex-wrap gap-2">
              {['أعشاب طبيعية', 'زهور الطبيعة', 'المسك الأبيض', 'مواد مرطبة', 'عناصر مضادة للبكتيريا'].map((ingredient) => (
                <span key={ingredient} className="px-3 py-1.5 text-xs tracking-wide text-brand-text/70 border border-brand-text/10 rounded-full bg-brand-bg/50">
                  {ingredient}
                </span>
              ))}
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-4 border-t border-brand-text/10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-sm">💧</span>
                <div>
                  <span className="text-xs font-medium text-brand-text block">اختبار طبي</span>
                  <span className="text-[10px] text-brand-muted">آمن وموثوق</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-sm">🌿</span>
                <div>
                  <span className="text-xs font-medium text-brand-text block">خالي من الكيماويات</span>
                  <span className="text-[10px] text-brand-muted">بدون تهيج أو تلف</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-sm">🔬</span>
                <div>
                  <span className="text-xs font-medium text-brand-text block">آمن مع الليزر</span>
                  <span className="text-[10px] text-brand-muted">للجنسين</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-sm">✨</span>
                <div>
                  <span className="text-xs font-medium text-brand-text block">نتيجة دائمة</span>
                  <span className="text-[10px] text-brand-muted">حتى بعد وقف الاستعمال</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
