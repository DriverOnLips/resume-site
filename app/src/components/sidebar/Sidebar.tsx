import './Sidebar.css';
import { scrollToSection } from '../../utils/scrollToSection';

const Sidebar = () => {
	return (
		<aside id='sidebar'>
			<div className='sidebar__logo'>
				<a href='intro' onClick={scrollToSection}>
					<img
						className='sidebar__logo-img'
						src='/resume-site/assets/logo.svg'
					/>
				</a>
			</div>
			<div className='sidebar__btns'>
				<ol className='sidebar__btns__components'>
					<div className='sidebar__btns__components__item sidebar__btns__components__about_me'>
						<a
							href='about_me'
							onClick={scrollToSection}
							className='sidebar__btns__components__item-text text-h5-medium'
						>
							Обо мне
						</a>
					</div>
					<div className='sidebar__btns__components__item sidebar__btns__components__tech'>
						<a
							href='tech'
							onClick={scrollToSection}
							className='sidebar__btns__components__item-text text-h5-medium'
						>
							Стек технологий
						</a>
					</div>
					<div className='sidebar__btns__components__item sidebar__btns__components__work'>
						<a
							href='expirience'
							onClick={scrollToSection}
							className='sidebar__btns__components__item-text text-h5-medium'
						>
							Опыт разработки
						</a>
					</div>
					<div className='sidebar__btns__components__item sidebar__btns__components__contacts'>
						<a
							href='contact'
							onClick={scrollToSection}
							className='sidebar__btns__components__item-text text-h5-medium'
						>
							Контакты
						</a>
					</div>
				</ol>
			</div>
			<a
				href='https://t.me/driver_on_lips'
				target='_blank'
				rel='noopener noreferrer'
				className='sidebar__btns__contact_me-href'
			>
				<button className='sidebar__btns__contact_me text-h5-medium'>
					Связаться со мной
				</button>
			</a>
		</aside>
	);
};

export default Sidebar;
