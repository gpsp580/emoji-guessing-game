emojiGuess = [
    {
        emoji : "😀",
        description : "happy"
    },
    {
        emoji : "😛",
        description: "naughty"
    },
    {
        emoji : "😡",
        description: "angry"
    },
    {
        emoji : "🐒",
        description: "monkey"
    },
    {
        emoji : "🦄",
        description: "unicorn"
    }
]
let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;

const UpdateResult = document.getElementById("result");
const UpdateScore = document.getElementById("score");
const mainPhoto = document.getElementById("emojiContainer");
function mainPhotoApply() {
  if (currentEmojiIndex < emojiGuess.length) {
    mainPhoto.textContent = emojiGuess[currentEmojiIndex].emoji;
  } else {
    endGame();
  }
}
function checkGuess() {
  const userGuess = document.getElementById("guess-emoji").value.toLowerCase().trim();
  const correctAnswer = emojiGuess[currentEmojiIndex].description;

  if (userGuess === correctAnswer) {
   UpdateResult.textContent = "correct";
   score++;
  } 
  else{
 UpdateResult.textContent = "Wrong";
  }
  currentEmojiIndex++; 
  UpdateScore.textContent = `Score: ${score}`;
  document.getElementById("guess-emoji").value = '';

  mainPhotoApply();    
}

const btn = document.getElementById("NextButton");
btn.addEventListener("click", ButtonClick);
function ButtonClick(){
    checkGuess();
}

mainPhotoApply(); 

const AddTimer = document.getElementById("timer");
let timeInterval = setInterval(() => {
    seconds--;
    AddTimer.textContent = `Time : ${seconds}`
    if(seconds < 0){
    clearInterval(timeInterval);
    endGame();

}
}, 1000);

function endGame(){
    mainPhoto.textContent = '';
    mainPhoto.textContent = "🎉 Game Over!";
    UpdateResult.textContent = `Final Score: ${score}/5`;

}
