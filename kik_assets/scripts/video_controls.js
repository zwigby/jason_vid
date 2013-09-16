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