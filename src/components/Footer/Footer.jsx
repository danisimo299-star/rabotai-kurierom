import './Footer.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'
const CONDITIONS_URL = 'https://pro.yandex.ru/ru-ru/bor/start?job=eats-courier'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">К</span>
              <span className="footer__logo-text">Работай Курьером</span>
            </div>
            <p className="footer__disclaimer">
              Информационный сайт. Не является официальным сайтом Яндекса.
              Регистрация проходит на официальной странице сервиса.
            </p>
          </div>

          <div className="footer__links">
            <a
              href={CONDITIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Официальные условия
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Регистрация
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__note">
            Информационный сайт. Не является официальным сайтом Яндекса. Регистрация проходит на официальной странице сервиса.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
