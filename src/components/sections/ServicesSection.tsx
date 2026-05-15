"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stethoscope, Microscope, HeartPulse, Baby, Bone, Eye } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Stethoscope,
      title: "Ерөнхий оношлогоо",
      description: "Бүрэн биеийн үзлэг, эрүүл мэндийн үнэлгээ",
    },
    {
      icon: Microscope,
      title: "Лаборатори шинжилгээ",
      description: "Өндөр нарийвчлалтай шинжилгээний үйлчилгээ",
    },
    {
      icon: HeartPulse,
      title: "Зүрх судас",
      description: "Зүрхний эхо, ЭКГ, судасны шинжилгээ",
    },
    {
      icon: Baby,
      title: "Эх барих эмэгтэйчүүд",
      description: "Жирэмсний хяналт, үргэлжлүүлэн хяналт",
    },
    {
      icon: Bone,
      title: "Ясны нөхөн сэргээлт",
      description: "Яс, үе мөчний оношлогоо, эмчилгээ",
    },
    {
      icon: Eye,
      title: "Нүдний эмчилгээ",
      description: "Нүдний бүрэн үзлэг, оношлогоо",
    },
  ];

  return (
    <section className="py-20 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              Үйлчилгээ
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-4">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-[#657D90] text-lg max-w-2xl mx-auto">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={0.1 * index}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#DAE2E4]/50 group">
                <div className="w-14 h-14 bg-[#E4F7F8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0C909E] transition-colors">
                  <service.icon className="w-7 h-7 text-[#0C909E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#19374E] text-lg mb-2">{service.title}</h3>
                <p className="text-[#657D90] text-sm">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
