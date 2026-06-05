import './BonusCTA.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

function BonusCTA() {
  return (
    <section className="bonus-cta section">
      <div className="container">
        <div className="bonus-cta__inner">
          <div className="bonus-cta__decor bonus-cta__decor--1"></div>
          <div className="bonus-cta__decor bonus-cta__decor--2"></div>

          <div className="bonus-cta__content">
            <h2 className="bonus-cta__title">Получите бонус за выполнение заказов</h2>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large bonus-cta__btn"
            >
              Зарегистрироваться и получить бонус за выполнение заказов
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="bonus-cta__note">
              Бонус выплачивается после регистрации по ссылке и выполнения условий по количеству заказов.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BonusCTA
