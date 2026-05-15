import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ | IKH MARGAD CLINIC",
  description: "Бидний үзүүлж буй эрүүл мэндийн үйлчилгээнүүд",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Ерөнхий оношлогоо",
      description: "Бүрэн биеийн үзлэг, цусны шинжилгээ, шээсний шинжилгээ, ЭКГ зэрэг ерөнхий оношлогооны үйлчилгээ.",
      features: ["Биеийн ерөнхий үзлэг", "Цусны ерөнхий шинжилгээ", "ЭКГ", "Шээсний шинжилгээ"],
    },
    {
      title: "Лаборатори шинжилгээ",
      description: "Нарийн, нарийвчлалтай лабораторийн шинжилгээг хурдан хугацаанд гаргаж өгнө.",
      features: ["Биохимийн шинжилгээ", "Дархлалын шинжилгээ", "Гормон шинжилгээ", "Генетик шинжилгээ"],
    },
    {
      title: "Зүрх судас",
      description: "Зүрх судасны өвчний оношлогоо, эмчилгээ, урьдчилан сэргийлэлт.",
      features: ["Зүрхний эхо", "ЭКГ хяналт", "Судасны Допплер", "Ачааллын сорил"],
    },
    {
      title: "Эх барих эмэгтэйчүүд",
      description: "Жирэмсний бүрэн хяналт, төрөлтийн үйлчилгээ, эмэгтэйчүүдийн үзлэг.",
      features: ["Жирэмсний хяналт", "Ультра дуугаралт", "Төрөлт", "Эмэгтэйчүүдийн үзлэг"],
    },
    {
      title: "Ясны нөхөн сэргээлт",
      description: "Яс, үе мөчний өвчний оношлогоо, эмчилгээ, сэргээн засах эмчилгээ.",
      features: ["Рентген зураг", "Компьютер томограф", "МРТ", "Физик эмчилгээ"],
    },
    {
      title: "Нүдний эмчилгээ",
      description: "Нүдний бүрэн үзлэг, оношлогоо, хараа засах эмчилгээ.",
      features: ["Хараа шалгалт", "Нүдний даралт хэмжих", "Ультра дуугаралт", "Лазер эмчилгээ"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Үйлчилгээ</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            Бид олон төрлийн эрүүл мэндийн үйлчилгээг нэг дороос үзүүлж байна
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-[#FCFCFC] rounded-2xl p-6 border border-[#DAE2E4]/50">
                <h3 className="text-xl font-semibold text-[#19374E] mb-3">{service.title}</h3>
                <p className="text-[#657D90] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#657D90]">
                      <div className="w-1.5 h-1.5 bg-[#0C909E] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
