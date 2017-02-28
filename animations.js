//get the modals
var resumeModal = document.getElementById("resume");
var codeModal = document.getElementById("code");
var writingModal = document.getElementById("writing");
var photoModal = document.getElementById("photo");
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var resumeBtn = document.getElementById("resumeButton");
var codeBtn = document.getElementById("codeButton");
var wrtngBtn = document.getElementById("writingButton");
var photoBtn = document.getElementById("photoButton");

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
var closeResume = document.getElementById("closeResume");
var closeCode = document.getElementById("closeCode");
var closeWriting = document.getElementById("closeWriting");
var closePhoto = document.getElementById("closePhoto");

// When the user clicks on <span> (x), close the modal

closeResume.onclick = function() {
  resumeModal.style.display = "none";
}

closeCode.onclick = function() {
  codeModal.style.display = "none";
}

closeWriting.onclick = function() {
  writingModal.style.display = "none";
}

closePhoto.onclick = function() {
  photoModal.style.display = "none";
}

//Add (esc button)


