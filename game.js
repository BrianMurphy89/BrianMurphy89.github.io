const jack = 11;
const queen = 12;
const king = 13;
const ace = 14;

const cardArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,jack,jack,jack,jack,queen,queen,queen,queen,king,king,king,king,ace,ace,ace,ace];
const randomlySelectedNum = [];


$(() => {

const $button = $('#start');
const $playerOne = $('#playerOne');
const $playerTwo = $('#playerTwo');
const $playerOneInput = $('#playerOneInput');
const $playerOneSubmit = $('#playerOneSubmit');
const $playerTwoInput = $('#playerTwoInput');
const $playerTwoSubmit = $('#playerTwoSubmit');
let $secondGuess = false;
let $playerOneFinal = 0;
let $playerTwoFinal = 0;

const deckCount = () => {
  if (cardArray.length == 0) {
    alert('Game is over! Player One\'s final score was ' + $playerOneFinal + ' and Player Two\'s final score was ' + $playerTwoFinal + ' !');
  } else {
    return null;
  }
}
const cardGenerator = () => {
  let $randomizeNum = Math.floor(Math.random() * cardArray.length)
  console.log($randomizeNum);
  let cardNum = cardArray[$randomizeNum]
  randomlySelectedNum.push(cardNum)
  cardArray.splice($randomizeNum,1);
  $secondGuess = false;
}


$button.on('click', () => {
  //Need something to display image of the back of a card
  $playerTwo.hide()
  cardGenerator();
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
    console.log(randomlySelectedNum);
    console.log(randomlySelectedNum[randomlySelectedNum.length -1]);
  if (faceCardEval == randomlySelectedNum[randomlySelectedNum.length - 1]) {
    alert('You are correct!');
    deckCount();
    $playerOne.hide();
    cardGenerator();
    $playerTwo.show();
    alert('Player Two - You\'re Up!')
  } else if (faceCardEval < randomlySelectedNum[randomlySelectedNum.length -1] && $secondGuess == false) {
      alert('The card is higher! You have one more guess!')
      $secondGuess = true;
  } else if (faceCardEval > randomlySelectedNum[randomlySelectedNum.length -1] && $secondGuess == false){
      $secondGuess = true;
      alert('The card is lower! You have one more guess!')
  } else if ($secondGuess) {
    let drinkTime = Math.abs(randomlySelectedNum[randomlySelectedNum.length -1] - faceCardEval)
    alert('Your last guess was wrong! You need to drink for ' + drinkTime + ' seconds! Player Two, your turn.')
      $playerOneFinal += drinkTime;
      deckCount();
      $playerOne.hide();
      cardGenerator();
      console.log(randomlySelectedNum);
      $playerTwo.show();
      return $playerOneFinal;
  }
  })

  const playerTwoCardEval = () => {
    if(typeof($playerTwoInput.val()) === "number") {
      return $playerTwoInput.val();
    }  else if ($playerTwoInput.val().toLowerCase() == 'jack'){
      return 11;
    } else if ($playerTwoInput.val().toLowerCase() == 'queen') {
      return 12;
    } else if ($playerTwoInput.val().toLowerCase() == 'king') {
      return 13;
    } else if ($playerTwoInput.val().toLowerCase() == 'ace') {
      return 14;
    } else {
      return $playerTwoInput.val();
    }
  }

  $playerTwoSubmit.on('click', () => {
    const faceCardEval2 = playerTwoCardEval();
    console.log(randomlySelectedNum);
    console.log(randomlySelectedNum[randomlySelectedNum.length -1]);
  if (faceCardEval2 == randomlySelectedNum[randomlySelectedNum.length - 1]) {
    alert('You are correct!');
    deckCount();
    $playerTwo.hide();
    cardGenerator();
    $playerOne.show();
    alert('Player One - You\'re Up!')
  } else if (faceCardEval2 < randomlySelectedNum[randomlySelectedNum.length -1] && $secondGuess == false) {
      alert('The card is higher! You have one more guess!')
      $secondGuess = true;
  } else if (faceCardEval2 > randomlySelectedNum[randomlySelectedNum.length -1] && $secondGuess == false){
      $secondGuess = true;
      alert('The card is lower! You have one more guess!')
  } else if ($secondGuess) {
    let drinkTime = Math.abs(randomlySelectedNum[randomlySelectedNum.length -1] - faceCardEval2)
    alert('Your last guess was wrong! You need to drink for ' + drinkTime + ' seconds!')
      $playerTwoFinal += drinkTime;
      deckCount();
      $playerTwo.hide();
      cardGenerator();
      $playerOne.show();
      return $playerTwoFinal;
  }
  })
})
