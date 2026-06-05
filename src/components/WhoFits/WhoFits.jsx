import './WhoFits.css'

const audiences = [
  'студентам',
  'тем, кто ищет подработку',
  'людям без опыта',
  'тем, кто хочет гибкий график',
  'тем, кто хочет попробовать доставку как первый источник дохода или дополнительный заработок',
]

function WhoFits() {
  return (
    <section className="who-fits section">
      <div className="container">
        <div className="who-fits__inner">
          <div className="who-fits__content">
            <h2 className="section-title">Кому подойдёт</h2>
            <p className="who-fits__text">
              Подойдёт тем, кто ищет подработку, хочет начать без сложного отбора,
              умеет пользоваться смартфоном и готов выполнять доставки.
            </p>
            <ul className="who-fits__list">
              {audiences.map((item, index) => (
                <li className="who-fits__item" key={index}>
                  <span className="who-fits__check">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 5" stroke="var(--color-yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="who-fits__visual">
            <div className="who-fits__badge who-fits__badge--1">
              <span className="who-fits__badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--color-yellow)" stroke="var(--color-yellow)" strokeWidth="1"/>
                </svg>
              </span>
              <span>Без опыта</span>
            </div>
            <div className="who-fits__badge who-fits__badge--2">
              <span className="who-fits__badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--color-yellow)" strokeWidth="1.5" fill="var(--color-yellow-light)"/>
                  <path d="M12 6V12L16 14" stroke="var(--color-black)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span>Гибкий график</span>
            </div>
            <div className="who-fits__badge who-fits__badge--3">
              <span className="who-fits__badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--color-yellow)" strokeWidth="1.5" fill="var(--color-yellow-light)"/>
                  <line x1="2" y1="10" x2="22" y2="10" stroke="var(--color-black)" strokeWidth="1.5"/>
                </svg>
              </span>
              <span>Выплаты на карту</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoFits
