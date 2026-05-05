import type { IngredientShort, IngredientFull } from "@/types/data";

export const INGREDIENTS_SHORT: IngredientShort[] = [
  { src: "/assets/images/ingredient-alpha-arbutinn.png", label: "Alpha Arbutin" },
  { src: "/assets/images/ingredient-niacinamidee.png", label: "Niacinamide" },
];

export const INGREDIENTS_FULL: IngredientFull[] = [
  {
    src: "/assets/images/ingredient-niacinamidee.png",
    title: "مستخلصات الأعشاب والزهور",
    subtitle: "Niacinamide",
    desc: "تفتيح تدريجي وطبيعي للمناطق الحساسة — يناسب البشرة الحساسة جدًا",
    benefits: [
      "تفتيح وتبييض المناطق الداكنة",
      "إزالة السواد وتوحيد لون البشرة",
      "خالٍ من المواد المهيجة والكيميائية الضارة",
    ],
  },
  {
    src: "/assets/images/ingredient-alpha-arbutinn.png",
    title: "المسك الأبيض والعناصر المضادة للبكتيريا",
    subtitle: "Alpha Arbutin",
    desc: "تعطير منعش بالمسك الأبيض وترطيب عميق — نتيجة دائمة",
    benefits: [
      "تعطير بالمسك الأبيض المنعش",
      "مقاومة البكتيريا المسببة للروائح",
      "ترطيب عميق وتغذية ومعالجة التهيج",
    ],
  },
];
