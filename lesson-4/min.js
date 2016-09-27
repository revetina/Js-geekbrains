function min(a, b) {
  var minimum;
  minimum = (a < b)? a : b;
  return(minimum);
}
console.log(min(0,10));
console.log(min(0,-10));