import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17.09 9.26L24 10.27L19 15.14L20.18 22.02L14 18.77L7.82 22.02L9 15.14L4 10.27L10.91 9.26L14 3Z" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-yellow-light)"/>
      </svg>
    ),
    title: 'Можно без опыта',
    description: 'Подходит для тех, кто раньше не работал курьером.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="var(--color-yellow)" strokeWidth="2" fill="var(--color-yellow-light)"/>
        <path d="M14 8V14L18 16" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Гибкий формат',
    description: 'Можно выбрать удобный способ сотрудничества.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="var(--color-yellow)" strokeWidth="2" fill="var(--color-yellow-light)"/>
        <line x1="3" y1="12" x2="25" y2="12" stroke="var(--color-yellow)" strokeWidth="2"/>
        <line x1="7" y1="17" x2="13" y2="17" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Выплаты на карту',
    description: 'Доступны ежедневные или еженедельные выплаты в зависимости от формата.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="3" stroke="var(--color-yellow)" strokeWidth="2" fill="var(--color-yellow-light)"/>
        <path d="M10 12L13 15L18 10" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Регистрация онлайн',
    description: 'Переходите по ссылке и проходите регистрацию.',
  },
]

function Benefits() {
  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <h2 className="section-title benefits__title">Почему выбирают этот формат</h2>
        <p className="section-subtitle benefits__subtitle">Основные преимущества сотрудничества курьером</p>
        <div className="benefits__grid">
          {benefits.map((benefit, index) => (
            <div className="benefits__card" key={index}>
              <div className="benefits__icon">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
              <p className="benefits__card-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
