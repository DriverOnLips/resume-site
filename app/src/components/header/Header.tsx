import React from "react";

import './Header.css';


const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="header__logo">
        <img className="header__logo-img" src="./src/assets/img/logo.svg" />
      </div>
      <div className="header__btns">
        <ol className="header__btns__components">
          <div className="header__btns__components__item header__btns__components__about_me">
            <a className="header__btns__components__item-text text-h5-medium">Обо мне</a>
          </div>
          <div className="header__btns__components__item header__btns__components__skills">
            <a className="header__btns__components__item-text text-h5-medium">Навыки</a>
          </div>
          <div className="header__btns__components__item header__btns__components__education">
            <a className="header__btns__components__item-text text-h5-medium">Образование</a>
          </div>
          <div className="header__btns__components__item header__btns__components__work">
            <a className="header__btns__components__item-text text-h5-medium">Опыт работы</a>
          </div>
          <div className="header__btns__components__item header__btns__components__contacts">
            <a className="header__btns__components__item-text text-h5-medium">Контакты</a>
          </div>
        </ol>
        <button className="header__btns__contact_me text-h5-medium">Связаться со мной</button>
      </div>
    </header>
  );
}

export default Header;
