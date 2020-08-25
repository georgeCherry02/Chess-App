function Queen(colour, pos) {
	this.type = 'queen';
	this.colour = colour;
	this.pos = pos;
	this.availableMoves = function() {
		var bshp = new Bishop(colour, pos);
		var rk = new Rook(colour, pos);
		var bsMov = bshp.availableMoves();
		var rkMov = rk.availableMoves();
		var moves = bsMov[0].concat(rkMov[0]);
		var takes = bsMov[1].concat(rkMov[1]);
		return [moves, takes];
	}
}
