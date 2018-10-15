var ppbutton,thevideo,timebar,curtime,videolength;
window.onload = setUp;
function setUp(){
	thevideo = document.getElementById("thevideo");
	ppbutton = document.getElementById("ppbutton");
	timebar = document.getElementById("timebar");
	curtime = document.getElementById("curtime");
	videolength = document.getElementById("videolength");

	ppbutton.addEventListener("click",playPause, false);
	timebar.addEventListener("change",vidTime,false);
	thevideo.addEventListener("timeupdate",timebarUpdate,false)
	thevideo.addEventListener("click",playPause, false)
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

	var curmin = Math.floor(thevideo.currentTime / 60);
	var durmin = Math.floor(thevideo.duration / 60);
	var cursec = Math.floor(thevideo.currentTime - curmin * 60);
	var dursec = Math.floor(thevideo.duration - durmin * 60);

	if(cursec<10){
		cursec = "0"+cursec;
	}
	if(dursec<10){
		dursec = "0"+dursec;
	}
	if(curmin<10){
		curmin = "0"+curmin;
	}
	if(durmin<10){
		durmin = "0"+durmin;
	}
	curtime.innerHTML = curmin+":"+cursec;
	videolength.innerHTML = durmin+":"+dursec;
}
