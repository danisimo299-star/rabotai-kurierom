import './FinalCTA.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

function FinalCTA() {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__decor final-cta__decor--1"></div>
          <div className="final-cta__decor final-cta__decor--2"></div>
          <h2 className="final-cta__title">Готовы начать работать курьером?</h2>
          <p className="final-cta__text">
            Перейдите по ссылке, зарегистрируйтесь и получите бонус после выполнения условий.
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large final-cta__btn"
          >
            Перейти к регистрации
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
