/* All your JS starts here!
   Use requirejs (http://requirejs.org/) to include more JS files.
   You don't need to include requirejs yourself!
   The Grunt scripts will automatically merge all these files into /compiled/scripts.js */
   $(function() {
   	    var out = []; 
		var insta_vid_list = [];
		var insta_vid_list2 = [];
		var listCheck = false;
		var fanTimer = 12;
		var jaTimer = 27;

		//Video and Audio
		var video = document.getElementById('v1');
		var video2 = document.getElementById('v2');
		var video3 = document.getElementById('v3');

		//usernames
		var names = document.getElementById('usernames');

		//loading and playing videos
		var videoIndex = 0;
		var clipCount = 0;
		var jaCount = 0;
		var timer;

		//play and close
		var vInfo = $(".video-info")
		var cover = $("#play_img");
		var end = $("#end_img");
		var player1 = $("#video_player1");
		var player2 = $("#video_player2");
		var player3 = $("#video_player3");

		// Buttons
		var start = document.getElementById("play_img");
		var clickCount = 0;

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

		if(solidus.context.resources.vids.data[0].type === 'image'){
			
			video3.setAttribute("src", "../images/ja_clips/jason_full_vid.mp4");
  			video3.load();

  			start.addEventListener("click", function() {
  				cover.addClass('closed');
		    	vInfo.fadeTo(2000, 1, function(){
		    		vInfo.delay(5000).fadeTo(2000, 0, function(){
		    			vInfo.delay(10000).remove();
		    		});
		    	});
	    	
	      		if (clickCount % 2 == 0) {
	      			video3.play();
		      		timer = setTimeout(checkAudioTime, 1000);
		      		clickCount++;
	      		}else{
	      			clearTimeout(timer);
	      			video3.pause();
		      		clickCount++;
	      		};
	      	});

      		var checkAudioTime = function(){
			  	if(video3.currentTime.toFixed(0) == 230){
			  		closing();
			  	}
			  	timer = setTimeout(checkAudioTime, 1000);
			  	console.log(video3.currentTime.toFixed(0));
			}

			var closing = function(){
			  	end.removeClass('closed');
			  	cover.css({display: 'none'});
			  	clearTimeout(timer);
			  	setTimeout(function(){
			  		video3.setAttribute("src", "../images/ja_clips/jason_full_vid.mp4");
			  		video3.load();
			  	}, 5000)
	  		}

			end.click(function(){
				end.addClass('closed');
				video3.play();
				names.innerHTML = '';
				timer = setTimeout(checkAudioTime, 1000);
				clickCount++;
				cover.css({display: 'block'});
			});
		
		}else{
		
			shuffle(insta_vid_list);
			for(i = 0; i <= insta_vid_list.length; i++){
				if(insta_vid_list[i] === undefined){
			  		insta_vid_list.splice(i,1);
				}
			}

			listCheck = true;
			video.setAttribute("src", insta_vid_list[videoIndex].url);
				video.load();
				video.muted = true;
				video2.setAttribute("src", insta_vid_list[videoIndex+1].url);
				video.load();
				video.muted = true;
				video3.setAttribute("src", "../images/ja_clips/jason_full_vid.mp4");
				video3.load();
			
		    start.addEventListener("click", function() {
		    	vInfo.fadeTo(2000, 1, function(){
		    		vInfo.delay(5000).fadeTo(2000, 0, function(){
		    			vInfo.delay(10000).remove();
		    		});
		    	});
		    	
		  		if (clickCount % 2 == 0) {
		  			cover.addClass('closed');
		  			if (player3.hasClass('closed')&&player2.hasClass('closed')) {
		  				video.play();
		  				names.innerHTML = '<ul><li></li><li>'+insta_vid_list[videoIndex].username+'</li></ul>';
		  			}else if(player3.hasClass('closed')&&player1.hasClass('closed')){
		  				video2.play();
		  				names.innerHTML = '<ul><li></li><li>'+insta_vid_list[videoIndex].username+'</li></ul>';
		  			}else{
		  				video3.play();
		  				names.innerHTML = '';

		  			};
		  			video3.play();
		      		timer = setTimeout(checkAudioTime, 1000);
		      		clickCount++;
		  		}else{
		      		if (player3.hasClass('closed')&&player2.hasClass('closed')) {
		  				video.pause();
		  			}else if(player3.hasClass('closed')&&player1.hasClass('closed')){
		  				video2.pause();
		  			}else{
		  				video3.pause();
		  			};
		  			clearTimeout(timer);
		  			video3.pause();
		      		clickCount++;
		  		};

		    });

		  //audio time check
		  var checkAudioTime = function(){
		  	if(video3.currentTime.toFixed(0) == 230){
		  		closing();
		  	}else if(video3.currentTime.toFixed(0) == 225){
		  		console.log('ending');
		  		ending();
		  		timer = setTimeout(checkAudioTime, 1000);
		  	}else if(video3.currentTime.toFixed(0) == fanTimer && video3.currentTime.toFixed(0) != jaTimer){
		  		fanTimer = fanTimer + 5;
		  		fanVid();
		  		timer = setTimeout(checkAudioTime, 1000);
		  		console.log('fan');
		  	}else if(video3.currentTime.toFixed(0) == jaTimer){
		  		jaTimer = jaTimer + 25;
		  		fanTimer = fanTimer + 10;
		  		jaVid();
		  		timer = setTimeout(checkAudioTime, 1000);
		  		console.log('jason');
		  	}else{
		  		timer = setTimeout(checkAudioTime, 1000);
		  		console.log(video3.currentTime.toFixed(0));
		  	}
		  }

		  //Jason video
		  var jaVid = function(){	  	
			player3.removeClass('closed');
			player2.addClass('closed');
			player1.addClass('closed');
			setTimeout(function(){
				video.setAttribute("src", insta_vid_list[videoIndex+1].url);
			  	video.load();	
		  	}, 1000);
			names.innerHTML = '';
			jaCount++;
		  }

		  //fan videos
		  var fanVid = function(){
		  	videoIndex++
		  	if(insta_vid_list[videoIndex].url === undefined) videoIndex = 0;
		  	if(insta_vid_list >= insta_vid_list.length) videoIndex = 0;
		  	if(videoIndex%2==0){
		  	  video.play();
		  	  player1.removeClass('closed');
		  	  player3.addClass('closed');
			  player2.addClass('closed');
			  setTimeout(function(){
			  	video2.setAttribute("src", insta_vid_list[videoIndex+1].url);
			  	video2.load();
			  }, 1000);
			  names.innerHTML = '<ul><li></li><li>'+insta_vid_list[videoIndex].username+'</li></ul>';
			  video.muted = true;
			}else{
			  video2.play();
			  player2.removeClass('closed');
			  player3.addClass('closed');
			  player1.addClass('closed');
			  setTimeout(function(){
				  video.setAttribute("src", insta_vid_list[videoIndex+1].url);
			  	  video.load();	
			  }, 1000);
			  names.innerHTML = '<ul><li></li><li>'+insta_vid_list[videoIndex].username+'</li></ul>';
			  video2.muted = true;
			}
		  }

		  var ending = function(){
		  	jaTimer = 10000;
		  	fanTimer = 10000;
		  	jaVid();
		  }

		  var closing = function(){
		  	end.removeClass('closed');
		  	cover.css({display: 'none'});
		  	clearTimeout(timer);
		  	videoIndex = 0;
			clipCount = 0;
			jaTimer = 27;
			fanTimer = 12;
			clickCount = 0;
		  	setTimeout(function(){
		  		video.setAttribute("src", insta_vid_list[videoIndex].url);
		  		video.load();
		  		video.muted = true;
		  		video2.setAttribute("src", insta_vid_list[videoIndex+1].url);
		  		video.load();
		  		video.muted = true;
		  		video3.setAttribute("src", "../images/ja_clips/jason_full_vid.mp4");
		  		video3.load();
		  	}, 5000)
		  }

		  end.click(function(){
		  	vInfo.fadeTo(2000, 1, function(){
				vInfo.delay(1000).fadeTo(2000, 0, function(){
					vInfo.delay(10000).css({display: 'none'});
				});
			});
				end.addClass('closed');
				video3.play();
				names.innerHTML = '';
				timer = setTimeout(checkAudioTime, 1000);
				clickCount++;
				cover.css({display: 'block'});
		  });

		}

	});