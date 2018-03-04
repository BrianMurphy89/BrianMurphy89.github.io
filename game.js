const jack = 11;
const queen = 12;
const king = 13;
const ace = 14;




const cardArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,jack,jack,jack,jack,queen,queen,queen,queen,king,king,king,king,ace,ace,ace,ace];
const randomlySelectedNum = [];

$(() => {

  /////////////Objectives/////////////////////
  //Need the deck to randomly produce 1 card
  //Then I need PlayerOne input area populate, submit a value
  //Based on their input, display a message that will say higher or lower than the value they input.
  //Display the PlayerOne input for them to guess again.
  //If they guess correctly, move turn to PlayerTwo
  //Else - subtract the difference from the card value and their 2nd guess.
  //Keep that subtracted value in a global variable.
  //Display PlayerTwo input and repeat the process.
  /////////////Objectives/////////////////////

const $button = $('#start');
const $playerOne = $('#playerOne');
const $playerTwo = $('#playerTwo');
const $playerOneInput = $('#playerOneInput');
const $playerOneSubmit = $('#playerOneSubmit');
const $randomizeNum = cardArray[Math.floor(Math.random() * cardArray.length)]
$button.on('click', () => {
  //Need something to display image of the back of a card
  $playerTwo.hide()
  randomlySelectedNum.push($randomizeNum)
  console.log(randomlySelectedNum);
  })

  $playerOneSubmit.on('click', () => {
  if ($playerOneInput.val() === randomlySelectedNum[0]) {
    alert('You are correct!');
    $playerOne.hide();
    $playerTwo.show();
  } else if ($playerOneInput.val() < randomlySelectedNum[0]) {
      alert('The card is higher! You have one more guess!')
  } else {
      alert('The card is lower! You have one more guess!')
    }
  })
})
