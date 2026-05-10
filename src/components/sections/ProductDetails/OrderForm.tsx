"use client";

import { CheckCircle2, ShieldCheck, Truck, Package } from "lucide-react";
import { useProductForm } from "@/hooks/useProductForm";
import GovernorateSelect from "./GovernorateSelect";

export default function OrderForm() {
  const { isSubmitted, isSubmitting, handleSubmit } = useProductForm();

  return (
    <div id="order-form" className="mt-16 lg:mt-20 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-sm uppercase tracking-[0.25em] text-brand-pink-dark/70 font-medium block mb-2">خطوة واحدة للجمال</span>
        <div className="w-16 h-[2px] bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-4 mx-auto" />
        <h3 className="font-serif text-2xl lg:text-3xl text-brand-text mb-2">إتمام الطلب</h3>
        <p className="text-brand-muted/50 text-xs">الدفع عند الاستلام — شحن 50 ج.م</p>
      </div>

      {/* Screen reader live region for form state announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isSubmitted && "تم استلام طلبك بنجاح. سيتواصل معك أحد ممثلي خدمة العملاء قريباً لتأكيد الشحن."}
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div className="w-16 h-16 bg-brand-pink-dark/8 rounded-full flex items-center justify-center mb-5">
            <CheckCircle2 className="w-8 h-8 text-brand-pink-dark"/>
          </div>
          <h4 className="font-serif text-2xl text-brand-text mb-2">شكراً لثقتك!</h4>
          <p className="text-brand-muted/60 text-sm leading-relaxed max-w-[280px]">
            تم استلام طلبك بنجاح. سيتواصل معك أحد ممثلي خدمة العملاء قريباً لتأكيد الشحن.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-label="طلب المنتج" className="bg-white rounded-2xl border border-brand-text/5 shadow-sm p-6 lg:p-8 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col relative group">
              <input required type="text" id="fname" className="w-full bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent" placeholder="الاسم" />
              <label htmlFor="fname" className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none">الاسم بالكامل</label>
            </div>
            <div className="flex flex-col relative group">
              <input required type="tel" id="phone" dir="ltr" className="w-full text-right bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent" placeholder="رقم" />
              <label htmlFor="phone" className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none">رقم الهاتف</label>
            </div>
          </div>
          <GovernorateSelect />
          <div className="flex flex-col relative group">
            <input required type="text" id="city" className="w-full bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent" placeholder="المدينة" />
            <label htmlFor="city" className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none">المدينة / المنطقة</label>
          </div>
          <div className="flex flex-col relative group">
            <input required type="text" id="address" className="w-full bg-transparent border-b border-brand-text/10 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-pink-dark/60 transition-colors duration-500 peer placeholder-transparent" placeholder="العنوان" />
            <label htmlFor="address" className="absolute right-0 top-3 text-xs text-brand-muted/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-brand-pink-dark/60 peer-focus:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-[0.15em] peer-[&:not(:placeholder-shown)]:text-brand-muted/50 uppercase tracking-widest pointer-events-none">العنوان بالتفصيل</label>
          </div>
          <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="w-full bg-brand-text text-white rounded-full py-4 text-sm tracking-wide shadow-lg hover:shadow-xl hover:bg-brand-pink-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none">
            {isSubmitting ? <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span> : "تأكيد الطلب — الإجمالي 399 ج.م"}
          </button>
          <div className="flex items-center justify-center gap-6 text-[10px] text-brand-muted/40">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5"/>
              <span>دفع آمن</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5"/>
              <span>شحن 50 ج.م</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5"/>
              <span>ضمان 14 يوم</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
