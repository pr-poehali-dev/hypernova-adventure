import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useUIStore } from "@/lib/ui-store"
import { Button } from "@/components/ui/button"

const QUICK_CHIPS = ["Кто такая Апгар?", "Что такое шкала?", "Открой факты"]

const RESPONSES: Record<string, string> = {
  "Кто такая Апгар?":
    "Вирджиния Апгар (1909–1974) — американский врач-анестезиолог, первая женщина-профессор в Колумбийском университете. Она спасла миллионы новорождённых, придумав простой и гениальный способ оценки их состояния.",
  "Что такое шкала?":
    "Шкала Апгар — это система быстрой оценки состояния новорождённого по 5 параметрам: цвет кожи, пульс, рефлексы, мышечный тонус и дыхание. Оценка от 0 до 10. Применяется во всём мире с 1952 года!",
  "Открой факты":
    "Открываю раздел с интересными фактами о жизни и открытиях Вирджинии Апгар!",
}

const ACTION_RESPONSES: Record<string, { response: string; action: string }> = {
  "открой о ней": { response: "Открываю биографию Вирджинии Апгар!", action: "about" },
  "открой биографию": { response: "Открываю биографию!", action: "about" },
  "открой шкалу": { response: "Открываю подробности о шкале Апгар!", action: "resume" },
  "покажи шкалу": { response: "Вот всё о шкале Апгар!", action: "resume" },
  "открой факты": { response: "Открываю интересные факты!", action: "writings" },
  "покажи факты": { response: "Вот факты об Апгар!", action: "writings" },
  "открой галерею": { response: "Открываю галерею!", action: "art" },
  "покажи галерею": { response: "Открываю галерею!", action: "art" },
}

type AppType = "about" | "resume" | "writings" | "art"

export function ChatPanel() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([])
  const [inputValue, setInputValue] = useState("")
  const { openOS } = useUIStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleChipClick = (chip: string) => {
    if (chip === "Открой факты") {
      setMessages((prev) => [
        ...prev,
        { text: chip, isUser: true },
        { text: RESPONSES[chip], isUser: false },
      ])
      setTimeout(() => openOS("writings"), 1000)
      return
    }
    const response = RESPONSES[chip] || "Интересный вопрос! Задай его иначе или выбери раздел снизу."
    setMessages((prev) => [...prev, { text: chip, isUser: true }, { text: response, isUser: false }])
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")

    const lowerMessage = userMessage.toLowerCase()
    const actionMatch = Object.keys(ACTION_RESPONSES).find((key) => lowerMessage.includes(key))

    if (actionMatch) {
      const { response, action } = ACTION_RESPONSES[actionMatch]
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: response, isUser: false }])
      setTimeout(() => {
        openOS(action as AppType)
      }, 1000)
    } else {
      const defaultResponse =
        "Я расскажу всё о Вирджинии Апгар и её великом открытии! Попробуй: «открой шкалу» или «открой биографию»."
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: defaultResponse, isUser: false }])
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 space-y-3 h-32 overflow-y-auto scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                msg.isUser ? "bg-[#1A6B8A] text-white" : "bg-white text-black"
              }`}
            >
              <p className="text-sm font-medium leading-tight">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleInputSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Спроси об Апгар или напиши команду..."
            className="flex-1 p-3 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black font-medium text-sm focus:outline-none focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[1px] focus:translate-y-[1px] transition-all"
          />
          <Button
            type="submit"
            className="bg-[#1A6B8A] text-white border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold px-4"
          >
            Спросить
          </Button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2 justify-center">
        {QUICK_CHIPS.map((chip) => (
          <Button
            key={chip}
            onClick={() => handleChipClick(chip)}
            className="bg-white text-black border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-xs px-3 py-2 h-auto"
          >
            {chip}
          </Button>
        ))}
      </div>
    </div>
  )
}
