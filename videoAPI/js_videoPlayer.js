/******
*
* $Id: js_videoPlayer.js 1084 2010-12-05 16:25:12Z klaus $
* JS-code for the HTML5 video player
*
******/

// preset globals
var video, pButton, curTime, curPos, mm, ss, arr, curVol;

/* prepare player oncanplay */
var initControls = function() {
  // store reference to video
  video = document.querySelector("VIDEO");

  // store reference to play button
  pButton = document.getElementById("playButton");

  // store reference to time display and set initial value
  curTime = document.getElementById("timePlayed");
  curTime.innerHTML = '0:00';

  // store reference to time-display and set max value
  curPos = document.getElementById("currentPosition");
  curPos.max = video.duration;

  // store reference to volume button and set volume to 100%
  curVol = document.getElementById("currentVolume");
  curVol.innerHTML = "100%";
  video.volume = 1;

  // set current video name in credits
  arr = video.currentSrc.split("/");
  document.getElementById("currentSrc").innerHTML = arr[arr.length-1];
};

/* play or pause */
var _play = function() {
  video.play();
  pButton.value = String.fromCharCode('0x25AE','0x25AE');
};
var _pause = function() {
  video.pause();
  pButton.value = String.fromCharCode('0x25B6');
};
var playPause = function() {
  if (video.paused) {
    _play();
  }
  else {
    _pause();
  }
};

/* set or update playback position */
var updateProgress = function(ctrl) {
  if (ctrl) {
    // set new video position from slider
    video.currentTime = ctrl.value;
  }
  else {
    // set slider from current playback position
    curPos.value = video.currentTime;
  }

  // update display of time elapsed
  mm = Math.floor(video.currentTime / 60.0);
  ss = parseInt(video.currentTime) % 60;
  ss = (ss < 10) ? '0'+ss : ss;
  curTime.innerHTML = mm+':'+ss;

};

/* fast forward or backward */
var fastFwdBwd = function(direct) {
  _pause();
  _play();
  if (direct) {
    video.playbackRate = 5.0 * direct;
  }
};

/* play selected scene */
var selectScene = function(ctrl) {
  arr = ctrl.value.split(":");
  video.currentTime = parseFloat((arr[0]*60)+(arr[1]*1));
  updateProgress();
  _play();
};

/* control audio volume */
var adjustVolume = function(ctrl) {
  video.volume = ctrl.value;
  curVol.innerHTML = (Math.round(ctrl.value*100))+'%';
};
var mute = function(ctrl) {
  if (video.muted) {
    video.muted = false;
    ctrl.style.color = 'black';
  }
  else {
    video.muted = true;
    ctrl.style.color = 'silver';
  }
};
