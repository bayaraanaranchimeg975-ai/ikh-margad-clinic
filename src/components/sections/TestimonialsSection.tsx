"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: "Болд",
      role: "Үйлчлүүлэгч",
      content: "Маш сайн үйлчилгээ. Эмч нар маш мэргэжлийн, халамжтай. Оношлогоо хурдан, нарийвчлалтай хийгдсэн.",
      rating: 5,
    },
    {
      name: "Сарантуяа",
      role: "Үйлчлүүлэгч",
      content: "IKH MARGAD CLINIC-д 5 жил үйлчлүүлж байна. Хүүхдүүдийнхээ вакцинжуулалтыг энд хийлгэдэг. Багтаа баярлалаа!",
      rating: 5,
    },
    {
      name: "Ганхуяг",
      role: "Үйлчлүүлэгч",
      content: "Эмнэлгийн орчин цэвэрхэн, тав тухтай. Эмч нар тайлбарлахдаа маш ойлгомжтой. Дахин ирнэ ээ.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#0C909E] font-medium text-sm uppercase tracking-wider">
              Сэтгэгдэл
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} direction="up" delay={0.1 * index}>
              <div className="bg-white rounded-2xl p-6 shadow-sm relative">
                <Quote className="w-8 h-8 text-[#BCEEEF] absolute top-4 right-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0C909E] text-[#0C909E]" />
                  ))}
                </div>

                <p className="text-[#657D90] mb-6 leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E4F7F8] rounded-full flex items-center justify-center">
                    <span className="text-[#0C909E] font-semibold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#19374E] text-sm">{testimonial.name}</p>
                    <p className="text-[#8095A6] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
