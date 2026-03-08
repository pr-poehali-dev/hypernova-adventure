export function MiniAppResume() {
  const criteria = [
    {
      letter: "A",
      name: "Appearance (Цвет кожи)",
      desc0: "Синюшный или бледный по всему телу",
      desc1: "Тело розовое, конечности синюшные",
      desc2: "Розовый по всему телу",
    },
    {
      letter: "P",
      name: "Pulse (Пульс)",
      desc0: "Отсутствует",
      desc1: "Менее 100 ударов в минуту",
      desc2: "100 и более ударов в минуту",
    },
    {
      letter: "G",
      name: "Grimace (Рефлексы)",
      desc0: "Нет реакции на раздражение",
      desc1: "Гримаса при раздражении",
      desc2: "Кашель, чихание, громкий крик",
    },
    {
      letter: "A",
      name: "Activity (Мышечный тонус)",
      desc0: "Мышцы вялые",
      desc1: "Слабое сгибание конечностей",
      desc2: "Активные движения",
    },
    {
      letter: "R",
      name: "Respiration (Дыхание)",
      desc0: "Отсутствует",
      desc1: "Слабое, нерегулярное",
      desc2: "Нормальное, громкий крик",
    },
  ]

  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-2 border-b-[3px] border-black pb-2">Шкала Апгар</h2>
      <p className="text-gray-600 font-medium mb-6">Разработана в 1952 году, применяется на 1-й и 5-й минутах жизни</p>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">5 критериев оценки</h3>
          <div className="space-y-4">
            {criteria.map((c) => (
              <div key={c.letter + c.name} className="border-l-[4px] border-[#1A6B8A] pl-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-black text-[#1A6B8A]">{c.letter}</span>
                  <h4 className="text-lg font-bold">{c.name}</h4>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-red-50 border border-red-200 p-2 rounded">
                    <span className="font-bold text-red-600">0 баллов:</span> {c.desc0}
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded">
                    <span className="font-bold text-yellow-600">1 балл:</span> {c.desc1}
                  </div>
                  <div className="bg-green-50 border border-green-200 p-2 rounded">
                    <span className="font-bold text-green-600">2 балла:</span> {c.desc2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Интерпретация результатов</h3>
          <div className="grid gap-3">
            <div className="p-4 bg-green-50 border-[2px] border-black flex items-center gap-4">
              <span className="text-3xl font-black text-green-600">7–10</span>
              <div>
                <h4 className="text-lg font-bold">Норма</h4>
                <p>Состояние новорождённого хорошее, специального вмешательства не требуется</p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 border-[2px] border-black flex items-center gap-4">
              <span className="text-3xl font-black text-yellow-600">4–6</span>
              <div>
                <h4 className="text-lg font-bold">Умеренные нарушения</h4>
                <p>Требуется наблюдение и, возможно, медицинская помощь</p>
              </div>
            </div>
            <div className="p-4 bg-red-50 border-[2px] border-black flex items-center gap-4">
              <span className="text-3xl font-black text-red-600">0–3</span>
              <div>
                <h4 className="text-lg font-bold">Критическое состояние</h4>
                <p>Необходима немедленная реанимация и экстренная медицинская помощь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
