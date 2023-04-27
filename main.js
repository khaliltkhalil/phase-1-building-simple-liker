// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const heartButtonsCollection = document.querySelectorAll(".like-glyph");
heartButtonsCollection.forEach((node) => {
  node.addEventListener("click", handleClick);
});

function handleClick(e) {
  const heart = e.target;
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
      .then((res) => {
        heart.classList.add("activated-heart");
        heart.textContent = FULL_HEART;
      })
      .catch((err) => {
        const modal = document.querySelector("#modal");
        modal.className = "";
        modal.textContent = err;
        setTimeout(() => {
          modal.className = "hidden";
        }, 3000);
      });
  } else {
    heart.classList.remove("activated-heart");
    heart.textContent = EMPTY_HEART;
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
