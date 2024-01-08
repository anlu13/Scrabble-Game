Demo: https://anlu13.github.io/Scrabble-Game/

Repo: https://github.com/anlu13/Scrabble-Game


Simple Scrabble Game:

Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board, in order to create words [Wikipedia - Scrabble](https://en.wikipedia.org/wiki/Scrabble").

Simple Scrabble is a simplified version. Our board consists of 1 row, 15 tile cells, featuring 4 special tiles: 2 "double letter score" and 2 "double word score" squares. 

Double letter score will multiple the letter tile placed on top by 2. Double word score will multiply the total word score by 2. Bonus squares work individually. Should both tiles be used within a single word, the double letter score will apply first, then the double word score applied at the end. 


A score board section, featuring:
- The "Word" shows the current word, recognized by the program.
- The "Score" displaying the current score the player has achieved in the current round, as well as the potential score of the current word. 
- The "Remaining Tiles" total is taken from the Scrabble's official letter tile distribution. As words are submitted, tiles to replace those used are randomly pulled from the Remaining Tiles, the number of tiles pulled is subtracted from the total. 
- The "Highest Score" displays the highest score achieved of all rounds of the playing session. This value is saved and held within the program. 


A button section:
- "Enter Word" submits the current played word, updating the scoreboard and replacing the player's hand with new letters. Button is grayed out when no letter(s) are played to the board, and/or if the current word is not detected to be a valid word within the internal dictionary.
- "New Round" ends the current round and starts a new round, resetting the scoreboard and replacing the player's entire hand with new letters. Also, saves the highest score if applicable. 


The player's hand of letters:
- The provided letter rack png is used as the background image. Tiles sit neatly on the rack.
- Draggable tiles that snap to valid droppable locations on the page. Valid droppable location are highlighted green. With the current droppable location highlighted blue.
- Tiles can be dragged from the rack to the board, from the board to a different place on the board, from the board back to the rack. 
- After tiles are played and word is submitted, the player's hand is only replaced with all played letters (a maximum of 7 letters replaced).


Sources:
- Buttons style (button, hover, active) taken from: http://www.bestcssbuttongenerator.com/#/28
