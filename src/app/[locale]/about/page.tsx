import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return {
    title: `${t("title")} | IKH MARGAD CLINIC`,
    description: t("description"),
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Бидний тухай</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            IKH MARGAD CLINIC нь Монгол улсын хэмжээнд тэргүүлэгч эрүүл мэндийн үйлчилгээ үзүүлэгч бөгөөд 
            олон улсын стандартад нийцсэн технологи, мэргэжлийн баг хамт олноороо үйлчлүүлэгчдэдээ 
            чанартай үйлчилгээ үзүүлж байна.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#19374E]">Бидний эрхэм зорилго</h2>
              <p className="text-[#657D90] leading-relaxed">
                Эрүүл мэнд бол хүн бүрийн хамгийн үнэт зүйл. Бид энэхүү үнэт зүйлийг хамгаалах, 
                хөгжүүлэхээр зорин ажилладаг. Манай эмнэлэг нь өвчнөөс урьдчилан сэргийлэх, 
                эрт оношлох, чанартай эмчилгээ үзүүлэх зарчмыг баримталдаг.
              </p>
              <p className="text-[#657D90] leading-relaxed">
                2010 онд байгуулагдсан эмнэлэг маань өнөөдөр 50+ мэргэжлийн эмч, 100+ ажилтантайгаар 
                өдөрт 500+ үйлчлүүлэгчид үйлчилгээ үзүүлж байна.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#19374E]">Бидний давуу тал</h2>
              <ul className="space-y-4">
                {[
                  "Олон улсын стандартад нийцсэн тоног төхөөрөмж",
                  "Туршлагатай, мэргэшсэн эмч нарын баг",
                  "24/7 үйлчилгээний тусламж",
                  "Дижитал эрүүл мэндийн бүртгэл",
                  "Даатгалтай хамтран ажиллах",
                  "Тав тухтай, цэвэрхэн орчин",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#E4F7F8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0C909E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#657D90]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
