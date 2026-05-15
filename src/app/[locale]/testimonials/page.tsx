import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сэтгэгдэл | IKH MARGAD CLINIC",
  description: "Үйлчлүүлэгчдийн сэтгэгдэл",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Болд",
      role: "Үйлчлүүлэгч",
      content: "Маш сайн үйлчилгээ. Эмч нар маш мэргэжлийн, халамжтай. Оношлогоо хурдан, нарийвчлалтай хийгдсэн. Баярлалаа!",
      rating: 5,
      date: "2026.01.15",
    },
    {
      name: "Сарантуяа",
      role: "Үйлчлүүлэгч",
      content: "IKH MARGAD CLINIC-д 5 жил үйлчлүүлж байна. Хүүхдүүдийнхээ вакцинжуулалтыг энд хийлгэдэг. Багтаа баярлалаа!",
      rating: 5,
      date: "2026.02.20",
    },
    {
      name: "Ганхуяг",
      role: "Үйлчлүүлэгч",
      content: "Эмнэлгийн орчин цэвэрхэн, тав тухтай. Эмч нар тайлбарлахдаа маш ойлгомжтой. Дахин ирнэ ээ.",
      rating: 5,
      date: "2026.03.10",
    },
    {
      name: "Оюунбилэг",
      role: "Үйлчлүүлэгч",
      content: "Жирэмсний хяналтаа энд хийлгэсэн. Маш сайн хандлага, мэргэжлийн зөвлөгөө. Хүүхдээ энд төрүүлсэн. Баярлалаа!",
      rating: 5,
      date: "2026.04.05",
    },
    {
      name: "Батбаяр",
      role: "Үйлчлүүлэгч",
      content: "Зүрхний шинжилгээ хийлгэхэд маш нарийн, тайлбарлахдаа ойлгомжтой. Одоо эмчилгээ хийлгэж байна. Сайн үр дүн гарч байна.",
      rating: 5,
      date: "2026.04.18",
    },
    {
      name: "Наранцэцэг",
      role: "Үйлчлүүлэгч",
      content: "Нүдний үзлэг хийлгэхэд орчин тав тухтай, эмч нар маш мэргэжлийн. Шилний жороо ч энд авсан. Баярлалаа!",
      rating: 5,
      date: "2026.05.01",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Үйлчлүүлэгчдийн сэтгэгдэл</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            Бидний талаар хүмүүс юу гэж хэлдэг вэ?
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-[#FCFCFC] rounded-2xl p-6 border border-[#DAE2E4]/50">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[#0C909E] text-[#0C909E]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#657D90] mb-6 leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E4F7F8] rounded-full flex items-center justify-center">
                      <span className="text-[#0C909E] font-semibold text-sm">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#19374E] text-sm">{testimonial.name}</p>
                      <p className="text-[#8095A6] text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#8095A6]">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
