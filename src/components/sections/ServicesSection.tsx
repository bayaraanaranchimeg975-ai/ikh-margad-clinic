"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stethoscope, Microscope, Activity, Gauge, Droplets, Bug, ScanLine, FlaskConical, Users, Building2 } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Stethoscope,
      title: t("service1Title"),
      description: t("service1Desc"),
    },
    {
      icon: Microscope,
      title: t("service2Title"),
      description: t("service2Desc"),
    },
    {
      icon: Activity,
      title: t("service3Title"),
      description: t("service3Desc"),
    },
    {
      icon: Gauge,
      title: t("service4Title"),
      description: t("service4Desc"),
    },
    {
      icon: Droplets,
      title: t("service5Title"),
      description: t("service5Desc"),
    },
    {
      icon: Bug,
      title: t("service6Title"),
      description: t("service6Desc"),
    },
    {
      icon: ScanLine,
      title: t("service7Title"),
      description: t("service7Desc"),
    },
    {
      icon: FlaskConical,
      title: t("service8Title"),
      description: t("service8Desc"),
    },
  ];

  return (
    <section className="py-20 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E4F7F8] rounded-full mb-6">
              <Stethoscope className="w-8 h-8 text-[#0C909E]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              {t("subtitle")}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-4">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-[#657D90] text-lg max-w-2xl mx-auto">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={0.1 * index}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#DAE2E4]/50 group h-full">
                <div className="w-14 h-14 bg-[#E4F7F8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0C909E] transition-colors">
                  <service.icon className="w-7 h-7 text-[#0C909E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#19374E] text-lg mb-2">{service.title}</h3>
                <p className="text-[#657D90] text-sm">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Preventive Checkups */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-16 bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] rounded-3xl p-8 md:p-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <Users className="w-8 h-8 text-[#0C909E]" />
              <Building2 className="w-8 h-8 text-[#0C909E]" />
            </div>
            <p className="text-[#19374E] text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              {t("preventiveText")}
            </p>
          </div>
        </FadeIn>

        {/* Slogan */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#0C909E]">
              {t("slogan")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
