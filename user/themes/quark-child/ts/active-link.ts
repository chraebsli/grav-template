const startActiveLink = () => {
	const navigations = document.querySelectorAll('.navigation');
	const url = window.location.href
	navigations.forEach(navigation => {
		const links = navigation.querySelectorAll('a');
		links.forEach(link => {
			if (link.href === url || link.href === url + '/') {
				link.parentElement.classList.add('active');
			}
		});
	});
}

window.addEventListener('load', startActiveLink)