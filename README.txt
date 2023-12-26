Website: https://anlu13.github.io/COMP.4610---HW5/

Repo: https://github.com/anlu13/COMP.4610---HW5


Write-up:

Project features a single-line of Scrabble board with two bonus squares, matching the required one-line example.
- Bonus squares work individually. Order of operations is empty/regular space first, double letter score second, double word score last.


A score board section, featuring:
- The current word, recognized by the program.
- The score of the current round (+ the score of the current word).
- The number of remaining tiles from the bag/deck. Initial number is sum of all the tile's original distribution amounts. 
- The highest score achieved across all rounds of the playing session.


A button section:
- "Enter Word" submits the current played word, updating the score board and replacing the player's hand with new letters. Button is grayed out when no letter(s) are played to the board.
- "New Round" ends the current round and starts a new round, reseting the score board and replacing the player's entire hand with new letters. 


The player's hand of letters:
- The provided letter rack png is used as the background image. Tiles sit neatly on the rack.
- Draggable tiles that snap to valid droppable locations on the page. Valid droppable location are highlighted green. With the current droppable location highlighted blue.
- Tiles can be dragged from the rack to the board, from the board to a different place on the board, from the board back to the rack. 
- After tiles are played and word is submitted, the player's hand is only replaced with a maximum of 7 letters


Current Issues:
- My project features no way to check if a word is a valid English word. Currently, any variation of input can be submitted as a "valid" word, despite not being valid according to the Scrabble words. Examples such as: inputs of non-English words, single letter inputs, or input with space(s). 


Sources:
- Buttons style (button, hover, active) taken from: http://www.bestcssbuttongenerator.com/#/28
