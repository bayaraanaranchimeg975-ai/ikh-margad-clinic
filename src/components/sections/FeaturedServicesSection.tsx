"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/routing";
import { ArrowRight, Activity } from "lucide-react";

export default function FeaturedServicesSection() {
  const t = useTranslations("featuredServices");

  const featured = [
    {
      id: 1,
      title: t("service1Title"),
      description: t("service1Desc"),
      icon: "🔍",
    },
    {
      id: 2,
      title: t("service2Title"),
      description: t("service2Desc"),
      icon: "🔬",
    },
    {
      id: 3,
      title: t("service3Title"),
      description: t("service3Desc"),
      icon: "🩺",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#19374E] to-[#0C909E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Activity className="w-8 h-8 text-[#E4F7F8]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <span className="text-[#BCEEEF] font-medium text-sm uppercase tracking-wider">
              {t("subtitle")}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={0.1 * index}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#BCEEEF] font-medium hover:text-white transition-colors"
                >
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
