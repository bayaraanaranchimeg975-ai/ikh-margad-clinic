"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const LABELS: Record<string, string> = { en: "EN", mn: "МН" };

export function LanguageSwitcher({ locales }: { locales: string[] }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-sm">
      {locales.map((l) => (
        <Link key={l} href={pathname} locale={l}
          className={l === locale ? "font-bold text-[#0C909E]" : "opacity-60 hover:opacity-100"}>
          {LABELS[l] ?? l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("team"), href: "/team" },
    { label: t("testimonials"), href: "/testimonials" },
    { label: t("faq"), href: "/faq" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#DAE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo.svg" 
              alt="ИХ МАРГАД ЭМНЭЛЭГ"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-semibold text-[#19374E] text-lg hidden sm:block">
              ИХ МАРГАД
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] uppercase font-medium text-[#657D90] hover:text-[#0C909E] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locales={["mn", "en"]} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#19374E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#DAE2E4]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#657D90] hover:text-[#0C909E] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher locales={["mn", "en"]} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
