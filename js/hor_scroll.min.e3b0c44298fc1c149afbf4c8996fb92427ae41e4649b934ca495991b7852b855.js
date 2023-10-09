// function transformScroll(event) {
//   if (!event.deltaY || event.shiftKey) {
//     return;
//   }

//   event.currentTarget.scrollLeft += event.deltaY;
// }

// var element = document.getElementById('main') || document.scrollingElement || document.documentElement;
// element.addEventListener("wheel", transformScroll);


// document.querySelectorAll().forEach( (element) => { element.addEventListener("wheel", transformScroll) } )

// for (element of document.querySelectorAll()) {
//   element.addEventListener("wheel", transformScroll)
// }

// const scrollJacking = (event) => {
// 	if (!event.deltaY || event.shiftKey) {
// 		return;
// 	}
// 	event.currentTarget.scrollLeft += event.deltaY;
// };
// document.querySelectorAll(".scrollable").forEach((element) => {
// 	element.addEventListener("wheel", scrollJacking);
// });
