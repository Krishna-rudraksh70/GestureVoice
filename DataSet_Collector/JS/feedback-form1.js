function addClass() {
  var nameInput = document.querySelector('input[name="name"]');
  var messageTextarea = document.querySelector('textarea[name="message"]');
  
  // Check if name and message fields are filled
  if (nameInput.value.trim() !== '' && messageTextarea.value.trim() !== '') {
    document.body.classList.add("sent");
    setTimeout(function() {
        document.body.classList.remove("sent");
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}

sendLetter.addEventListener("click", addClass);
