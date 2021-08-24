function transformScroll(event){if(!event.deltaY||event.shiftKey){return;}
event.currentTarget.scrollLeft+=event.deltaY;}
var element=document.scrollingElement||document.documentElement;element.addEventListener("wheel",transformScroll);