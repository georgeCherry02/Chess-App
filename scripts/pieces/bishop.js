function Bishop(colour, pos) {
	this.type = 'bishop';
	this.colour = colour;
	this.pos = pos;
	this.availableMoves = function() {
		var x = pos.charAt(0);
		var y = parseInt(pos.charAt(1));
		var moves = [];
		var takes = [];
		var tempPos;
		var a = 'a';
		var h = 'h';
		for (i = 1; i <= 8-y; i++) {
			tempY = y + i;
			tempX = edChar(x, i);
			if (tempX == 'i') {
				break;
			}
			tempPos = tempX + tempY;
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
		for (i = 1; i <= 8-y; i++) {
			tempY = y + i;
			tempX = edChar(x, -i);
			if (tempX.charCodeAt(0) == a.charCodeAt(0)-1) {
				break;
			}
			tempPos = tempX + tempY;
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
		for (i = -1; i >= 1-y; i--) {
			tempY = y + i;
			tempX = edChar(x, i);
			if (tempX.charCodeAt(0) == a.charCodeAt(0)-1) {
				break;
			}
			tempPos = tempX + tempY;
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
		for (i = -1; i >= 1-y; i--) {
			tempY = y + i;
			tempX = edChar(x, -i);
			if (tempX == 'i') {
				break;
			}
			tempPos = tempX + tempY;
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
		return [moves, takes];
	}	
}
