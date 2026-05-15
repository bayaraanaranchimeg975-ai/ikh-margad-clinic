"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Heart, Shield, Clock, Award } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const features = [
    {
      icon: Heart,
      title: "Хайр халамж",
      description: "Үйлчлүүлэгч бүртээ хайр халамжтай ханддаг",
    },
    {
      icon: Shield,
      title: "Итгэлцэл",
      description: "15+ жилийн туршлага, итгэлцлийн үндэс",
    },
    {
      icon: Clock,
      title: "24/7 үйлчилгээ",
      description: "Хоногийн турш, долоо хоногийн бүх өдөр",
    },
    {
      icon: Award,
      title: "Мэргэжлийн баг",
      description: "Туршлагатай, өндөр мэргэшсэн эмч нар",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="up">
              <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
                Бидний тухай
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-6">
                {t("title")}
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-[#657D90] text-lg leading-relaxed mb-8">
                {t("description")}
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} direction="up" delay={0.3 + index * 0.1}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E4F7F8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#0C909E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#19374E] text-sm">{feature.title}</h3>
                      <p className="text-[#8095A6] text-xs mt-1">{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#0C909E] mb-2">15+</div>
                  <p className="text-[#19374E] font-medium">Жилийн туршлага</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold text-[#0C909E]">50+</div>
                      <p className="text-xs text-[#657D90]">Эмч нар</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold text-[#0C909E]">100K+</div>
                      <p className="text-xs text-[#657D90]">Үйлчлүүлэгч</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
