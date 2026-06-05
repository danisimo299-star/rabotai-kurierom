import './BonusProgram.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

function BonusProgram() {
  return (
    <section className="bonus-program section" id="bonus-program">
      <div className="container">
        <div className="bonus-program__inner">
          <div className="bonus-program__badge">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 7.26L18 8.27L13.5 12.14L14.68 18.02L10 15.27L5.32 18.02L6.5 12.14L2 8.27L7.91 7.26L10 2Z" fill="var(--color-yellow)" stroke="var(--color-yellow)" strokeWidth="1"/>
            </svg>
            <span>Бонусная программа</span>
          </div>
          <h2 className="bonus-program__title">Получите бонус за выполнение заказов</h2>
          <p className="bonus-program__text">
            Перейдите по пригласительной ссылке, зарегистрируйтесь курьером и выполните нужное количество заказов.
            После выполнения условий вы получите бонус.
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Зарегистрироваться по ссылке
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BonusProgram
