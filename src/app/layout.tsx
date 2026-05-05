import type { Metadata } from "next";
import { Amiri, Alexandria } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIORA Beauty — كريم تفتيح المناطق الحساسة | نتائج من أول أسبوعين",
  description: "كريم ديورا لتفتيح وترطيب المناطق الحساسة — تركيبة طبية آمنة بالنياسيناميد والألفا أربوتين. تم اختباره طبياً. مناسب لكل البشرات.",
  openGraph: {
    title: "DIORA Beauty — كريم تفتيح المناطق الحساسة",
    description: "نتائج ملحوظة من أول أسبوعين. تركيبة آمنة ولطيفة.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="ar"
      className={`${amiri.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-text overflow-x-hidden">
          {children}
      </body>
    </html>
  );
}
