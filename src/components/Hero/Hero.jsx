import './Hero.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Начните работать курьером<br />
            <span className="hero__title-accent">в Яндексе</span>
          </h1>
          <p className="hero__subtitle">
            Перейдите по ссылке, зарегистрируйтесь и получите бонус после выполнения условий.
          </p>
          <div className="hero__buttons">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Перейти к регистрации
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#bonus-program" className="btn btn-secondary">
              Посмотреть бонусы
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-dot hero__card-dot--green"></div>
              <span>Курьер</span>
            </div>
            <div className="hero__card-icons">
              <div className="hero__icon-item">
                <div className="hero__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="3" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <line x1="9" y1="19" x2="15" y2="19" stroke="var(--color-black)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Смартфон</span>
              </div>
              <div className="hero__icon-item">
                <div className="hero__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <path d="M12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 15 12 21 12 21Z" stroke="var(--color-black)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span>Маршруты</span>
              </div>
              <div className="hero__icon-item">
                <div className="hero__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <line x1="12" y1="11" x2="12" y2="17" stroke="var(--color-black)" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="9" y1="14" x2="15" y2="14" stroke="var(--color-black)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Доставка</span>
              </div>
              <div className="hero__icon-item">
                <div className="hero__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <line x1="2" y1="10" x2="22" y2="10" stroke="var(--color-black)" strokeWidth="1.5"/>
                    <line x1="6" y1="15" x2="10" y2="15" stroke="var(--color-black)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Выплаты</span>
              </div>
            </div>
          </div>
          <div className="hero__decor hero__decor--1"></div>
          <div className="hero__decor hero__decor--2"></div>
          <div className="hero__decor hero__decor--3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
