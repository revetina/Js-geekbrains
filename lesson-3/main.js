
//Цикл, который выводит треугольник
var i;
var triangl;
triangl = "";
for (i = 1; i <= 7; i++) {
    triangl = triangl + "#";
    console.log(triangl);
}

//Шахматная доска
var chess;
var n;
var chess="";
for (n = 1; n <= 71; n++) {
    if (n % 2 == 0 && n % 9 != 0){
        chess = chess + "#";
    }
    if (n % 2 != 0 && n % 9 != 0){
        chess = chess + " ";
    }
    if (n % 9 == 0)
        chess = chess + "\n";
}
console.log(chess);
