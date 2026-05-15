"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  const navItems = [
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("team"), href: "/team" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-[#0C909E] text-white">
      {/* CTA Banner */}
      <div className="bg-[#E4F7F8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#19374E] mb-4">
            Эрт илрүүлж – Эрүүл амьдаръя
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#0C909E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0a7a85] transition-colors"
          >
            Цаг авах
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0C909E] font-bold text-sm">IM</span>
              </div>
              <span className="font-semibold text-lg">IKH MARGAD</span>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] uppercase text-[#E4F7F8] hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm text-[#E4F7F8]">
              {tf("rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
