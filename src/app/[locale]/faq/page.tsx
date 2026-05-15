import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тусламж | IKH MARGAD CLINIC",
  description: "Түгээмэл асуултууд",
};

export default function FAQPage() {
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
    {
      question: "Онлайн цаг авах боломжтой юу?",
      answer: "Тийм, бидний вэбсайт болон утасны аппликейшнаар цаг авах боломжтой. Мөн 11-33-44-55 дугаарт залгаж цаг авах боломжтой.",
    },
    {
      question: "Эмнэлэгт хүрэхэд автомашины зогсоол байгаа юу?",
      answer: "Тийм, бидний эмнэлэгт үйлчлүүлэгчдийн зориулалттай үнэгүй зогсоол байгаа. Мөн такси, нийтийн тээврээр ирэхэд ойрхон.",
    },
    {
      question: "Гадаадын иргэд үйлчлүүлж болох уу?",
      answer: "Тийм, бид гадаадын иргэдэд үйлчилдэг. Англи, Орос, Хятад хэлээр үйлчилгээ үзүүлдэг эмч нар байгаа.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Түгээмэл асуултууд</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            Таны асуусан асуултууд
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#DAE2E4] rounded-xl overflow-hidden">
                <div className="p-5">
                  <h3 className="font-medium text-[#19374E] mb-2">{faq.question}</h3>
                  <p className="text-[#657D90] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
