function Rook(colour, pos) {
	this.type = 'rook';
	this.colour = colour;
	this.pos = pos;
	this.availableMoves = function() {
		var x = pos.charAt(0);
		var y = parseInt(pos.charAt(1));
		var moves = [];
		var takes = [];
		var castle;
		var tempPos;
		for (i = y+1; i <= 8; i++) {
			tempPos = x + i;
			var info = determineType(tempPos);
			if (info == false) {
				moves.push(tempPos);
			} else if (info[0] != colour) {
				takes.push(tempPos);
				break;
			} else {
				break;
			}
		}
		for (i = y-1; i > 0; i--) {
			tempPos = x + i;
			var info = determineType(tempPos);
			if (info == false) {
				moves.push(tempPos);
			} else if (info[0] != colour) {
				takes.push(tempPos);
				break;
			} else {
				break;
			}
		}
		var a = 'a';
		var h = 'h';
		for (i = 1; i <= (h.charCodeAt(0)-x.charCodeAt(0)); i++) {
			tempPos = edChar(x, i) + y;
			var info = determineType(tempPos);
			if (info == false) {
				moves.push(tempPos);
			} else if (info[0] != colour) {
				takes.push(tempPos);
				break;
			} else {
				break;
			}
		}
		for (i = -1; i >= (a.charCodeAt(0)-x.charCodeAt(0)); i--) {
			tempPos = edChar(x, i) + y;
			var info = determineType(tempPos);
			if (info == false) {
				moves.push(tempPos);
			} else if (info[0] != colour) {
				takes.push(tempPos);
				break;
			} else {
				break;
			}
		}
		if (pos == 'a1' && colour == 'white') {
			var conditionsSatisfied = true;
			for (i = 1; i <= 4; i++) {
				var x = edChar('a', i);
				if (i != 4) {
					if (determineType(x + 1) != false) {
						conditionsSatisfied = false;
					}
				} else {
					var info = determineType(x + 1);
					if (info[1] != 'king') { 
						conditionsSatisified = false;
					}
				}
			}
			if (conditionsSatisfied == true) {
				castle = 'd1';			
			}
		} else if (pos == 'h1' && colour == 'white') {
			var conditionsSatisfied = true;
			for (i = -1; i >= -3; i--) {
				var x = edChar('h', i);
				if (i != -3) {
					if (determineType(x + 1) != false) {
						conditionsSatisfied = false;
					}
				} else {
					var info = determineType(x + 1);
					if (info[1] != 'king') {
						conditionsSatisfied = false;
					}
				}
			}
			if (conditionsSatisfied == true) {
				castle = 'f1';
			}
		} else if (pos == 'a8' && colour == 'black') { 
			var conditionsSatisfied = true;
			for (i = 1; i <= 4; i++) {
				var x = edChar('a', i)
				if (i != 4) {
					if (determineType(x + 8) != false) {
						conditionsSatisfied = false;
					}
				} else {
					var info = determineType(x + 8);
					if (info[1] != 'king') { 
						conditionsSatisified = false;
					}
				}
			}
			if (conditionsSatisfied == true) {
				castle = 'd8';			
			}
		} else if (pos == 'h8' && colour == 'black') {
			var conditionsSatisfied = true;
			for (i = -1; i >= -3; i--) {
				var x = edChar('h', i);
				if (i != -3) {
					if (determineType(x + 8) != false) {
						conditionsSatisfied = false;
					}
				} else {
					var info = determineType(x + 8);
					if (info[1] != 'king') { 
						conditionsSatisified = false;
					}
				}
			}
			if (conditionsSatisfied == true) {
				castle = 'f8';			
			}
		}
		return [moves, takes, castle];
	}
}
