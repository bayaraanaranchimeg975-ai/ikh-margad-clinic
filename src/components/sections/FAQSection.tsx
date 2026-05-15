"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Цаг авахын тулд ямар мэдээлэл бэлтгэх хэрэгтэй вэ?",
      answer: "Та утасны дугаар, овог нэр, үйлчлүүлэх эмчийн нэр болон тохиромжтой цагаа бэлтгэх хэрэгтэй. Онлайн цаг авах бол э-мэйл хаяг ч хэрэгтэй.",
    },
    {
      question: "Эмнэлгийн ажлын цаг хэдээс хэдэн цаг хүртэл вэ?",
      answer: "Бид даваа гарагаас баасан гараг хүртэл 08:00-18:00 цагийн хооронд ажилладаг. Бямба гарагт 09:00-14:00, ням гарагт амарна.",
    },
    {
      question: "Даатгалаар үйлчлүүлж болох уу?",
      answer: "Тийм ээ, бид Нийгмийн даатгал, Хувийн даатгалтай хамтран ажилладаг. Үйлчлүүлэхээс өмнө даатгалын мэдээллээ бэлдээрэй.",
    },
    {
      question: "Шинжилгээний хариу хэд хоногийн дараа гарах вэ?",
      answer: "Ерөнхий шинжилгээний хариу 1-2 хоног, нарийн шинжилгээ 3-5 хоногийн дотор гарна. Хариуг утсаар эсвэл и-мэйлээр мэдэгдэнэ.",
    },
    {
      question: "Хүүхэдтэй ирэхэд тусгай өрөө байгаа юу?",
      answer: "Тийм, бид хүүхдийн тоглоомын өрөө, хүүхдийн жорлонтой. Мөн хүүхдийн эмчилгээний тусгай бүс байгаа.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              Тусламж
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19374E] mt-3 mb-4">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-[#657D90] text-lg">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={0.05 * index}>
              <div className="border border-[#DAE2E4] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FCFCFC] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-[#19374E] pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0C909E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#657D90] flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[#657D90] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
