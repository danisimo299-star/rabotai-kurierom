import { useState, useEffect } from 'react'
import './Header.css'

const REGISTER_URL = 'https://ya.cc/t/UriBpB0e8mrVBH'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-icon">К</span>
          <span className="header__logo-group">
            <span className="header__logo-text">Работай Курьером</span>
            <span className="header__logo-sub">Регистрация курьером в Яндексе по пригласительной ссылке</span>
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#bonus-program" className="header__link" onClick={handleNavClick}>Бонусы</a>
          <a href="#bonus-conditions" className="header__link" onClick={handleNavClick}>Условия бонуса</a>
          <a href="#conditions" className="header__link" onClick={handleNavClick}>Условия</a>
          <a href="#steps" className="header__link" onClick={handleNavClick}>Как начать</a>
          <a href="#faq" className="header__link" onClick={handleNavClick}>FAQ</a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header__cta-mobile"
            onClick={handleNavClick}
          >
            Регистрация
          </a>
        </nav>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary header__cta"
        >
          Регистрация
        </a>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
