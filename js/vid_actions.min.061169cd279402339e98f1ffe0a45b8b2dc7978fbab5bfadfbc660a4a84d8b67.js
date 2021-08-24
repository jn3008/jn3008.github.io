var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i);},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());}};function playVid(x){x.play();}
function pauseVid(x){x.pause();}
function doFull(x){if(isMobile.any())return;if(x.requestFullscreen){x.requestFullscreen();}
else if(x.mozRequestFullScreen){x.mozRequestFullScreen();}
else if(x.webkitRequestFullscreen){x.webkitRequestFullscreen();}
else if(x.msRequestFullscreen){x.msRequestFullscreen();}};