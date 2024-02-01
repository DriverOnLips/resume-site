import React, { useEffect, useState } from "react";

import './Content.css';
import { useApp } from "../../hooks/useApp";


const Content: React.FC = () => {
  const { theme, setTheme } = useApp();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  })

  const handleThemeChange = () => {
    switch (theme) {
      case 'black':
        setTheme('white');
        break;
      default:
        setTheme('black');
        break;
    }
  }

  useEffect(() => {
    const appDiv = document.querySelector('#app');
    switch (theme) {
      case 'black':
        appDiv?.classList.remove('white');
        break;
      default:
        appDiv?.classList.add('white');
        break;
    }
  }, [theme])

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, [])

  return (
    <div className="content">
      <div className="theme">
        <img src={theme === 'black' ?
          './src/assets/img/white-theme.png' :
          './src/assets/img/black-theme.png'}
          onClick={handleThemeChange}
        />
      </div>
      <section className="hidden">
        <div className="intro hidden">
          <span className="hidden text-h4-medium">
            Привет, меня зовут
          </span>
          <span className="hidden text-h1-medium intro__name">
            СУЛАЙМАНОВ РОМАН
          </span>
          <span className="hidden text-h2-medium">
            Я занимаюсь Frontend-разработкой
          </span>
          <span className="hidden text-h3-medium">
            Создаю красивые и функциональные web-приложения
          </span>
        </div>
      </section>

      <section className="hidden">
        <div className="about_me">
          <span className="about_me__title text-h3-medium">
            Обо мне
          </span>
          <span className="about_me__text text-base1-medium">
            Моя страсть — создание web-приложений, которые не только красивы
            и интуитивно понятны, но и способны решать бизнес-задачи эффективно.
            Как фронтенд-разработчик, я наслаждаюсь каждым этапом процесса:
            от проектирования интерфейса до реализации функциональности,
            которая делает жизнь пользователей проще.
          </span>
          <span className="about_me__skills_title text-h5-medium">
            Мои ключевые навыки:
          </span>
          <ul className="about_me__skills_list">
            <li className="about_me__skill_item">
              <div className="about_me__skill_item__point"></div>
              <span className="text-base1-medium">Знание HTML, CSS, JavaScript, TypeScript;</span>
            </li>
            <li className="about_me__skill_item">
              <div className="about_me__skill_item__point"></div>
              <span className="text-base1-medium">Знание HTML, CSS, JavaScript, TypeScript;</span>
            </li>
          </ul>
        </div>
      </section>

      {/* <section className="hidden">
        <h1>It is really good</h1>
        <div className="languages">
          <div className="language__item hidden">
            <img src="./src/assets/img/typescript-original.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/javascript-original.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/html5-original-wordmark.svg" />
          </div>
        </div>
      </section> */}

      <section className="hidden">
        <h1>It is really good</h1>
        <div className="languages">
          <div className="language__item hidden">
            <img src="./src/assets/img/javascript-original.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/html5-original-wordmark.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/typescript-original.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/javascript-original.svg" />
          </div>
          <div className="language__item hidden">
            <img src="./src/assets/img/html5-original-wordmark.svg" />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Content;
