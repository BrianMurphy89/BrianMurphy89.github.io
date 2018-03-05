const jack = 11;
const queen = 12;
const king = 13;
const ace = 14;




const cardArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,jack,jack,jack,jack,queen,queen,queen,queen,king,king,king,king,ace,ace,ace,ace];
const randomlySelectedNum = [];
const $randomizeNum = Math.floor(Math.random() * cardArray.length)


$(() => {

  /////////////Objectives/////////////////////
  //Need the deck to randomly produce 1 card - Done
  //Then I need PlayerOne input area populate, submit a value - Done
  //Based on their input, display a message that will say higher or lower than the value they input. - Done
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
$button.on('click', () => {
  //Need something to display image of the back of a card
  $playerTwo.hide()
  const cardNum = cardArray[$randomizeNum]
  randomlySelectedNum.push(cardNum)
  // console.log(cardNum);
  // console.log(randomlySelectedNum);
  })

const playerOneCardEval = () => {
  if(typeof($playerOneInput.val()) === "number") {
    return $playerOneInput.val();
  }  else if ($playerOneInput.val().toLowerCase() == 'jack'){
    return 11;
  } else if ($playerOneInput.val().toLowerCase() == 'queen') {
    return 12;
  } else if ($playerOneInput.val().toLowerCase() == 'king') {
    return 13;
  } else if ($playerOneInput.val().toLowerCase() == 'ace') {
    return 14;
  } else {
    return $playerOneInput.val();
  }
}

  $playerOneSubmit.on('click', () => {
    const faceCardEval = playerOneCardEval();
    console.log(faceCardEval);
    console.log(randomlySelectedNum);
    console.log(randomlySelectedNum[randomlySelectedNum.length -1]);
  if (faceCardEval == randomlySelectedNum[randomlySelectedNum.length - 1]) {
    alert('You are correct!');
    $playerOne.hide();
    $playerTwo.show();
  } else if (faceCardEval < randomlySelectedNum[randomlySelectedNum.length -1]) {
      alert('The card is higher! You have one more guess!')
  } else {
      alert('The card is lower! You have one more guess!')
    }
  })
})
