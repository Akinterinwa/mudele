document.getElementById('playIcon').addEventListener('click', function() {
    var audio = document.getElementById('pronunciationAudio');

    // Check if the audio is paused or ended before playing
    if (audio.paused || audio.ended) {
        // Toggle the controls attribute to ensure playback on iOS
        audio.controls = true;
        // Play the audio
        audio.play();
    } else {
        // Pause the audio if it's already playing
        audio.pause();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the hero section element
    const heroSection = document.getElementsByClassName('animation');
  
    // Add the 'intro' class to trigger the animation
    heroSection.classList.add('intro');
  });