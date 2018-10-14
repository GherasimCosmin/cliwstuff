var ppbutton,thevideo,timebar,curtime,videolength;
window.onload = setUp;
function setUp(){
	thevideo = document.getElementById("thevideo");
	ppbutton = document.getElementById("ppbutton");
	timebar = document.getElementById("timebar");

	ppbutton.addEventListener("click",playPause, false);
	timebar.addEventListener("change",vidTime,false);
	thevideo.addEventListener("timeupdate",timebarUpdate,false)
}

function playPause(){
	if(thevideo.paused){
		thevideo.play();
		ppbutton.innerHTML = "Pause";
	}
	else{
		thevideo.pause();
		ppbutton.innerHTML = "Play";
	}
}
function vidTime(){
	var gototime = thevideo.duration * (timebar.value/100);
	thevideo.currentTime = gototime;
}
function timebarUpdate(){
	var timeUpdate = thevideo.currentTime * (100/thevideo.duration);
	timebar.value = timeUpdate;
}
