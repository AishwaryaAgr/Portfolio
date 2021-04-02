/** @format */

const bodyy = document.querySelector("body");
const content = bodyy.innerHTML;
bodyy.innerHTML = `<div class="scrollBar"><div class="slider"></div></div>`;
bodyy.innerHTML += content;
const slide = document.querySelector(".slider");
const scrollBar = document.querySelector(".scrollBar");
const head = document.querySelector("head");
const wrapper = document.querySelector(".wrapper");
const twrap = document.querySelector(".text-wrapper");

var boddy = document.body,
	html = document.documentElement;

var height = Math.max(
	boddy.scrollHeight,
	boddy.offsetHeight
	// html.scrollHeight,
	// html.offsetHeight
);
head.innerHTML += `<link rel="stylesheet"  href="scrollstyle.css" />`;
const back = document.querySelector(".back");


// const back = document.querySelector(".back");
$(document).ready(function main() {

	$bHeight = height;
	$sHeight = window.innerHeight;
	$sliderHeight = ($sHeight / $bHeight) * 100;
	$(".slider").height($sliderHeight + "%");
	if ($sliderHeight > 99 || bodyy.style.height === "0") {
		$(".slider").height("0%");
		$(".scrollBar").height("0");
	}
	$dist = ($sliderHeight * $sHeight) / 100;
	$(window).on("load", correct);
	$(".slider").draggable({
		containment: "parent",
		axis: "y",
		drag: function () {
			$pos = $(".slider").position().top;
			$ScrollPercent = ($pos / $sHeight) * 100;
			$ScrollPx = ($ScrollPercent / 100) * $bHeight;
			window.scrollTo(0, $ScrollPx);
		},
	});
	const skill = document.querySelector(".skills");
	function hello() {
		if (window.pageYOffset > 50) {
			skill.style.color = "white";
		} else {
			skill.style.color = "transparent";
		}
	}
	function correct() {
		const yOffset = window.pageYOffset;
		let ht = ($sHeight * yOffset) / $bHeight;

		return (slide.style.top = ht + "px");
	}
	let r = 0,
		g = 0,
		b = 0,
		a = 0;

	const doit = () => {
		r = Math.floor(Math.random() * 255);
		g = Math.floor(Math.random() * 255);
		b = Math.floor(Math.random() * 255);

		slide.style.background = `rgba(${r},${g},${b},1)`;
		scrollBar.style.background = `rgba(${255 - r},${255 - g},${255 - b
			},0.5)`;
		correct();
		hello();
	};
	let i = 0,
		type = "llo World!!!";
	const typeid = document.querySelector("#type");

	const typing = () => {
		if (i < type.length) {
			typeid.innerHTML += type.charAt(i);
			i++;

			setTimeout(typing, 600);
		}
	};
	const doits = () => {
		back.innerHTML = "";
		back.style.height = "0";
		back.style.overflow = "hidden";
		$bHeight = boddy.scrollHeight;
		$sHeight = window.innerHeight;
		$bHeight -= back.scrollHeight;
		$sliderHeight = ($sHeight / $bHeight) * 100;
		$(".slider").height($sliderHeight + "%");
		if ($sliderHeight >= 99 || bodyy.style.height === "0") {
			$(".slider").height("0%");
			$(".scrollBar").height("0");
		}
		correct();
		typing();
	};
	back.addEventListener("wheel", doits);
	back.addEventListener("click", doits);
	back.addEventListener("keydown", doits);
	window.addEventListener("resize", main);
	window.addEventListener("resize", correct);
	window.addEventListener("mouseover", correct);
	window.addEventListener("wheel", correct);
	window.addEventListener("keydown", correct);
	window.addEventListener("click", doit);
	window.addEventListener("wheel", hello);
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
	function checke() {
	var check = false;
	if (window.innerWidth > 768) {
		check = true;
	}
	else{
		doits();
	}
	return check;
}
checke();
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


	scrollBar.addEventListener("click", (e) => {
		$pos = e.clientY;
		$ScrollPercent = ($pos / $sHeight) * 100;
		$ScrollPx = ($ScrollPercent / 100) * $bHeight;
		window.scrollTo(0, $ScrollPx);
		correct();
	});
});
const hearts = document.querySelectorAll(".Icon--heart");

hearts.forEach((heart) => {
	heart.addEventListener("click",(e)=>{
	e.target.style.backgroundImage=`url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA3MiI+PHBhdGggY2xhc3M9Imljb24iIGZpbGw9IiNlODFjNGYiIGQ9Ik0zOC43MjMgMTJjLTcuMTg3IDAtMTEuMTYgNy4zMDYtMTEuNzIzIDguMTMtLjU2My0uODI0LTQuNDk2LTguMTMtMTEuNzIzLTguMTNDOC43OSAxMiAzLjUzMyAxOC4xNjMgMy41MzMgMjQuNjQ3IDMuNTMzIDM5Ljk2NCAyMS44OSA1NS45MDcgMjcgNTZjNS4xMS0uMDkzIDIzLjQ2Ny0xNi4wMzYgMjMuNDY3LTMxLjM1M0M1MC40NjcgMTguMTYzIDQ1LjIxIDEyIDM4LjcyMyAxMnoiLz48L3N2Zz4=')`;
	})
});
