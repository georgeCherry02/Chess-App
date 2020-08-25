function Knight(colour, pos) {
	this.type = 'knight';
	this.colour = colour;
	this.pos = pos;
	this.availableMoves = function() {
		let a = 'a';
		let h = 'h';
		var x = pos.charAt(0);
		var y = parseInt(pos.charAt(1));
		var moves = [];
		var takes = [];
		var tempPos;
		for (i = -2; i < 3; i++) {
			var tempY = y + i;
			if (tempY < 1 || tempY > 8) {
				continue;
			}
			if (i == 0) {
				continue;
			} else if (i == -2 || i == 2) {
				var tempX = edChar(x, 1);
				if (!((tempX.charCodeAt(0) > h.charCodeAt(0)) || (tempX.charCodeAt(0) < a.charCodeAt(0)))) {
					tempPos = tempX + tempY;
					var info = determineType(tempPos);
					if (info == false) {
						moves.push(tempPos);
					} else if (info[0] != colour) {
						takes.push(tempPos);
					}
				}
				var tempX = edChar(x, -1);
				if (!((tempX.charCodeAt(0) > h.charCodeAt(0)) || (tempX.charCodeAt(0) < a.charCodeAt(0)))) {
					tempPos = tempX + tempY;
					var info = determineType(tempPos);
					if (info == false) {
						moves.push(tempPos);
					} else if (info[0] != colour) {
						takes.push(tempPos);
					}
				}
			} else if (i == -1 || i == 1) {
				var tempX = edChar(x, 2);
				if (!((tempX.charCodeAt(0) > h.charCodeAt(0)) || (tempX.charCodeAt(0) < a.charCodeAt(0)))) {
					tempPos = tempX + tempY;
					var info = determineType(tempPos);
					if (info == false) {
						moves.push(tempPos);
					} else if (info[0] != colour) {
						takes.push(tempPos);
					}
				}
				var tempX = edChar(x, -2);
				if (!((tempX.charCodeAt(0) > h.charCodeAt(0)) || (tempX.charCodeAt(0) < a.charCodeAt(0)))) {
					tempPos = tempX + tempY;
					var info = determineType(tempPos);
					if (info == false) {
						moves.push(tempPos);
					} else if (info[0] != colour) {
						takes.push(tempPos);
					}
				}
			}
		}
		return [moves, takes];
	}
}
