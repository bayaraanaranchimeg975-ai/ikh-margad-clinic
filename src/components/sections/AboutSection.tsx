"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Target, Eye, Heart, Award } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E4F7F8] rounded-full mb-6">
              <Target className="w-8 h-8 text-[#0C909E]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              {t("missionLabel")}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-6">
              {t("missionTitle")}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-[#657D90] text-lg leading-relaxed max-w-3xl mx-auto">
              {t("missionText")}
            </p>
          </FadeIn>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <FadeIn direction="up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Eye className="w-8 h-8 text-[#0C909E]" />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
                {t("visionLabel")}
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-6">
                {t("visionTitle")}
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-[#19374E] text-lg leading-relaxed max-w-3xl mx-auto">
                {t("visionText")}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: t("feature1Title"), desc: t("feature1Desc") },
            { icon: Award, title: t("feature2Title"), desc: t("feature2Desc") },
            { icon: Target, title: t("feature3Title"), desc: t("feature3Desc") },
            { icon: Eye, title: t("feature4Title"), desc: t("feature4Desc") },
          ].map((feature, index) => (
            <FadeIn key={feature.title} direction="up" delay={0.1 * index}>
              <div className="bg-[#FCFCFC] rounded-2xl p-6 text-center border border-[#DAE2E4]/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-[#0C909E]" />
                </div>
                <h3 className="font-semibold text-[#19374E] mb-2">{feature.title}</h3>
                <p className="text-[#657D90] text-sm">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
