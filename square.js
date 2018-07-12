function findNextSquare(sq) {
  if( Math.pow(Math.floor(Math.sqrt(sq)),2) !== sq) return -1;
  else return Math.pow((Math.sqrt(sq)+1),2) ;
}


findNextSquare(122);
