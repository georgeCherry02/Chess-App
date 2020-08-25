function genBoard() {
	genBasicBoard();
	placeInitPieces();
}

function resetBoard() {
	var board = document.getElementById('board');
	board.innerHTML = "";
	genBoard();
}

function genBasicBoard() {
	var board = document.getElementById('board');
	var boardHTML = "";
	for (i = 8; i >= 1; i--) {
		boardHTML += "<div class='row' id='row" + i + "'>"
		if (i % 2 == 0) {
			var start = 0;
		} else {
			var start = 1;
		}
		coords.forEach( function(x) {
			boardHTML += "<div class='"
			if (start == 0) {
				boardHTML += "white";
			} else {
				boardHTML += "black";
			}
			start = 1 - start;
			boardHTML += " square' id='" + x + i +"'></div>";
		});
		boardHTML += "</div>";
	}
	board.innerHTML = boardHTML;
}

function placeInitPieces() {
	genPawns();
	genBackRow();
}

function genPawns() {
	for (i = 2; i < 8; i += 5) {
		if (i == 2) {
			var type = 'white';
		} else {
			var type = 'black';
		}
		coords.forEach( function(x) {
			var square = document.getElementById(x + i);
			square.innerHTML = "<a onclick='initiateMove(this.parentElement.id)' class='piece " + type + " pawn'></a>";
		});
	}
}

function genBackRow() {
	for (i = 1; i <= 8 ; i += 7) {
		if (i == 1) {
			var type = 'white';
		} else {
			var type = 'black';
		}
		coords.forEach( function (x) {
			var specCoords = [x, i];
			placePiece(specCoords, type);
		});
	}
}

function placePiece(position, type) {
	var square = document.getElementById(position[0] + position[1]);
	var html = "<a onclick='initiateMove(this.parentElement.id)' class='piece " + type + " ";
	switch(position[0]) {
		case "a":
		case "h":
			html += "rook";
			break;
		case "b":
		case "g":
			html += "knight";
			break;
		case "c":
		case "f":
			html += "bishop";
			break;
		case "d":
			html += "queen";
			break;
		case "e":
			html += "king";
			break;
	}
	html += "'></a>";
	square.innerHTML = html;
}
