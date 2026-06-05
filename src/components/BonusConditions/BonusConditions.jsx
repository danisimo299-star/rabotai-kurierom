import './BonusConditions.css'

const transportTypes = [
  {
    name: 'Авто',
    bonus: '12 000 ₽',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="14" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14L10 8H22L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="23" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="11.5" y1="24" x2="20.5" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="18" r="1" fill="currentColor"/>
        <circle cx="23" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
    orders: [
      { service: 'Яндекс Еда', count: '100 заказов' },
      { service: 'Яндекс Лавка', count: '140 заказов' },
    ],
  },
  {
    name: 'Мото',
    bonus: '12 000 ₽',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 22H16L20 14H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 22L18 16L14 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="12" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    orders: [
      { service: 'Яндекс Еда', count: '100 заказов' },
      { service: 'Яндекс Лавка', count: '140 заказов' },
    ],
  },
  {
    name: 'Вело',
    bonus: '10 000 ₽',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 22L14 12L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12L24 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    orders: [
      { service: 'Яндекс Еда', count: '100 заказов' },
      { service: 'Яндекс Лавка', count: '140 заказов' },
    ],
  },
  {
    name: 'Электровело',
    bonus: '10 000 ₽',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 22L14 12L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12L24 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 7L13 10H17L15 13" stroke="var(--color-yellow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    orders: [
      { service: 'Яндекс Еда', count: '100 заказов' },
      { service: 'Яндекс Лавка', count: '140 заказов' },
    ],
  },
  {
    name: 'Пеший',
    bonus: '10 000 ₽',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 12H19L20 18L18 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18L14 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 12L22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    orders: [
      { service: 'Яндекс Еда', count: '100 заказов' },
    ],
  },
]

function BonusConditions() {
  return (
    <section className="bonus-conditions section" id="bonus-conditions">
      <div className="container">
        <h2 className="section-title bonus-conditions__title">Какие условия нужно выполнить</h2>
        <p className="section-subtitle bonus-conditions__subtitle">
          Зарегистрируйтесь по ссылке, выполните нужное количество заказов и получите бонус
        </p>

        <div className="bonus-conditions__grid">
          {transportTypes.map((type, index) => (
            <div className="bonus-conditions__card" key={index}>
              <div className="bonus-conditions__card-header">
                <div className="bonus-conditions__card-icon">
                  {type.icon}
                </div>
                <h3 className="bonus-conditions__card-name">{type.name}</h3>
              </div>

              <div className="bonus-conditions__card-bonus">
                <span className="bonus-conditions__card-bonus-label">Получите бонус</span>
                <span className="bonus-conditions__card-bonus-value">{type.bonus}</span>
              </div>

              <div className="bonus-conditions__card-orders">
                {type.orders.map((order, i) => (
                  <div className="bonus-conditions__order" key={i}>
                    <span className="bonus-conditions__order-service">{order.service}</span>
                    <span className="bonus-conditions__order-badge">{order.count}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BonusConditions
