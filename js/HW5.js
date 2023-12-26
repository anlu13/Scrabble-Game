/*
  Name: Anson Lu
  Email: Anson_Lu@student.uml.edu
*/

// forces stricter JS syntax reading
"use strict";

var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;
var TEXT_COLOR_ACTIVE = "#339933";
var TEXT_COLOR_NORMAL = "";
var TEXT_COLOR_INVALID = "red";

// size of each tile, and margins
var TILE_WIDTH = 67 + 6,
	TILE_HEIGHT = 67 + 6,
	SLOT_MARGIN = 1,
	SLOT_BORDER_WIDTH = 1;

// array copied and modified from "pieces.json".
// "value" denotes the tile value
// "distribution" denotes how many tiles in total there are
// "remaining" denotes the remainder
// "image" attaches the respective image to the tile.
var scrabble_Tiles = [];
scrabble_Tiles["A"] = {value: 1, "original-distribution": 9, "number-remaining": 9, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"};
scrabble_Tiles["B"] = {value: 3, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"};
scrabble_Tiles["C"] = {value: 3, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"};
scrabble_Tiles["D"] = {value: 2, "original-distribution": 4, "number-remaining": 4, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg"};
scrabble_Tiles["E"] = {value: 1, "original-distribution": 12, "number-remaining": 12, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"};
scrabble_Tiles["F"] = {value: 4, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"};
scrabble_Tiles["G"] = {value: 2, "original-distribution": 3, "number-remaining": 3, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"};
scrabble_Tiles["H"] = {value: 4, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"};
scrabble_Tiles["I"] = {value: 1, "original-distribution": 9, "number-remaining": 9, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"};
scrabble_Tiles["J"] = {value: 8, "original-distribution": 1, "number-remaining": 1, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"};
scrabble_Tiles["K"] = {value: 5, "original-distribution": 1, "number-remaining": 1, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"};
scrabble_Tiles["L"] = {value: 1, "original-distribution": 4, "number-remaining": 4, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"};
scrabble_Tiles["M"] = {value: 3, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"};
scrabble_Tiles["N"] = {value: 1, "original-distribution": 6, "number-remaining": 6, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"};
scrabble_Tiles["O"] = {value: 1, "original-distribution": 8, "number-remaining": 8, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"};
scrabble_Tiles["P"] = {value: 3, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"};
scrabble_Tiles["Q"] = {value: 10, "original-distribution": 1, "number-remaining": 1, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"};
scrabble_Tiles["R"] = {value: 1, "original-distribution": 6, "number-remaining": 6, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"};
scrabble_Tiles["S"] = {value: 1, "original-distribution": 4, "number-remaining": 4, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"};
scrabble_Tiles["T"] = {value: 1, "original-distribution": 6, "number-remaining": 6, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"};
scrabble_Tiles["U"] = {value: 1, "original-distribution": 4, "number-remaining": 4, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"};
scrabble_Tiles["V"] = {value: 4, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"};
scrabble_Tiles["W"] = {value: 4, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"};
scrabble_Tiles["X"] = {value: 8, "original-distribution": 1, "number-remaining": 1, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"};
scrabble_Tiles["Y"] = {value: 4, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"};
scrabble_Tiles["Z"] = {value: 10, "original-distribution": 1, "number-remaining": 1, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"};
scrabble_Tiles["_"] = {value: 0, "original-distribution": 2, "number-remaining": 2, image: "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};

// creates the scrabble board, using a 2D array.
// "letter_Multiplier" denotes the "Double Letter Score" squares
// "word_Multiplier" denotes the "Double Word Score" squares
// "image" attaches the respective image to the square.
var scrabble_Board = {};
scrabble_Board.slots = [];
scrabble_Board.slots[0] = [];
scrabble_Board.slots[0][0] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][1] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][2] = {letter_Multiplier: 1, word_Multiplier: 2, image: "graphics_data/Scrabble_Spaces/double_word_space.png"};
scrabble_Board.slots[0][3] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][4] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][5] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][6] = {letter_Multiplier: 2, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/double_letter_space.png"};
scrabble_Board.slots[0][7] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][8] = {letter_Multiplier: 2, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/double_letter_space.png"};
scrabble_Board.slots[0][9] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][10] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][11] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][12] = {letter_Multiplier: 1, word_Multiplier: 2, image: "graphics_data/Scrabble_Spaces/double_word_space.png"};
scrabble_Board.slots[0][13] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};
scrabble_Board.slots[0][14] = {letter_Multiplier: 1, word_Multiplier: 1, image: "graphics_data/Scrabble_Spaces/blank_space.png"};

// get row and col counts of the board
scrabble_Board.rowCount = Object.keys(scrabble_Board.slots).length;
scrabble_Board.columnCount = Object.keys(scrabble_Board.slots[0]).length;

// global variable to track current round's score
var scrabble_Score = {total_Score: 0, highest_Score: 0};

// calculate and return the board score: the for the tiles currently on the board.
scrabble_Score.calculate_Board_Score = function () {
	var row,
		col,
		letter,
		letter_Value,
		word_Multiplier = 1,
		board_Score = 0;

	// if not a word, return 0
	if (!validate_Word()) {
		return 0;
	}

	// loop through the scrabble board
	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			// get a letter
			letter = scrabble_Board.slots[row][col].letter;
			// if a letter exists (ie not a NULL empty space)
			if (letter) {
				// get letter value
				letter_Value = scrabble_Tiles[letter].value;
				// add the letter value (and any letter multiplier) to the board score sum
				board_Score += letter_Value * scrabble_Board.slots[row][col].letter_Multiplier;
				// get word multiplier
				word_Multiplier *= scrabble_Board.slots[row][col].word_Multiplier;
			}
		}
	}

	// Apply the word modifier.
	board_Score *= word_Multiplier;

	// return board score
	return board_Score;
};

// refresh the scoreboard: update the text values based on the current tiles layout
scrabble_Score.refresh = function () {
	// get the current board score
	var board_Score = scrabble_Score.calculate_Board_Score();

	// set text color to default color
	$("#score").css("color", TEXT_COLOR_NORMAL);
	// display current board total score
	$("#score").html(scrabble_Score.total_Score + " (+<span id='board_Score'>" + board_Score + "</span>)");
	// if board score is > 0
	if (board_Score > 0) {
		// show score
		$("#board_Score").css("color", TEXT_COLOR_ACTIVE);
	} else {
		// do not show score
		$("#board_Score").css("color", TEXT_COLOR_INVALID);
	}
	// display highest score
	$("#highest_Score").html(scrabble_Score.highest_Score);
};

// value updates after "Enter Word" button is pressed
// update the total score, highest score based on the current tiles layout
scrabble_Score.commit = function () {
	// get the current board score
	var board_Score = scrabble_Score.calculate_Board_Score();

	// update the total score
	scrabble_Score.total_Score += board_Score;
	// display total score
	$("#score").html(scrabble_Score.total_Score);
	// if score > 0
	if (scrabble_Score.total_Score > 0) {
		// then show new total score
		$("#score").css("color", TEXT_COLOR_ACTIVE);
	}

	// if the current total score is > the highest score
	if (scrabble_Score.total_Score > scrabble_Score.highest_Score) {
		// replace the highest score with the current total score
		scrabble_Score.highest_Score = scrabble_Score.total_Score;
		// show new highest score
		$("#highest_Score").html(scrabble_Score.total_Score);
		// make new highest score visible
		$("#highest_Score").css("color", TEXT_COLOR_ACTIVE);
	}
};

// reset score to 0 and update the page
scrabble_Score.restart = function () {
	// reset current total score to 0
	scrabble_Score.total_Score = 0;
	// display current score of 0
	$("#score").html(0);
	// reset textcolor
	$("#highest_Score").css("color", TEXT_COLOR_NORMAL);
};

// create the scrabble board
scrabble_Board.create_Board_HTML = function () {
	var row, col, board_Image_Path, new_Slot;

	// set fixed height for board (ie the height of each tile * number of tiles height-wise)
	$("#board").css("height", (TILE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabble_Board.rowCount);
	// set fixed width for board (ie the width of each tile * number of tiles width-wise)
	$("#board").css("width", (TILE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabble_Board.columnCount);

	// set down the board images
	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			// get image path via scrabble_Board array
			board_Image_Path = scrabble_Board.slots[row][col].image;
			// create new tile slot, apply background image
			new_Slot = $('<div class="board_Slot" row="' + row + '" col="' + col + '" style="background-image: url(' + board_Image_Path + ')" />');
			// put new tile slot onto board
			$("#board").append(new_Slot);
			// set the size for new tile slot
			new_Slot.css({width: TILE_WIDTH, height: TILE_HEIGHT, margin: SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH});
		}
	}
};

// clear scrabble board: remove all tiles from board, update board slots
scrabble_Board.clear_Board = function () {
	var row, col;

	// remove all board image
	$("#board img").remove();

	// traverse through scrabble board
	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			// delete tile ID
			delete scrabble_Board.slots[row][col].tileId;
			// delete the letter
			delete scrabble_Board.slots[row][col].letter;
		}
	}
};

// return id of the tile in a given (row, col) slot
scrabble_Board.get_Tile_ID_From_Slot = function (row, col) {
	return scrabble_Board.slots[row][col].tileId;
};

// return letter of the tile in a given (row, col) slot
scrabble_Board.get_Letter_From_Slot = function (row, col) {
	return scrabble_Board.slots[row][col].letter;
};

// Returns true if the slot is marked as empty. False, otherwise.
scrabble_Board.is_Slot_Empty = function (row, col) {
	return typeof scrabble_Board.slots[row][col].tileId === "undefined";
};

// add a tile ID to slot in board. Update the board slot so the slot at (row, col) contains the given tile id.
scrabble_Board.add_To_Slot = function (tile_ID, letter, input_row, input_col) {
	var row, col;

	// if tile came from another slot, clear the previous slot
	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			if (scrabble_Board.slots[row][col].tileId === tile_ID) {
				delete scrabble_Board.slots[row][col].tileId;
				delete scrabble_Board.slots[row][col].letter;
			}
		}
	}

	// insert tile into current slot
	scrabble_Board.slots[input_row][input_col].letter = letter;
	scrabble_Board.slots[input_row][input_col].tileId = tile_ID;
};

// delete (row, col) tile from its slot
scrabble_Board.delete_From_Slot = function (row, col) {
	delete scrabble_Board.slots[row][col].tileId;
	delete scrabble_Board.slots[row][col].letter;
};

// returns (row, col) of the tile on the board
scrabble_Board.find_Slot_From_Tile_ID = function (tile_ID) {
	var row, col;

	// traverse through board
	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			// if a board tile == then input tile_ID
			if (scrabble_Board.slots[row][col].tileId === tile_ID) {
				// return (row, col) location of tile
				return [row, col];
			}
		}
	}
	// slot empty, returns false
	return false;
};

// print the board
scrabble_Board.print_Board = function () {
	var row, col;

	for (row = 0; row < scrabble_Board.rowCount; ++row) {
		for (col = 0; col < scrabble_Board.columnCount; ++col) {
			console.log("scrabbleBoard.slots[" + row + "][" + col + "] letter: " + scrabble_Board.slots[row][col].letter + ", tileId: " + scrabble_Board.slots[row][col].tileId);
		}
	}
};
var print_Board = scrabble_Board.print_Board;

// If there are not enough tiles in the deck to meet the request, then returns all remaining tiles.
// If the deck is already empty, returns an empty array.

// remove n number of random letter tiles from "Remaining Tiles" Returns array of individual strings
// if remaining tiles < need tiles, return the rest of the remaining tiles.
// If remaining tiles is empty (< 0), return empty array
function get_From_Deck(n) {
	// array for current hand tiles
	var hand = [];
	// array for all remaining tiles
	var all_Tiles = [];

	// fill array for all remaining tiles
	for (var key in scrabble_Tiles) {
		if (scrabble_Tiles.hasOwnProperty(key)) {
			var remaining = scrabble_Tiles[key]["number-remaining"];
			for (var i = 0; i < remaining; ++i) {
				all_Tiles.push(key);
			}
		}
	}

	// get n number of random letter tiles
	// if < n number tiles remaining, then get whatever tiles remaining.
	for (var i = 0; i < n; ++i) {
		if (all_Tiles.length) {
			var random_Index = get_Random_Int(0, Object.keys(all_Tiles).length - 1);
			var random_Letter = all_Tiles[random_Index];
			hand.push(random_Letter);
			--scrabble_Tiles[random_Letter]["number-remaining"];
			all_Tiles.splice(random_Index, 1); // Removes one element from the array.
			// console.log("Handing out " + randomLetter + ". Remaining: " + scrabbleTiles[randomLetter]["number-remaining"] + ". Available: " + allTiles + ".");
		}
	}

	// update number of remaining_Tiles value
	$("#remaining_Tiles").html(all_Tiles.length);

	// return hand array
	return hand;
}

// returns total number of tiles remaining in deck
function num_Tiles_In_Deck() {
	var num_Total_Tiles = 0;

	for (var key in scrabble_Tiles) {
		if (scrabble_Tiles.hasOwnProperty(key)) {
			num_Total_Tiles += scrabble_Tiles[key]["number-remaining"];
		}
	}

	return num_Total_Tiles;
}

// return number of tiles currently on the rack
function num_Tiles_On_Rack() {
	return $("#letter_Rack img").length;
}

// handles functionality of "Enter Word"
function toggle_Finish_Button(to_Finish_Button) {
	var next_Word_Button = document.getElementById("next_Word_Button");
	if (to_Finish_Button) {
		next_Word_Button.innerHTML = "Finish";
		next_Word_Button.onclick = function (event) {
			finish();
		};
	} else {
		next_Word_Button.innerHTML = "Enter Word";
		next_Word_Button.onclick = function (event) {
			next_Word();
		};
	}
}

// resets board and tiles
function restart() {
	// clear letter rack
	$("#letter_Rack img").remove();

	// remove all tiles from board
	scrabble_Board.clear_Board();

	// reset tile deck
	for (var key in scrabble_Tiles) {
		if (scrabble_Tiles.hasOwnProperty(key)) {
			scrabble_Tiles[key]["number-remaining"] = scrabble_Tiles[key]["original-distribution"];
		}
	}

	// reset "Enter Word" button
	toggle_Finish_Button(false);

	// reset score
	scrabble_Score.restart();

	// start the next word
	next_Word();
}

// Adds up the score. Removes all tiles from the board and adds to the rack whatever number of
// new tiles needed.

// finishes previosu word, start the next word
function next_Word() {
	var i, key, tile_Image_ID, new_Tile, hand;

	// enter button
	scrabble_Score.commit();

	// clear board
	scrabble_Board.clear_Board();

	// refill rack with 7 tiles (lay out tile images)
	hand = get_From_Deck(7 - num_Tiles_On_Rack());

	// traverse through hand
	for (i = 0; i < hand.length; ++i) {
		// each individual tile
		key = hand[i];
		tile_Image_ID = generate_Tile_ID();
		new_Tile = $('<img id="' + tile_Image_ID + '" src="' + scrabble_Tiles[key]["image"] + '" class="letter_Tile" letter="' + key + '" />');
		if (key == "_") {
			new_Tile.addClass("blankTile");
		}
		// Add tile image.
		$("#letter_Rack").append(new_Tile);

		// add tile to "letter_Tile_On_Rack" class
		// adjustment to tile images to make them sit naturally on the rack background image
		new_Tile.addClass("letter_Tile_On_Rack");

		// make tile draggable.
		new_Tile.draggable({
			revertDuration: 200, // wait for 200 milliseconds
			start: function (event, ui) {
				// tile should be on top of everything else when being dragged.
				$(this).css("z-index", Z_INDEX_TILE_ON_DRAG);

				// revert option needs to be manually reset because it may be modified by droppables
				// to force reverting after dropping has occured.
				$(this).draggable("option", "revert", "invalid");
			},
			stop: function () {
				// once finished dragging, revert the z-index.
				$(this).css("z-index", "");
			},
		});
	}

	// clear current word display
	$("#word").html("");

	// if no more tiles in "Remaining Tiles"
	if (num_Tiles_In_Deck() == 0) {
		toggle_Finish_Button(true);
		// disable "Enter Word" button
		document.getElementById("next_Word_Button").disabled = false;
	} else {
		// disable "Enter Word" button until at least a letter is on board
		document.getElementById("next_Word_Button").disabled = true;
	}
}

//  stops play, add up current board score to the total score
function finish() {
	// enter word
	scrabble_Score.commit();

	// disable "Enter Word" button
	document.getElementById("next_Word_Button").disabled = true;

	// prevent tiles from being dragged any more
	$(".letter_Tile").draggable("disable");
}

// generate unique string Tile ID
function generate_Tile_ID() {
	var ID;

	generate_Tile_ID.id = ++generate_Tile_ID.id || 1;
	ID = "tile" + generate_Tile_ID.id.toString();

	return ID;
}

// return random integer between min and max (inclusive)
function get_Random_Int(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reads and checks if there are letters on board
// returns the word, or false for no word
function validate_Word() {
	var row = 0,
		col,
		letter,
		error_Count,
		word = "";

	// traverse through board
	for (col = 0; col < scrabble_Board.columnCount; ++col) {
		// read each letter from the board
		letter = scrabble_Board.get_Letter_From_Slot(row, col);
		if (typeof letter === "undefined") {
			// special character used to represent an empty slot
			word += "\xB7"; // middle dot character
		} else {
			// append letter to word string
			word += letter;
		}
	}

	// remove leading and trailing empty slot characters (for word placed in middle of board)
	word = word.replace(/^\xB7+/, "");
	word = word.replace(/\xB7+$/, "");

	// append word to web page
	$("#word").html(word);

	// check for errors in the word
	error_Count = 0;

	$("#word").css("color", TEXT_COLOR_ACTIVE);
	document.getElementById("next_Word_Button").disabled = false;
	return word;
}

// make jQuery object grayscale and semi-transparent
function grayscale_And_Fade(jQuery_Object, yes) {
	if (yes) {
		jQuery_Object.css({
			"-webkit-filter": "grayscale(100%)",
			"-moz-filter": "grayscale(100%)",
			"-o-filter": "grayscale(100%)",
			"-ms-filter": "grayscale(100%)",
			filter: "grayscale(100%)",
			opacity: 0.2,
		});
	} else {
		jQuery_Object.css({
			"-webkit-filter": "",
			"-moz-filter": "",
			"-o-filter": "",
			"-ms-filter": "",
			filter: "",
			opacity: 1.0,
		});
	}
}

// opens up pop-up (dialog) box when blank tile for "pick-a-letter" tile is played
// selected letter replaces blank tile
function open_Blank_Tile_Dialog(blank_Tile_Draggable, tile_ID, input_row, input_col) {
	var tile_Selector_Dialog = $("<div id='blankTileDialog'></div>");
	var letter_Key, new_Tile;

	// for each letter in Remaining Tiles
	for (letter_Key in scrabble_Tiles) {
		if (letter_Key != "_") {
			// add each tile image into the box
			new_Tile = $("<img src='" + scrabble_Tiles[letter_Key]["image"] + "' class='letter_Tile_In_Dialog' letter='" + letter_Key + "'>");

			// when user clicks on a tile
			new_Tile.click(function () {
				var newLetter = $(this).attr("letter");

				// replace blank tile with letter attribute and  image source
				blank_Tile_Draggable.attr("letter", newLetter);
				blank_Tile_Draggable.attr("src", scrabble_Tiles[newLetter]["image"]);

				// update board
				tile_ID = blank_Tile_Draggable.attr("id");
				scrabble_Board.add_To_Slot(tile_ID, newLetter, input_row, input_col);

				// validate and display word
				validate_Word();

				// refresh board to update score
				scrabble_Score.refresh();

				// close blank tile box
				tile_Selector_Dialog.dialog("close");
			});
			tile_Selector_Dialog.append(new_Tile);
		}
	}
	tile_Selector_Dialog.css("z-index", Z_INDEX_DIALOG);
	tile_Selector_Dialog.dialog({
		modal: true,
		draggable: false,
		resizable: false,
	});
}

// create and load everything into the window
$(window).load(function () {
	var row, col;

	// create the scrabble board
	scrabble_Board.create_Board_HTML();

	// make board slots droppable.
	$(".board_Slot").droppable({
		// determines which slot gets highlighted as the acceptable dropping zone(s) when a tile is being dragged
		accept: function (draggable) {
			row = $(this).attr("row");
			col = $(this).attr("col");

			if (scrabble_Board.get_Tile_ID_From_Slot(row, col) === draggable.attr("id")) {
				// tile returns to original slot
				return true;
			} else if (scrabble_Board.is_Slot_Empty(row, col)) {
				// slot is empty, can place tile into slot
				return true;
			} else {
				// slot is already occupied, can't place tile into slot
				return false;
			}
		},
		activeClass: "drag_Highlight",
		hoverClass: "hover_Highlight",
		drop: function (event, ui) {
			var row, col, letter, tile_ID, previous_Position_On_Board;

			ui.draggable.removeClass("letter_Tile_On_Rack");
			ui.draggable.addClass("letter_Tile_On_Board");

			row = $(this).attr("row");
			col = $(this).attr("col");

			letter = ui.draggable.attr("letter");
			tile_ID = ui.draggable.attr("id");

			// make dropped tile snap to board image
			$(ui.draggable).css("top", "");
			$(ui.draggable).css("left", "");
			$(this).append(ui.draggable);

			console.log("Dropped " + letter + " (" + tile_ID + ") on (" + row + ", " + col + ").");

			// keep track of tile's previous position
			previous_Position_On_Board = scrabble_Board.find_Slot_From_Tile_ID(tile_ID);

			// if blank tile placed on board
			if ($(ui.draggable).hasClass("blankTile") && !previous_Position_On_Board) {
				// call open_Blank_Tile_Dialog
				open_Blank_Tile_Dialog($(ui.draggable), tile_ID, row, col);
			} else {
				// add tile to slot
				scrabble_Board.add_To_Slot(tile_ID, letter, row, col);
				// validate and display current word
				validate_Word();

				// calculate score, update page
				scrabble_Score.refresh();
			}
		},
	});

	// make letter rack droppable
	$("#letter_Rack").droppable({
		activeClass: "drag_Highlight",
		hoverClass: "hover_Highlight",
		tolerance: "touch",
		drop: function (event, ui) {
			var tile_ID, word, position;

			ui.draggable.removeClass("letter_Tile_On_Board");
			ui.draggable.addClass("letter_Tile_On_Rack");

			// when blank tile returns to rack, change its image back to blank tile image.
			if ($(ui.draggable).hasClass("blankTile")) {
				$(ui.draggable).attr("src", scrabble_Tiles["_"]["image"]);
			}

			tile_ID = ui.draggable.attr("id");
			position = scrabble_Board.find_Slot_From_Tile_ID(tile_ID);
			if (position) {
				// if tile goes to rack from the board, remove from board data structure.
				scrabble_Board.delete_From_Slot(position[0], position[1]);

				// snap tile image to back of rack
				$("#letter_Rack").append(ui.draggable);
				ui.draggable.css({position: "relative", top: "", left: ""});

				// validate and display current word
				word = validate_Word();

				// calculate score, update page
				scrabble_Score.refresh();
			} else {
				// User grabbed tile, and returned it back to rack
				ui.draggable.draggable("option", "revert", true);
			}
		},
	});

	// reset board and tiles, start next_Word()
	restart();
});
