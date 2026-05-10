import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const textFont = localFont({
  src: "../../public/fonts/text.ttf",
  variable: "--font-text",
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
      className={`${textFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-text overflow-x-hidden">
          {children}
      </body>
    </html>
  );
}
