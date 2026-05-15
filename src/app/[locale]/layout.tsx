import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IKH MARGAD CLINIC - Эрүүл мэндийн үйлчилгээ",
  description: "IKH MARGAD CLINIC - Монголын тэргүүлэгч эрүүл мэндийн үйлчилгээ үзүүлэгч",
};

export function generateStaticParams() {
  return [{ locale: "mn" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <Header />
            {children}
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
