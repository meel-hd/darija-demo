/**
 * Contains code to map some of the physical
 * keyboard keys to the alphabet
 */

const arabicArray = {
	a: 'أ',
	b: 'ب',
	t: 'ت',
	T: 'ث',
	j: 'ج',
	h: 'ح',
	5: 'خ',
	d: 'د',
	D: 'ذ',
	r: 'ر',
	z: 'ز',
	s: 'س',
	x: 'ش',
	S: 'ص',
	2: 'ض',
	7: 'ط',
	8: 'ظ',
	3: 'ع',
	4: 'غ',
	f: 'ف',
	9: 'ق',
	k: 'ك',
	l: 'ل',
	m: 'م',
	n: 'ن',
	H: 'ه',
	w: 'و',
	y: 'ي'
};

const view = document.getElementById("view")

// Write a character/space/Backspace
addEventListener('keydown', event => {
	hideTable()
	// A letter
	if (arabicArray[event.key]) {
		let letterSrc = `assets/${arabicArray[event.key]}.png`;
		const dispaly = `<img
		src="${letterSrc}"
		id="letter"
		></img>`;
		view.innerHTML += dispaly;
	} else
		// Space
	if (event.keyCode == 32) {
		space()
	} else
		// Backspace
	if (event.keyCode == 8) {
		view.removeChild(view.lastChild)
	}
})