/* All your JS starts here!
   Use requirejs (http://requirejs.org/) to include more JS files.
   You don't need to include requirejs yourself!
   The Grunt scripts will automatically merge all these files into /compiled/scripts.js */
   $(function() {
		var insta_vid_list = [];
		var insta_vid_list2 = [];
		var jason_vid_list = ['../images/ja_clips/ja_clip_1.mp4','../images/ja_clips/ja_clip_7.mp4'];
		var fanTimer = 5;
		var jaTimer = 20;
		//Video and Audio
		var video = document.getElementById('v1');
		var video2 = document.getElementById('v2');
		var video3 = document.getElementById('v3');
		var audio = document.getElementById('a');

		//usernames
		var names = document.getElementById('usernames');

		//loading and playing videos
		var videoIndex = 0;
		var clipCount = 0;
		var jaCount = 0;

		//play and close
		var cover = $("#play_img");
		var player1 = $("#video_player1");
		var player2 = $("#video_player2");
		var player3 = $("#video_player3");

		// Buttons
		var start = document.getElementById("start");
		var playButton = document.getElementById("play-pause");
		var muteButton = document.getElementById("mute");
		var fullScreenButton = document.getElementById("full-screen");

		// Sliders
		var seekBar = document.getElementById("seek-bar");
		var volumeBar = document.getElementById("volume-bar");

		//preprocessor
		//first page of vids
		for(var i=0;i<solidus.context.resources.vids.data.length; i++)
	    {

	       if(typeof solidus.context.resources.vids.data[i].videos !== 'undefined'){
	       
	         insta_vid_list.push({
	           url: solidus.context.resources.vids.data[i].videos.low_resolution.url,
	           username: solidus.context.resources.vids.data[i].user.username
	         });    
	       }
	    }

	    //second page of vids
	    for(var i=0;i<solidus.context.resources.moreVids.data.length; i++)
	    {

	       if(typeof solidus.context.resources.moreVids.data[i].videos !== 'undefined'){
	       
	         insta_vid_list2.push({
	           url: solidus.context.resources.moreVids.data[i].videos.low_resolution.url,
	           username: solidus.context.resources.moreVids.data[i].user.username
	         });    
	       }
	       
	    }

	    video.setAttribute("src", insta_vid_list[videoIndex].url);
  		video.load();
  		video.muted = true;
  		audio.setAttribute("src", "../music/ja-nt.mp3");
	    audio.load();

	    start.addEventListener("click", function() {
      		cover.addClass('closed');
      		video.play();
      		audio.play();
      		names.innerHTML = insta_vid_list[videoIndex].username;
      		setTimeout(checkAudioTime, 1000);
		    
	    });

	  //audio time check
	  var checkAudioTime = function(){
	  	if(audio.currentTime.toFixed(0) == fanTimer && audio.currentTime.toFixed(0) != jaTimer){
	  		fanTimer = fanTimer + 5;
	  		fanVid();
	  	}else if(audio.currentTime.toFixed(0) == jaTimer){
	  		jaTimer = jaTimer + 30;
	  		fanTimer = fanTimer + 10;
	  		jaVid();
	  	}else{
	  		
	  	}
	  	
	  	setTimeout(checkAudioTime, 1000);
	  }

	  //Jason video
	  var jaVid = function(){
	  	if(jaCount >= jason_vid_list.length) jaCount = 0;
		player2.addClass('closed');
		player1.addClass('closed');
		player3.removeClass('closed');
		video3.setAttribute("src", jason_vid_list[jaCount]);
		video3.load();
		video3.play();
		names.innerHTML = '';
		video3.muted = true;
		jaCount++;
	  }

	  //fan videos
	  var fanVid = function(){
	  	videoIndex++
	  	if(jaCount >= insta_vid_list.length) videoIndex = 0;
	  	if(videoIndex%2==0){
	  	  player3.addClass('closed');
	  	  player2.addClass('closed');
	  	  player1.removeClass('closed');
		  video.setAttribute("src", insta_vid_list[videoIndex].url);
		  video.load();
		  video.play();
		  names.innerHTML = insta_vid_list[videoIndex].username;
		  video.muted = true;
		}else{
		  player3.addClass('closed');
		  player1.addClass('closed');
		  player2.removeClass('closed');
		  video2.setAttribute("src", insta_vid_list[videoIndex].url);
		  video2.load();
		  video2.play();
		  names.innerHTML = insta_vid_list[videoIndex].username;
		  video2.muted = true;
		}
	  }

	  //Video Controls
      // Event listener for the play/pause button
      playButton.addEventListener("click", function() {
      if (video.paused == true && audio.paused == true) {
      // Play the video
      video.play();
      audio.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
      } else {
      // Pause the video
      video.pause();
      audio.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
      }
      });

      // Event listener for the mute button
      muteButton.addEventListener("click", function() {
      if (audio.muted == false) {
      // Mute the video
      audio.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
      } else {
      // Unmute the video
      audio.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
      }
      });

      // Event listener for the volume bar
      volumeBar.addEventListener("change", function() {
      // Update the video volume
      audio.volume = volumeBar.value;
      });

	});