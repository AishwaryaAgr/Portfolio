/** @format */

window.addEventListener("click", () => {
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	a = Math.random() * 0.7;
	wrapper.style.background = `rgba(${r},${g},${b},${a})`;
	wrapper.style.color = `rgb(${255 - r},${255 - g},${255 - b})`;
	console.log(wrapper.style.color);
	console.log(wrapper.style.background);
});
