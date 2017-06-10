// Find the sole video element
var vid = document.getElementsByTagName("video")[0];
var delta = 5; // skip 5 seconds when forwarding or rewinding..

// Listen for key down event
window.addEventListener("keydown", function(e) {
	// React on Left/Right arrow keys.
    if(e.keyCode == 37) {
		// Rewind
		vid.currentTime -= delta;
    } else if(e.keyCode == 39) {
		// Fast-forward
		vid.currentTime += delta;
	}
});