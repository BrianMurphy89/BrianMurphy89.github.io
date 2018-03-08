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
const faceCardEval = playerOneCardEval();
let drinkTime = Math.abs(randomlySelectedNum[randomlySelectedNum.length -1] - faceCardEval)


const deckCount = () => {
  if (cardArray.length == 0) {
    $playerOneFinal < $playerTwoFinal
    alert('Player One\'s score is ' + $playerOneFinal + ' and has beaten Player Two\'s score of ' + $playerTwoFinal + '!')
  } else if (cardArray.length == 0){
    $playerTwoFinal < $playerOneFinal
    alert('Player Two\'s score is ' + $playerTwoFinal + ' and has beaten Player One\'s score of ' + $playerOneFinal + '!')
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
  $playerTwo.hide()
  cardGenerator();
  })



const faceCardReturn = () => {
  if (randomlySelectedNum[randomlySelectedNum.length - 1] == 11) {
    return 'Jack';
  } else if (randomlySelectedNum[randomlySelectedNum.length - 1] == 12) {
    return 'Queen';
  } else if (randomlySelectedNum[randomlySelectedNum.length - 1] == 13) {
    return 'King';
  } else if (randomlySelectedNum[randomlySelectedNum.length - 1] == 14) {
    return 'Ace';
  } else {
    return (randomlySelectedNum[randomlySelectedNum.length - 1])
  }
}

const updateScore1 = () => {
  console.log($playerOneFinal);
  console.log(drinkTime);
  $('#playerOneCurrentScore').text($playerOneFinal)
}

const updateScore2 = () => {
  $('#playerTwoCurrentScore').text($playerTwoFinal)
}

const playerOneTurn = () => {
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
    alert('Your last guess was wrong! Your card was ' + faceCardReturn() + '. You need to drink for ' + drinkTime + ' seconds! Player Two, your turn.')
      $playerOneFinal += drinkTime;
      //write the code for the updated drinktime to show on webpage
      deckCount();
      $playerOne.hide();
      cardGenerator();
      console.log(randomlySelectedNum);
      $playerTwo.show();
      updateScore1();
      return $playerOneFinal;
    }
}

  $playerOneSubmit.on('click', () => {
    playerOneTurn();
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

  const playerTwoTurn = () => {
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
    alert('Your last guess was wrong! Your card was ' + faceCardReturn() + '. You need to drink for ' + drinkTime + ' seconds!')
      $playerTwoFinal += drinkTime;
      deckCount();
      $playerTwo.hide();
      cardGenerator();
      $playerOne.show();
      updateScore2();
      return $playerTwoFinal;
    }
  }

  $playerTwoSubmit.on('click', () => {
    playerTwoTurn();
  })
})
