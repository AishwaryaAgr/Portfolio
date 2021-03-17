/** @format */

const logo = document.querySelector('.divi');
const hover = document.querySelector('.hovering');
const p2 = document.querySelector('.page2');
const cont = document.querySelector('.content');
// console.log(logo);

logo.addEventListener('mouseover', () => {
	hover.style.left = '0';
});
logo.addEventListener('mouseleave', () => {
	hover.style.left = '100%';
});
