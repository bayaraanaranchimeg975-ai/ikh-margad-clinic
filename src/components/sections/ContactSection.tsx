"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: MapPin,
      label: t("address"),
      value: "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Энхтайвны өргөн чөлөө-15",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+976 11 33 44 55",
    },
    {
      icon: Mail,
      label: t("email"),
      value: "info@ikhmargad.mn",
    },
    {
      icon: Clock,
      label: t("hours"),
      value: "Да-Ба: 08:00-18:00, Бя: 09:00-14:00",
    },
  ];

  return (
    <section className="py-20 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              Холбоо барих
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <FadeIn key={item.label} direction="up" delay={0.1 * index}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0C909E]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#19374E] mb-1">{item.label}</p>
                      <p className="text-[#657D90] text-sm">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <form className="bg-white rounded-2xl p-8 shadow-sm border border-[#DAE2E4]/50">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#19374E] mb-2">
                    {t("namePlaceholder")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                    placeholder={t("namePlaceholder")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#19374E] mb-2">
                      {t("emailPlaceholder")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#19374E] mb-2">
                      {t("phonePlaceholder")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                      placeholder={t("phonePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#19374E] mb-2">
                    {t("messagePlaceholder")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all resize-none"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0C909E] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0a7a85] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t("submit")}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
