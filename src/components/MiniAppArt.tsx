export function MiniAppArt() {
  const timeline = [
    { year: "1909", event: "Рождение в Уэстфилде, Нью-Джерси, США", color: "from-[#1A6B8A] to-[#2E9CCA]" },
    { year: "1929", event: "Окончание колледжа, специализация — зоология", color: "from-[#2E9CCA] to-[#48B8E0]" },
    { year: "1933", event: "Диплом врача Колумбийского университета", color: "from-[#1A6B8A] to-[#2E9CCA]" },
    { year: "1949", event: "Первая женщина-профессор в Колумбии", color: "from-[#0D4F6B] to-[#1A6B8A]" },
    { year: "1952", event: "Создание шкалы оценки новорождённых", color: "from-[#1A6B8A] to-[#48B8E0]" },
    { year: "1959", event: "Магистр здравоохранения — Университет Джона Хопкинса", color: "from-[#2E9CCA] to-[#48B8E0]" },
    { year: "1968", event: "Книга «Является ли ваш ребёнок нормальным?»", color: "from-[#1A6B8A] to-[#2E9CCA]" },
    { year: "1974", event: "Уходит из жизни, оставив неизмеримое наследие", color: "from-[#0D4F6B] to-[#1A6B8A]" },
    { year: "1994", event: "Марка США серии «Великие американцы»", color: "from-[#2E9CCA] to-[#48B8E0]" },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Хронология жизни</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div
              className={`aspect-square bg-gradient-to-br ${item.color} border-b-[3px] border-black flex items-center justify-center`}
            >
              <span className="text-5xl font-black text-white drop-shadow-lg">{item.year}</span>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm leading-snug">{item.event}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-2xl font-black mb-3">Признание и награды</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Зал славы женщин-медиков США",
            "Премия Альберта Ласкера",
            "Почтовая марка США",
            "Орден Почётного легиона",
          ].map((award) => (
            <div
              key={award}
              className="bg-[#1A6B8A] text-white px-4 py-2 border-[2px] border-black font-bold text-sm"
            >
              🏆 {award}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
