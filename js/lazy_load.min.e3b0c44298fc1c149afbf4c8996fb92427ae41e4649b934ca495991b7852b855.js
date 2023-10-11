// document.addEventListener("DOMContentLoaded", function() {
//   var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

//   if ("IntersectionObserver" in window) {
//     var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(video) {
// 					console.log("Checking video:", video.target);
//         if (video.isIntersecting) {
// 							console.log("Loading video:", video.target);
//           for (var source in video.target.children) {
//             var videoSource = video.target.children[source];
//             if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
//               videoSource.src = videoSource.dataset.src;
//             }
//           }

//           video.target.load();
//           video.target.classList.remove("lazy");
//           lazyVideoObserver.unobserve(video.target);
//         }
//       });
//     });

//     lazyVideos.forEach(function(lazyVideo) {
//       lazyVideoObserver.observe(lazyVideo);
//     });
//   }
// });
// // console.log("JavaScript is running");
// // document.addEventListener('DOMContentLoaded', function () {
// // 	console.log("DOMContentLoaded is running");
// // 	let options = {
// // 		root: null,
// // 		rootMargin: '0px',
// // 		threshold: 0.0
// // 	};

// // 	let observer = new IntersectionObserver(onIntersection, options);

// // 	document.querySelectorAll('video[data-src]').forEach(video => {
// // 		observer.observe(video);
// // 	});

// // 	function onIntersection(entries) {
// // 		entries.forEach(entry => {
// // 			console.log("Checking video:", entry.target);
// // 			if (entry.isIntersecting) {
// // 				console.log("Loading video:", entry.target);
// // 				let video = entry.target;
// // 				video.src = video.getAttribute('data-src');
// // 				video.removeAttribute('data-src');
// // 				observer.unobserve(video); // Stop observing this video once it's loaded
// // 			}
// // 		});
// // 	}
// // });
