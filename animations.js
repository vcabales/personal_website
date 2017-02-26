//get the modals
var aboutMeModal = document.getElementById("aboutMe");
var resumeModal = document.getElementById("resume");
var codeModal = document.getElementById("code");
var writingModal = document.getElementById("writing");
var photoModal = document.getElementById("photo");
var modal = document.getElementsByClassName("modal");
var popup = document.getElementsByClassName("popover")[0];

// Get the button that opens the modal
var aboutMeBtn = document.getElementById("aboutButton");
var resumeBtn = document.getElementById("resumeButton");
var codeBtn = document.getElementById("codeButton");
var wrtngBtn = document.getElementById("writingButton");
var photoBtn = document.getElementById("photoButton");


var modal = document.getElementsByClassName("modal");

aboutMeBtn.onclick = function() {
	aboutMeModal.style.display = "block";
	popup.style.display = "none";
}

resumeBtn.onclick = function() {
  resumeModal.style.display = "block";
  popup.style.display = "none";
}

codeBtn.onclick = function() {
  codeModal.style.display = "block";
  popup.style.display = "none";
}

wrtngBtn.onclick = function() {
  writingModal.style.display = "block";
  popup.style.display = "none";
}

photoBtn.onclick = function() {
  photoModal.style.display = "block";
  popup.style.display = "none";
}
          
// Get the <span> element that closes the modal
var closeAbout = document.getElementById("closeAbout");
var closeResume = document.getElementById("closeResume");
var closeCode = document.getElementById("closeCode");
var closeWriting = document.getElementById("closeWriting");
var closePhoto = document.getElementById("closePhoto");

// When the user clicks on <span> (x), close the modal
closeAbout.onclick = function() {
	aboutMeModal.style.display = "none";
	popup.style.display = "block";
}

closeResume.onclick = function() {
  resumeModal.style.display = "none";
  popup.style.display = "block";
}

closeCode.onclick = function() {
  codeModal.style.display = "none";
  popup.style.display = "block";
}

closeWriting.onclick = function() {
  writingModal.style.display = "none";
  popup.style.display = "block";
}

closePhoto.onclick = function() {
  photoModal.style.display = "none";
  popup.style.display = "block";
}

//Add (esc button)


