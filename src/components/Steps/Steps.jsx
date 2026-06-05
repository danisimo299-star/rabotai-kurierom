import './Steps.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

const steps = [
  {
    number: '01',
    title: 'Перейдите по ссылке регистрации',
    description: 'Нажмите кнопку на сайте и откройте страницу регистрации.',
  },
  {
    number: '02',
    title: 'Заполните анкету',
    description: 'Укажите данные и выберите подходящий формат сотрудничества.',
  },
  {
    number: '03',
    title: 'Дождитесь дальнейших инструкций',
    description: 'После регистрации следуйте подсказкам на официальной странице сервиса.',
  },
]

function Steps() {
  return (
    <section className="steps section" id="steps">
      <div className="container">
        <h2 className="section-title steps__title">Как начать</h2>
        <p className="section-subtitle steps__subtitle">
          Три простых шага для начала сотрудничества
        </p>

        <div className="steps__grid">
          {steps.map((step, index) => (
            <div className="steps__card" key={index}>
              <div className="steps__number">{step.number}</div>
              <h3 className="steps__card-title">{step.title}</h3>
              <p className="steps__card-text">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="steps__connector">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                    <path d="M0 6H36M36 6L30 1M36 6L30 11" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="steps__cta">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Зарегистрироваться курьером
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Steps
