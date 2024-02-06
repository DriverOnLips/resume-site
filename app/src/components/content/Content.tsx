import React, { useEffect } from 'react';

import './Content.css';
import { useApp } from '../../hooks/useApp';

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
  });

  const handleThemeChange = () => {
    switch (theme) {
      case 'black':
        setTheme('white');
        break;
      default:
        setTheme('black');
        break;
    }
  };

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
  }, [theme]);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="content">
      <div className="theme">
        <img
          src={
            theme === 'black'
              ? './src/assets/img/white-theme.png'
              : './src/assets/img/black-theme.png'
          }
          onClick={handleThemeChange}
        />
      </div>
      <section id="intro">
        <div className="intro hidden">
          <span className="text-h4-medium">Привет, меня зовут</span>
          <span className="text-h1-medium intro__name">СУЛАЙМАНОВ РОМАН</span>
          <span className="text-h2-medium">
            Я занимаюсь Frontend-разработкой
          </span>
          <span className="text-h3-medium">
            Создаю красивые и функциональные web-приложения
          </span>
        </div>
      </section>

      <section id="about_me" className="about_me hidden">
        <span className="about_me__title text-h3-medium">Обо мне</span>
        <span className="about_me__text text-h5-medium">
          Моя страсть — создание web-приложений, которые не только красивы и
          интуитивно понятны, но и способны решать бизнес-задачи эффективно. Как
          фронтенд-разработчик, я наслаждаюсь каждым этапом процесса: от
          проектирования интерфейса до реализации функциональности, которая
          делает жизнь пользователей проще.
        </span>
        <span className="about_me__skills_title text-h4-medium">
          Мои ключевые навыки:
        </span>
        <ul className="about_me__skills_list">
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Знание HTML, CSS, JavaScript, TypeScript;
            </span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Знание React (Hooks, Lifecycle (mount, update, unmount), Props);
            </span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Умение работать со State-менеджерами (React-Redux, Redux-toolkit);
            </span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">Умение создавать SPA и PWA;</span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Умение деплоить приложение с использованием Vite, а также Webpack;
            </span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Умение работать с React-native;
            </span>
          </li>
          <li className="about_me__skill_item">
            <div className="about_me__skill_item__point"></div>
            <span className="text-h5-medium">
              Умение писать адаптивный дизайн (media, relative units);
            </span>
          </li>
        </ul>
      </section>

      <section id="tech" className="tech hidden">
        <span className="tech__title text-h3-medium">Стек технологий</span>
        <div className="tech__frameworks">
          <span className="tech__frameworks__text text-h4-medium">
            Фреймворки, инструменты и библиотеки:
          </span>
          <div className="tech__frameworks__items">
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            />
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/redux-purple.svg?style=for-the-badge&logo=redux&logoColor=white"
            />
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/vite-floralwhite.svg?style=for-the-badge&logo=vite&logoColor=blackB"
            />
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
            />
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/Babel-yellow.svg?style=for-the-badge&logo=Babel&logoColor=white"
            />
            <img
              className="tech__frameworks__item"
              src="https://img.shields.io/badge/NPM-%23323330.svg?style=for-the-badge&logo=npm&logoColor=white"
            />
          </div>
        </div>

        <div className="tech__languages">
          <span className="tech__languages__text text-h4-medium">Языки:</span>
          <div className="tech__languages__items">
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/c++-black.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/go-blue?style=for-the-badge&logo=go&logoColor=white"
            />
            <img
              className="tech__languages__item"
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            />
          </div>
        </div>

        <div className="tech__others">
          <span className="tech__others__text text-h4-medium">Прочее:</span>
          <div className="tech__others__items">
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/postgres-blue.svg?style=for-the-badge&logo=postgresql&logoColor=%2361DAFB"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/redis-floralwhite.svg?style=for-the-badge&logo=redis&logoColor=red"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/figma-%2320232a.svg?style=for-the-badge&logo=figma"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/Linux-%2320232a?style=for-the-badge&logo=linux"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/sqlserver-black.svg?style=for-the-badge&logo=sqlserver&logoColor=%2361DAFB"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/-Swagger-%2320232a?style=for-the-badge&logo=swagger"
            />
            <img
              className="tech__others__item"
              src="https://img.shields.io/badge/Postman-%2320232a?style=for-the-badge&logo=postman"
            />
          </div>
        </div>
      </section>

      <section id="expirience" className="expirience hidden">
        <span className="expirience__title text-h3-medium">
          Опыт разработки
        </span>
        <div className="timeline">
          <div className="container left-container">
            <img src="./src/assets/img/school.png" alt="bmstu" />
            <div className="text-box">
              <span className="text-h4-medium expirience__company__name">
                МГТУ им. Баумана
              </span>
              <span className="text-h5-medium expirience__company__role">
                Помощник преподавателя
              </span>
              <span className="text-base1-medium expirience__company__deadlines">
                Сентябрь 2022 - Настоящее время
              </span>
              <ul className="bmstu_tasks">
                <li>
                  <span className="text-base2-medium expirience__company__task__item">
                    Создание клиентской части web-приложений: <br /> ○ HTML,
                    CSS, JavaScript/TypeScript <br /> ○ React <br /> ○ Redux
                    <br /> ○ Vite
                  </span>
                </li>
                <li>
                  <span className="text-base2-medium expirience__company__task__item">
                    Создание backend части: <br /> ○ Golang <br /> ○ Gin
                    <br /> ○ JWT <br /> ○ PostgreSQL <br /> ○ Redis
                  </span>
                </li>
              </ul>
              <div className="left-container-arrow"></div>
            </div>
          </div>

          <div className="container right-container">
            <img src="./src/assets/img/vk.png" alt="vk" />
            <div className="text-box">
              <span className="text-h4-medium expirience__company__name">
                VK Образование
              </span>
              <span className="text-h5-medium expirience__company__role">
                Студент программы по web-разработке
              </span>
              <span className="text-base1-medium expirience__company__deadlines">
                Февраль 2023 - Настоящее время
              </span>
              <ul className="vk_tasks">
                <li>
                  <span className="text-base2-medium expirience__company__task__item">
                    Разработка клиентской части проектов с использованием стека
                    технологий HTML, CSS, JavaScript
                  </span>
                </li>
                <li>
                  <span className="text-base2-medium expirience__company__task__item">
                    Изучение и работа с БД: PostgreSQL, Redis
                  </span>
                </li>
                <li>
                  <span className="text-base2-medium expirience__company__task__item">
                    Создание приложений с использованием самописной
                    flux-архитектуры и менеджеров состояний
                  </span>
                </li>
              </ul>
              <div className="right-container-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact hidden">
        <span className="contact__title text-h3-medium">Свяжитесь со мной</span>
        <div className="contact__items">
          <div className="contact__item contact__telegram hidden">
            <a
              href="https://t.me/driver_on_lips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/img/telegram.png"
                className="contact__item-img"
              />
            </a>
          </div>
          <div className="contact__item contact__vk hidden">
            <a
              href="https://vk.com/driveronlips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/img/vk2.png"
                className="contact__item-img"
              />
            </a>
          </div>
          <div className="contact__item contact__mailru hidden">
            <a
              href="https://e.mail.ru/compose/?to=driver_on_lips@mail.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/img/mailru.png"
                className="contact__item-img"
              />
            </a>
          </div>
          <div className="contact__item contact__phone hidden">
            <a
              href="tel:+79999007533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/img/phone.png"
                className="contact__item-img"
                alt="Phone Icon"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
