import './Minibar.css';
import { scrollToSection } from '../../utils/scrollToSection';
import { useEffect, useState } from 'react';

const Minibar = () => {
	const [minibarMode, setMinibarMode] = useState<'opened' | 'closed'>('closed');

	useEffect(() => {
		const themeElement = document.querySelector('.theme');
		themeElement?.classList.toggle('hide');
	}, [minibarMode]);

	if (minibarMode === 'closed') {
		return (
			<div className='minibar-closed'>
				<img
					onClick={() => {
						setMinibarMode('opened');
					}}
					src='/resume-site/assets/menu.png'
				/>
			</div>
		);
	}

	return (
		<aside id='minibar'>
			<div className='minibar__logo'>
				<a
					href='intro'
					onClick={(event) => {
						setMinibarMode('closed');
						scrollToSection(event);
					}}
				>
					<img
						className='minibar__logo-img'
						src='/resume-site/assets/logo.svg'
					/>
				</a>
				<img
					onClick={() => {
						setMinibarMode('closed');
					}}
					src='/resume-site/assets/cross.png'
				/>
			</div>
			<div className='minibar__btns'>
				<ol className='minibar__btns__components'>
					<div className='minibar__btns__components__item minibar__btns__components__about_me'>
						<a
							href='about_me'
							onClick={(event) => {
								setMinibarMode('closed');
								scrollToSection(event);
							}}
							className='minibar__btns__components__item-text text-h5-medium'
						>
							Обо мне
						</a>
					</div>
					<div className='minibar__btns__components__item minibar__btns__components__tech'>
						<a
							href='tech'
							onClick={(event) => {
								setMinibarMode('closed');
								scrollToSection(event);
							}}
							className='minibar__btns__components__item-text text-h5-medium'
						>
							Стек технологий
						</a>
					</div>
					<div className='minibar__btns__components__item minibar__btns__components__work'>
						<a
							href='expirience'
							onClick={(event) => {
								setMinibarMode('closed');
								scrollToSection(event);
							}}
							className='minibar__btns__components__item-text text-h5-medium'
						>
							Опыт разработки
						</a>
					</div>
					<div className='minibar__btns__components__item minibar__btns__components__contacts'>
						<a
							href='contact'
							onClick={(event) => {
								setMinibarMode('closed');
								scrollToSection(event);
							}}
							className='minibar__btns__components__item-text text-h5-medium'
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
				className='minibar__btns__contact_me-href'
			>
				<button className='minibar__btns__contact_me text-h5-medium'>
					Связаться со мной
				</button>
			</a>
		</aside>
	);
};

export default Minibar;
