function playPause(btt,vid){
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		btt.innerHTML = "Pause";
	}
	else{
		vid.pause();
		btt.innerHTML = "Play";
	}
}