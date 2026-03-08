export function MiniAppWritings() {
  const facts = [
    {
      title: "Аббревиатура APGAR",
      date: "Факт",
      excerpt:
        "Название шкалы — не только фамилия Вирджинии. Позже её расшифровали как Appearance, Pulse, Grimace, Activity, Respiration — идеальная мнемоника для врачей всего мира.",
    },
    {
      title: "30 секунд, чтобы спасти жизнь",
      date: "Факт",
      excerpt:
        "Оценка по шкале занимает менее минуты. До её появления не существовало единого стандарта оценки новорождённых — врачи действовали интуитивно. Шкала Апгар изменила это навсегда.",
    },
    {
      title: "Увлечения: скрипка и авиация",
      date: "Факт",
      excerpt:
        "Вирджиния Апгар была не только блестящим врачом, но и талантливым скрипачом — сама делала инструменты. А ещё получила лицензию пилота в 59 лет!",
    },
    {
      title: "Марка США в её честь",
      date: "Факт",
      excerpt:
        "В 1994 году Почтовая служба США выпустила марку с портретом Вирджинии Апгар в серии «Великие американцы». Редкая честь для учёного-медика.",
    },
    {
      title: "Более 135 миллионов детей",
      date: "Факт",
      excerpt:
        "Каждый год шкала Апгар применяется при рождении более 135 миллионов детей по всему миру. Это одна из самых используемых медицинских систем оценки в истории.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Интересные факты</h2>

      <div className="space-y-4">
        {facts.map((fact, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{fact.title}</h3>
              <span className="text-sm font-bold bg-[#1A6B8A] text-white px-2 py-1 border-[2px] border-black shrink-0 ml-2">
                {fact.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{fact.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
