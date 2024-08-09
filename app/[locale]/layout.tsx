import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI cases",
  description: "AI trials and use cases by @bro.pereira",
};

export default function SubLayout({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
