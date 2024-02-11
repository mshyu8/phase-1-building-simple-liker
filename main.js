// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hiddenDiv = document.querySelector("#modal");
hiddenDiv.classList.add("hidden");

let hearts = document.querySelectorAll(".like-glyph");


function cb(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      alert(serverMessage);
      if(heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch(function(error) {
      hiddenDiv.classList.remove("hidden");
      alert(error);
      setTimeout(function() {
        hiddenDiv.classList.add("hidden");
      }, 3000)
    })
}

for(let heart of hearts) {
  heart.addEventListener("click", cb);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
