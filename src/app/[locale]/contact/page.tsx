import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих | IKH MARGAD CLINIC",
  description: "Бидэнтэй холбогдох",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#E4F7F8] to-[#BCEEEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#19374E]">Холбоо барих</h1>
          <p className="text-[#657D90] mt-4 text-lg max-w-2xl">
            Бидэнтэй холбогдохыг хүсвэл доорх мэдээллийг ашиглана уу
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#19374E] mb-6">Холбоо барих мэдээлэл</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0C909E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#19374E]">Хаяг</p>
                      <p className="text-[#657D90]">Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Энхтайвны өргөн чөлөө-15</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0C909E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#19374E]">Утас</p>
                      <p className="text-[#657D90]">+976 11 33 44 55</p>
                      <p className="text-[#657D90]">+976 99 88 77 66</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0C909E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#19374E]">И-мэйл</p>
                      <p className="text-[#657D90]">info@ikhmargad.mn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E4F7F8] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0C909E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#19374E]">Ажлын цаг</p>
                      <p className="text-[#657D90]">Да-Ба: 08:00-18:00</p>
                      <p className="text-[#657D90]">Бя: 09:00-14:00</p>
                      <p className="text-[#657D90]">Ня: Амарна</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FCFCFC] rounded-2xl p-8 border border-[#DAE2E4]/50">
              <h2 className="text-2xl font-bold text-[#19374E] mb-6">Мессеж илгээх</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#19374E] mb-2">Нэр</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                    placeholder="Таны нэр"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#19374E] mb-2">И-мэйл</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                      placeholder="И-мэйл хаяг"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#19374E] mb-2">Утас</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all"
                      placeholder="Утасны дугаар"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#19374E] mb-2">Мессеж</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#DAE2E4] focus:border-[#0C909E] focus:ring-2 focus:ring-[#0C909E]/20 outline-none transition-all resize-none"
                    placeholder="Мессежээ бичнэ үү"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0C909E] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0a7a85] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
