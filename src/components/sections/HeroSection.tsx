"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight, Calendar } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-[#E4F7F8] via-white to-[#BCEEEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#DAE2E4]">
                <Calendar className="w-4 h-4 text-[#0C909E]" />
                <span className="text-sm text-[#657D90]">Эрүүл мэндийн үйлчилгээ</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#19374E] mb-4 leading-tight">
                {t("title")}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl text-[#0C909E] font-medium mb-4">
                {t("subtitle")}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-[#657D90] text-lg mb-8 max-w-lg">
                {t("description")}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0C909E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0a7a85] transition-colors"
                >
                  {t("ctaPrimary")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-[#19374E] px-8 py-3 rounded-full font-medium border border-[#DAE2E4] hover:bg-[#E4F7F8] transition-colors"
                >
                  {t("ctaSecondary")}
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3} className="hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-[#0C909E] to-[#BCEEEF] rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Таны эрүүл мэнд</p>
                  <p className="text-sm opacity-80">Бидний нандин зорилго</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
