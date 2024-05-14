/**
 * Contains code to map some of the physical
 * keyboard keys to the alphabet
 */

const arabicArray = {
	a: 'A',
	i: "I",
	o: 'O',
	A: "Aa",
	I: "Ii",
	O: 'Oo',
	b: 'B',
	t: 'T',
	T: 'ث',
	j: 'ج',
	h: 'ح',
	5: 'خ',
	d: 'D',
	D: 'ذ',
	r: 'R',
	z: 'Z',
	s: 'S',
	x: 'ش',
	S: 'ص',
	2: 'ض',
	7: 'ط',
	8: 'ظ',
	3: 'ع',
	4: 'غ',
	f: 'F',
	9: 'ق',
	v: "V",
	k: 'K',
	g: "G",
	l: "L",
	m: 'M',
	n: 'N',
	H: 'ه',
	w: 'و',
	y: 'Y'
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
		event.preventDefault()
		space()
	} else
		// Backspace
	if (event.keyCode == 8) {
		view.removeChild(view.lastChild)
	}
})