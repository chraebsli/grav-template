const startMobileMenu = () => {
	getMobileButton().addEventListener('onclick', () => {
			toggleNavigationMenu()
		}
	)
}

const toggleNavigationMenu = () => {
	getMobileButton().classList.toggle('active')
	getMobileMenu().classList.toggle('active')
}

const getMobileButton = (): HTMLDivElement => {
	return document.querySelector('#mobile-menu')
}
const getMobileMenu = (): HTMLDivElement => {
	return document.querySelector('#mobile-navigation')
}

window.addEventListener('load', startMobileMenu)