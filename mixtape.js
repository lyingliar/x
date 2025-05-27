var audioFiles = [
  {id: "1M5WbQ5p9N_SZ8ZtlVUjt5OZEuzvJKuWS", track: "Untitled 1", artist: "Anker Peet"},
  {id: "1UZ-96hBfmXTiXOMjwdKqkF4ZN_vxYBEt", track: "Untitled 2", artist: "Anker Peet"},
  {id: "1xYmZq4_z23RFdtdk__f3YXm7NiLG5jrC", track: "Untitled 3", artist: "Anker Peet"}
];

var fastForward = new Audio("https://drive.google.com/uc?id=1axFmmVFUFq9og0OxhZLmktI7ncgSR3B2");

var currentTrack = 0;
var audio = new Audio(`https://drive.google.com/uc?id=${audioFiles[currentTrack].id}`);
var playing = false;

function playTrack() {
  audio.play();
  playing = true;
  $(".wheel").addClass("spin1");
  $(".wheel-2").addClass("spin2");
}

function pauseTrack() {
  audio.pause();
  playing = false;
  $(".wheel").removeClass("spin1");
  $(".wheel-2").removeClass("spin2");
}

function loadAudioPlayer() {
  var label = `${audioFiles[currentTrack].track} - ${audioFiles[currentTrack].artist} - Track ${currentTrack + 1} of ${audioFiles.length}`;
  audio.src = `https://drive.google.com/uc?id=${audioFiles[currentTrack].id}`;
  if(playing) {
    fastForward.play();
    setTimeout(() => { audio.play(); }, 4250);    
  }
  $("#label").html(label);  
}

function changeTrack(val) {
  if(val + currentTrack >= audioFiles.length) {
    currentTrack = 0;
  }
  else if(val + currentTrack < 0) {
    currentTrack = audioFiles.length - 1;
  }
  else {
    currentTrack += val;  
  }  
  loadAudioPlayer();
}

loadAudioPlayer()