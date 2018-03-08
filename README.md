# Higher-Lower
How to Play:
1. The dealer (computer) will random select a card from the deck of 52 cards.
2. Player One will guess what that card is. If they are correct, it will become Player Two's turn.
3. If Player One's first guess is wrong, the dealer will inform you if the card is actually higher or lower than your guess.
4. Player One will guess one more time based on the dealer's response. If you are correct, it becomes Player Two's turn.
5. If you are wrong, you will drink your beverage for the difference between your second guess and the card! It will then become Player Two's turn.
6. Player Two will repeat this process until it is Player One's turn.
7. The turns will go back and forth until the 52 cards are gone in the deck.
8. The winner of the game will be whoever has a LOWER overall score. (Although, some may think it is the other way around).


Link to site: https://brianmurphy89.github.io/

I primarily used if / else statements to evaluate player inputs and compare them to the randomly generated card. I also used a bit of jquery to update the score for the players to keep track of.

The approach I took was simple. I wanted to set an array with 52 cards and then randomize them for the players to guess at. To set an end game parameter, I made an empty array to push the random numbers into, while splicing the old numbers from the starting array. Once the starting array ran out of numbers, the game new it was over and to evaluate the score for a winner.

I wanted to add in a modale to give the players a comprehensive understanding of how the game worked.  Additionally, I wanted to add in images for the card that was drawn and at the end of the turn, it would display it for the players to view.
