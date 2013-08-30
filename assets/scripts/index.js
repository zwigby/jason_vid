/* All your JS starts here!
   Use requirejs (http://requirejs.org/) to include more JS files.
   You don't need to include requirejs yourself!
   The Grunt scripts will automatically merge all these files into /compiled/scripts.js */
   $(function() {
		var insta_vid_list = [];
		var jason_vid_list = ['../images/ja_clips/ja_clip_1.mp4'];
		var timer = 5000;
		//Video
		var video = document.getElementById('v');
		// Buttons
		var playButton = document.getElementById("play-pause");
		var muteButton = document.getElementById("mute");
		var fullScreenButton = document.getElementById("full-screen");

		// Sliders
		var seekBar = document.getElementById("seek-bar");
		var volumeBar = document.getElementById("volume-bar");

		//preprocessor

		for(var i=0;i<solidus.context.resources.vids.data.length; i++)
	    {

	       if(typeof solidus.context.resources.vids.data[i].videos !== 'undefined'){
	       
	         insta_vid_list.push({
	           url: solidus.context.resources.vids.data[i].videos.low_resolution.url,
	           username: solidus.context.resources.vids.data[i].user.username
	         });    
	       }
	    }

		//loading and playing videos
		var videoIndex = 0;
		var clipCount = 0;
		  
		  setInterval(function(){
		    
		    if(Modernizr.video){

		    	if(clipCount === 4){
		    	  //timer = 10000;
		    	  video.setAttribute("src", jason_vid_list[0]);
			      video.load();
			      video.play();
			      video.muted = true;
		    	}else{
		    	  //timer = 5000;
		    	  video.setAttribute("src", insta_vid_list[videoIndex].url);
			      video.load();
			      video.play();
			      video.muted = true;
		    	}
		      
		      videoIndex++;
		      clipCount++;
		      if(videoIndex >= insta_vid_list.length) {
		        videoIndex = 0;
		      }
		    }
		    
		  }, timer);

		  //Video Controls
			// Event listener for the play/pause button
			playButton.addEventListener("click", function() {
			if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
			} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
			}
			});

			// Event listener for the mute button
			muteButton.addEventListener("click", function() {
			if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.innerHTML = "Unmute";
			} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = "Mute";
			}
			});

			// Event listener for the full-screen button
			fullScreenButton.addEventListener("click", function() {
			if (video.requestFullscreen) {
			video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
			} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
			}
			});

			// Event listener for the seek bar
			seekBar.addEventListener("change", function() {
			// Calculate the new time
			var time = video.duration * (seekBar.value / 100);

			// Update the video time
			video.currentTime = time;
			});

			// Update the seek bar as the video plays
			video.addEventListener("timeupdate", function() {
			// Calculate the slider value
			var value = (100 / video.duration) * video.currentTime;

			// Update the slider value
			seekBar.value = value;
			});

			// Pause the video when the slider handle is being dragged
			seekBar.addEventListener("mousedown", function() {
			video.pause();
			});

			// Play the video when the slider handle is dropped
			seekBar.addEventListener("mouseup", function() {
			video.play();
			});

			// Event listener for the volume bar
			volumeBar.addEventListener("change", function() {
			// Update the video volume
			video.volume = volumeBar.value;
			});

	});