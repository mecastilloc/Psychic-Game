# Psychic-Game

[Live Demo](https://mecastilloc.github.io/Responsive-Portfolio/portfolio.html)
 
Logic made with Jquery

* There are four crystals displayed as buttons on the page.

   * The player will be shown a random TARGET number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game will hide this amount until the player clicks a crystal.
     * When they do click one, updates the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new TARGET random number. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end,  not refreshing the page as a means to restart the game.

##### Game design notes

* The TARGET random number shown at the start of the game is between 19 - 120.

* Each crystal has a random hidden value between 1 - 12.
