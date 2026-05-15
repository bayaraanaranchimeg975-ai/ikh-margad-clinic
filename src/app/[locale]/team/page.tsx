import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Баг | IKH MARGAD CLINIC",
  description: "Манай туршлагатай эмч нарын баг",
};

export default function TeamPage() {
  const departments = [
    {
      name: "Доторын тасаг",
      doctors: [
        { name: "Др. Бат-Эрдэнэ", role: "Тасгийн эрхлэгч", experience: "20+ жил" },
        { name: "Др. Энхбаяр", role: "Ахлах эмч", experience: "15+ жил" },
        { name: "Др. Ганзаяа", role: "Эмч", experience: "10+ жил" },
      ],
    },
    {
      name: "Мэс заслын тасаг",
      doctors: [
        { name: "Др. Ганбат", role: "Тасгийн эрхлэгч", experience: "18+ жил" },
        { name: "Др. Баярсайхан", role: "Ахлах эмч", experience: "14+ жил" },
        { name: "Др. Мөнхбат", role: "Эмч", experience: "8+ жил" },
      ],
    },
    {
      name: "Эх барих эмэгтэйчүүд",
      doctors: [
        { name: "Др. Оюунчимэг", role: "Тасгийн эрхлэгч", experience: "18+ жил" },
        { name: "Др. Сарангэрэл", role: "Ахлах эмч", experience: "12+ жил" },
        { name: "Др. Нарантуяа", role: "Эмч", experience: "9+ жил" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Манай баг</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            Туршлагатай, мэргэшсэн эмч нарын баг танд үйлчилнэ
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {departments.map((dept) => (
              <div key={dept.name}>
                <h2 className="text-2xl font-bold text-[#19374E] mb-6">{dept.name}</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {dept.doctors.map((doctor) => (
                    <div key={doctor.name} className="bg-[#FCFCFC] rounded-2xl p-6 border border-[#DAE2E4]/50 text-center">
                      <div className="w-16 h-16 bg-[#E4F7F8] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-[#0C909E] font-bold text-lg">{doctor.name.split(".")[1]?.[0] || doctor.name[0]}</span>
                      </div>
                      <h3 className="font-semibold text-[#19374E]">{doctor.name}</h3>
                      <p className="text-[#0C909E] text-sm mt-1">{doctor.role}</p>
                      <div className="mt-3 inline-block bg-[#E4F7F8] px-3 py-1 rounded-full">
                        <span className="text-xs text-[#0C909E] font-medium">{doctor.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
