let coords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let pieces = ['pawn', 'rook', 'knight', 'bishop', 'queen', 'king'];
var turn = 1;
var focusPiece;

function edChar(c , num) {
	return String.fromCharCode(c.charCodeAt(0) + num);
}
