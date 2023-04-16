onload = async () => {
	const children = getSponsorenParent().children;
	for (const child of children) {
		removeChildIfBR(child);
	}
}

const getSponsorenParent = () => {
	return document.getElementById('sponsoren-list').children[0];
}
const removeChildIfBR = (child: Element) => {
	if (child.tagName === 'BR') {
		child.remove();
	}
}