function Pawn(colour, pos) {
	this.type = 'pawn';
	this.colour = colour;
	this.pos = pos;
	this.availableMoves = function() {
		var basicMoves = [];
		var takes = []
		var x = pos.charAt(0);
		var y = parseInt(pos.charAt(1));
		switch(colour) {
			case "white":
				var colourVal = [y+1, 2];
				break;
			case "black":
				var colourVal = [y-1, 7]; 
				break;
		}
		// Basic Moves
		if (colourVal[1] == 2 && y == 2) {
			basicMoves.push(x + 3);
			basicMoves.push(x + 4);
		} else if (colourVal[1] == 7 && y == 7) {
			basicMoves.push(x + 6);
			basicMoves.push(x + 5);
		} else {
			basicMoves.push(x + colourVal[0]);
		}
		// Check if can take
		for (i = -1; i <= 1; i += 2) {
			if (x == 'a' && i == -1) {
				continue;
			} else if (x == 'h' && i == 1) {
				continue;
			}
			id = edChar(x, i) + colourVal[0];
			info = determineType(id); 
			if (info != false) {
				if (info[0] != colour) {
					takes.push(id);
				}
			}
		}
		// Make sure there's nothing there
		var delAll = false;
		var delOne = false;
		for (i = 0; i < basicMoves.length; i++) {
			if (determineType(basicMoves[i]) != false) {
				if (i == 0) {
					delAll = true;
				} else if (i == 1) {
					delOne = true;
				}
			}
		}
		if (delAll) {
			basicMoves = [];
		} else if (delOne) {
			basicMoves.pop();
		}
		return [basicMoves, takes];
	}
}
