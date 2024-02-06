import React from 'react';

import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href') || '';
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="header">
      <div className="header__logo">
        <a href="intro" onClick={scrollToSection}>
          <img
            className="header__logo-img"
            src="./resume-site/src/assets/img/logo.svg"
          />
        </a>
      </div>
      <div className="header__btns">
        <ol className="header__btns__components">
          <div className="header__btns__components__item header__btns__components__about_me">
            <a
              href="about_me"
              onClick={scrollToSection}
              className="header__btns__components__item-text text-h5-medium"
            >
              Обо мне
            </a>
          </div>
          <div className="header__btns__components__item header__btns__components__tech">
            <a
              href="tech"
              onClick={scrollToSection}
              className="header__btns__components__item-text text-h5-medium"
            >
              Стек технологий
            </a>
          </div>
          <div className="header__btns__components__item header__btns__components__work">
            <a
              href="expirience"
              onClick={scrollToSection}
              className="header__btns__components__item-text text-h5-medium"
            >
              Опыт разработки
            </a>
          </div>
          <div className="header__btns__components__item header__btns__components__contacts">
            <a
              href="contact"
              onClick={scrollToSection}
              className="header__btns__components__item-text text-h5-medium"
            >
              Контакты
            </a>
          </div>
        </ol>
        <a
          href="https://t.me/driver_on_lips"
          target="_blank"
          rel="noopener noreferrer"
          className="header__btns__contact_me-href"
        >
          <button className="header__btns__contact_me text-h5-medium">
            Связаться со мной
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
