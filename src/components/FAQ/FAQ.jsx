import { useState } from 'react'
import './FAQ.css'

const faqData = [
  {
    question: 'Нужен ли опыт работы курьером?',
    answer: 'Нет, сайт рассчитан и на тех, кто ещё не работал курьером. Главное — пройти регистрацию и выполнить требования сервиса.',
  },
  {
    question: 'С какого возраста можно начать?',
    answer: 'Сотрудничество возможно с 16 лет.',
  },
  {
    question: 'Что нужно для регистрации?',
    answer: 'Понадобятся документы, подходящие для вашего статуса, а также смартфон на Android или iOS.',
  },
  {
    question: 'Как проходят выплаты?',
    answer: 'В условиях указаны варианты ежедневных или еженедельных выплат на карту. Конкретный вариант может зависеть от формата сотрудничества.',
  },
  {
    question: 'Как получить бонус?',
    answer: 'Перейдите по пригласительной ссылке, зарегистрируйтесь курьером и выполните нужное количество заказов. После выполнения условий вы получите бонус.',
  },
  {
    question: 'Сколько заказов нужно выполнить?',
    answer: 'Для Яндекс Еды — 100 заказов. Для Яндекс Лавки — 140 заказов. Для пешего способа указана Яндекс Еда — 100 заказов.',
  },
  {
    question: 'Когда выплачивается бонус?',
    answer: 'Бонус выплачивается после регистрации по ссылке и выполнения условий по количеству заказов.',
  },
  {
    question: 'Где посмотреть точные условия?',
    answer: 'Актуальные условия доступны на официальной странице регистрации. Для регистрации переходите по ссылке и проходите анкету.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={onClick}>
        <span>{question}</span>
        <span className="faq__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="faq__answer-wrapper">
        <div className="faq__answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title faq__title">Часто задаваемые вопросы</h2>
        <p className="section-subtitle faq__subtitle">
          Ответы на популярные вопросы о сотрудничестве
        </p>

        <div className="faq__list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
