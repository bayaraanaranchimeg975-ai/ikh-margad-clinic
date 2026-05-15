"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { User } from "lucide-react";

export default function TeamSection() {
  const t = useTranslations("team");

  const team = [
    {
      name: "Др. Бат-Эрдэнэ",
      role: "Ерөнхий эмч",
      specialty: "Доторын өвчин",
      experience: "20+ жил",
    },
    {
      name: "Др. Оюунчимэг",
      role: "Эмнэлгийн захирал",
      specialty: "Эх барих эмэгтэйчүүд",
      experience: "18+ жил",
    },
    {
      name: "Др. Ганбат",
      role: "Мэргэжлийн эмч",
      specialty: "Мэдрэлийн мэс засал",
      experience: "15+ жил",
    },
    {
      name: "Др. Сарангэрэл",
      role: "Ахлах эмч",
      specialty: "Хүүхдийн эмч",
      experience: "12+ жил",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              Манай баг
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <FadeIn key={member.name} direction="up" delay={0.1 * index}>
              <div className="bg-[#FCFCFC] rounded-2xl p-6 text-center border border-[#DAE2E4]/50 hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-[#E4F7F8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-[#0C909E]" />
                </div>
                <h3 className="font-semibold text-[#19374E] text-lg">{member.name}</h3>
                <p className="text-[#0C909E] font-medium text-sm mt-1">{member.role}</p>
                <p className="text-[#657D90] text-sm mt-2">{member.specialty}</p>
                <div className="mt-3 inline-block bg-[#E4F7F8] px-3 py-1 rounded-full">
                  <span className="text-xs text-[#0C909E] font-medium">{member.experience}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
