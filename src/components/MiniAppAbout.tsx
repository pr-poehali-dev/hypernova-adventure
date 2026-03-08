export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Вирджиния Апгар</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Кто она?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Вирджиния Апгар (7 июня 1909 — 7 августа 1974) — американский врач-анестезиолог, педиатр
            и исследователь. Первая женщина, получившая звание профессора в Колумбийском университете.
          </p>
          <p className="text-lg leading-relaxed">
            В 1952 году она разработала простую систему оценки состояния новорождённых, которая
            произвела революцию в неонатологии и спасла миллионы жизней по всему миру.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Образование и карьера</h3>
          <div className="space-y-3">
            <div className="border-l-[4px] border-[#1A6B8A] pl-4">
              <h4 className="font-bold text-lg">1929</h4>
              <p>Окончила Маунт-Холиок-колледж со специализацией по зоологии</p>
            </div>
            <div className="border-l-[4px] border-[#1A6B8A] pl-4">
              <h4 className="font-bold text-lg">1933</h4>
              <p>Получила степень врача в Колумбийском университете</p>
            </div>
            <div className="border-l-[4px] border-[#1A6B8A] pl-4">
              <h4 className="font-bold text-lg">1949</h4>
              <p>Стала первой женщиной-профессором Колумбийского университета в области анестезиологии</p>
            </div>
            <div className="border-l-[4px] border-[#1A6B8A] pl-4">
              <h4 className="font-bold text-lg">1959</h4>
              <p>Получила степень магистра общественного здравоохранения в Университете Джона Хопкинса</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Наследие</h3>
          <div className="flex flex-wrap gap-2">
            {["Неонатология", "Анестезиология", "Педиатрия", "Публичное здравоохранение", "Борьба с пороками сердца", "Научные исследования"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#1A6B8A] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
