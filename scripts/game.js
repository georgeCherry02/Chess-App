// Show where piece can move and set up move
function initiateMove(id) {
	// Remove previous highlights
	removeHighlights();
	// Determine Piece Type
	pieceInfo = determineType(id);
	// Change focused piece
	changeFocus(pieceInfo, id);
	// Determine if it's the correct turn
	if (focusPiece.colour == 'white' && (turn % 2 == 0)) {
		return false;
	} else if (focusPiece.colour == 'black' && (turn % 2 == 1)) {
		return false;
	}
	// Determine moveable tiles and whether it's taking
	availableMoves = focusPiece.availableMoves();
	// Highlight movable tiles
	highlightMoves(availableMoves);
}

function determineType(id) {
	var square = document.getElementById(id);
	if (square.innerHTML == "") {
		return false;
	}
	var piece = square.childNodes[0];
	var info = piece.classList;
	if (info.contains('highlight')) {
		return false;
	}
	// Determine colour
	if (info.contains('white')) {
		var colour = 'white';
	} else {
		var colour = 'black';
	}
	// Determine type of piece
	var type;
	pieces.forEach( function(x) {
		if (info.contains(x)) {
			type = x;
		}
	});
	return [colour, type];
}

function highlightMoves(moves) {
	moves[0].forEach( function(id) {
		highlight(id, 'move');
	});
	moves[1].forEach( function(id) {
		highlight(id, 'take');
	});
	if (moves[2] != null) {
		highlight(moves[2], 'castle');
	}
}

function highlight(pos, action) {
	if (action == 'move') {
		var colour = 'yellow';
	} else if (action == 'take') {
		var colour = 'red';
	} else {
		var colour = 'blue';
	}
	var square = document.getElementById(pos);
	var html = square.innerHTML;
	square.innerHTML = html += "<a onclick=\"movePiece('" + action + "', '" + pos + "')\" class='highlight' style='background-color: " + colour + ";'></a>";
}

function removeHighlights() {
	for (i = 1; i <= 8; i++) {
		coords.forEach( function(x) {
			var square = document.getElementById(x + i);
			var cc = square.childNodes;
			cc.forEach( function(elem) {
				if (elem != null) {
					var inf = elem.classList;
					if (inf.contains('highlight')) {
						square.removeChild(elem);
					}
				}
			});
		});
	}
}

function changeFocus(info, pos) {
	switch (info[1]) {
		case "pawn":
			focusPiece = new Pawn(info[0], pos);
			break;
		case "rook":
			focusPiece = new Rook(info[0], pos);
			break;
		case "knight":
			focusPiece = new Knight(info[0], pos);
			break;
		case "bishop":
			focusPiece = new Bishop(info[0], pos);
			break;
		case "queen":
			focusPiece = new Queen(info[0], pos);
			break;
		case "king":
			focusPiece = new King(info[0], pos);
			break;
	}
}
// Enable piece to move
function movePiece(action, pos) {
	removeHighlights();
	var colour = focusPiece.colour;
	var type = focusPiece.type;
	var oldPos = focusPiece.pos;
	switch (action) {
		case "move":
			createPiece(pos, colour, type);
			deletePiece(oldPos);
			break;
		case "take":
			var square = document.getElementById(pos);
			var piece = square.childNodes[0];
			if (piece.classList.contains('king')) {
				alert(colour + ' wins!');
			}
			deletePiece(pos);
			createPiece(pos, colour, type);
			deletePiece(oldPos);
			break;
		case "castle":
			// Delete King
			switch (colour) {
				case "black":
					deletePiece('e8');
					break;
				case "white":
					deletePiece('e1');
					break;
			}
			// Determine where new King should go
			var kingPos;
			switch (pos) {
				case "d1":
					kingPos = 'c1';
					break;
				case "f1":
					kingPos = 'g1';
					break;
				case "d8":
					kingPos = 'c8';
					break;
				case "f8":
					kingPos = 'g8';
					break;
			}
			// Create new Rook
			createPiece(pos, colour, type);
			// Delete old Rook
			deletePiece(oldPos);
			// Create new King
			createPiece(kingPos, colour, 'king');
			break;
	}
	turn++;
}

function deletePiece(position) {
	var square = document.getElementById(position);
	var piece = square.childNodes[0];
	if (piece.classList.contains('piece')) {
		square.removeChild(piece);
	}
}

function createPiece(position, colour, type) {
	var square = document.getElementById(position);
	square.innerHTML = "<a onclick='initiateMove(this.parentElement.id)' class='piece " + colour + " " + type + "'></a>"; 
}
