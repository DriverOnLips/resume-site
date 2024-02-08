export const scrollToSection = (
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): void => {
	event.preventDefault();
	const id = event.currentTarget.getAttribute('href') || '';
	const section = document.getElementById(id);
	section?.scrollIntoView({ behavior: 'smooth' });
};
