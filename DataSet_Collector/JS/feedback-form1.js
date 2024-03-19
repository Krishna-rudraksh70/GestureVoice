function addClass() {
  var nameInput = document.querySelector('input[name="name"]');
  var messageTextarea = document.querySelector('textarea[name="message"]');
  
  // Check if name and message fields are filled
  if (nameInput.value.trim() !== '' && messageTextarea.value.trim() !== '') {
    document.body.classList.add("sent");
    setTimeout(function() {
        document.body.classList.remove("sent");
        // Reset the form fields
        nameInput.value = '';
        messageTextarea.value = '';
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}

var sendLetter = document.getElementById("sendLetter");
sendLetter.addEventListener("click", addClass);
