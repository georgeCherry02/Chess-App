function King(colour, pos) {
	this.type = 'king';
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
		for (i = -1; i < 2; i++) {
			var tempY = y + i;
			if (tempY == 0 || tempY == 9) {
				continue;
			}
			for (j = -1; j < 2; j++) {
				if (i == 0 && j == 0) {
					continue;
				}
				var tempX = edChar(x, j);
				if ((tempX.charCodeAt(0) == a.charCodeAt(0)-1) || tempX == 'i') {
					continue;
				}
				tempPos = tempX + tempY;
				var info = determineType(tempPos);
				if (info == false) {
					moves.push(tempPos);
				} else if (info[0] != colour) {
					takes.push(tempPos);
				}
			}
		}
		return [moves, takes];
	}
}
