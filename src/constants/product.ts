import type { ChecklistItem, ProductStat } from "@/types/data";

export const PRODUCT_PRICE = "349 ج.م";
export const PRODUCT_ORIGINAL_PRICE = "449 ج.م";
export const PRODUCT_DISCOUNT_PERCENT = 22;
export const PRODUCT_SHIPPING = "50 ج.م";
export const PRODUCT_TOTAL = "399 ج.م";
export const PRODUCT_NAME = "كريم Check Out";
export const PRODUCT_BRAND = "DIORA";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { text: "منتج طبي وآمن — من أعشاب وزهور الطبيعة" },
  { text: "تفتيح وتبييض تدريجي وطبيعي" },
  { text: "خالي من المواد الكيميائية الضارة" },
  { text: "يناسب البشرة الحساسة جداً — للجنسين" },
];

export const PRODUCT_STATS: ProductStat[] = [
  { key: "brightening", value: 98, label: "تفتيح ملحوظ" },
  { key: "softness", value: 92, label: "نعومة فائقة" },
  { key: "satisfaction", value: 97, label: "رضا العملاء" },
];

export const STATS_ANIMATION_DURATION = 1500;
