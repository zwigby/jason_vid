/* All your JS starts here!
   Use requirejs (http://requirejs.org/) to include more JS files.
   You don't need to include requirejs yourself!
   The Grunt scripts will automatically merge all these files into /compiled/scripts.js */
   $(function() {
   	    var out = []; 
		var insta_vid_list = [];
		var insta_vid_list2 = [];
		var jason_vid_list = ['../images/ja_clips/ja_clip_1.mp4','../images/ja_clips/ja_clip_2.mp4','../images/ja_clips/ja_clip_3.mp4','../images/ja_clips/ja_clip_4.mp4','../images/ja_clips/ja_clip_5.mp4','../images/ja_clips/ja_clip_6.mp4','../images/ja_clips/ja_clip_7.mp4'];
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
		var timer;

		//play and close
		var cover = $("#play_img");
		var player1 = $("#video_player1");
		var player2 = $("#video_player2");
		var player3 = $("#video_player3");

		// Buttons
		var start = document.getElementById("play_img");

		//preprocessor
		//first page of vids
		for(var i=0;i<solidus.context.resources.vids.data.length-1; i++)
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

	    /*// randomize videos
		var out = [];
		// have to reverse the for loop because we're going to remove elements each time
		for(i = insta_vid_list.length; i >= 0; i--) {
		  // create a random index
		  var random = Math.round(Math.random() * insta_vid_list.length);
		  // push a video from the incoming video to the out while taking it out of the inVids array
		  //if(typeof insta_vid_list[i].url !== 'undefined'){
		  	
		  	out.push(insta_vid_list.splice(random, 1));
		  	
		  //}
		}*/

		function shuffle(array){
		  var currentIndex = array.length;

		  // While there remain elements to shuffle...
		  for(i = currentIndex; i >= 0; i--) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);

		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;

		  }

		  return array;
		}										

		console.dir(insta_vid_list);
		shuffle(insta_vid_list);
		for(i = 0; i <= insta_vid_list.length; i++){
		  	if(insta_vid_list[i] === undefined){
		  		insta_vid_list.splice(i,1);
		  	}
		  }
		console.dir(insta_vid_list);

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
      		timer = setTimeout(checkAudioTime, 1000);
	    });

	  //audio time check
	  var checkAudioTime = function(){
	  	if(audio.currentTime.toFixed(0) === 210){
	  		return ending();
	  	}else if(audio.currentTime.toFixed(0) == fanTimer && audio.currentTime.toFixed(0) != jaTimer){
	  		fanTimer = fanTimer + 5;
	  		fanVid();
	  		timer = setTimeout(checkAudioTime, 1000);
	  	}else if(audio.currentTime.toFixed(0) == jaTimer){
	  		jaTimer = jaTimer + 30;
	  		fanTimer = fanTimer + 10;
	  		jaVid();
	  		timer = setTimeout(checkAudioTime, 1000);
	  	}else{
	  		timer = setTimeout(checkAudioTime, 1000);
	  	}
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

	  var ending = function(){
	  	clearTimeout(timer);
	  	fanTimer = 10000;
	  	player2.addClass('closed');
		player1.addClass('closed');
		player3.removeClass('closed');
		video3.setAttribute("src", jason_vid_list[jaCount]);
		video3.load();
		video3.play();
		names.innerHTML = '';
		video3.muted = true;
	  }

	});