import './Conditions.css'

const conditions = [
  {
    title: 'Возраст',
    items: ['от 16 лет'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Документы',
    items: [
      'паспорт РФ',
      'или удостоверение личности ЕАЭС',
      'или патент на работу / виза — в зависимости от города доставок',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Техника',
    items: ['мобильное устройство на базе Android или iOS'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="19" x2="14" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Формат сотрудничества',
    items: [
      'напрямую с сервисом',
      'через курьерскую службу',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Выплаты',
    items: [
      'ежедневно на карту',
      'еженедельно на карту',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="15" x2="10" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Программа заботы',
    items: [
      'с выплатами по болезни и юридическими консультациями',
      'без выплат по болезни и юридических консультаций',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 4 16 4 10.5C4 7.46243 6.46243 5 9.5 5C11.0625 5 12 6 12 6C12 6 12.9375 5 14.5 5C17.5376 5 20 7.46243 20 10.5C20 16 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

function Conditions() {
  return (
    <section className="conditions section" id="conditions">
      <div className="container">
        <h2 className="section-title conditions__title">Основные условия сотрудничества</h2>
        <p className="section-subtitle conditions__subtitle">
          Ознакомьтесь с основными требованиями и форматами
        </p>

        <div className="conditions__grid">
          {conditions.map((condition, index) => (
            <div className="conditions__card" key={index}>
              <div className="conditions__card-icon">{condition.icon}</div>
              <h3 className="conditions__card-title">{condition.title}</h3>
              <ul className="conditions__card-list">
                {condition.items.map((item, i) => (
                  <li key={i} className="conditions__card-item">
                    <span className="conditions__bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="conditions__note">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="var(--color-gray-500)" strokeWidth="1.5"/>
            <line x1="10" y1="6" x2="10" y2="11" stroke="var(--color-gray-500)" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="10" cy="14" r="1" fill="var(--color-gray-500)"/>
          </svg>
          <p>
            Актуальные условия могут зависеть от города, формата сотрудничества и требований сервиса.
            Подробности смотрите на странице регистрации.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Conditions
