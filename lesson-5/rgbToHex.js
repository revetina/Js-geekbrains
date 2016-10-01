function rgbToHex(r, g, b) {
    var massive = {};
    massive.sl = "#";//добавляет "#" перед выводом
    massive.r = Number(r).toString(16).toUpperCase();//получает hex-значение, добавляет в массив
    massive.g = Number(g).toString(16).toUpperCase();
    massive.b = Number(b).toString(16).toUpperCase();
    return (massive.sl + massive.r + massive.g + massive.b);//возвращает строковый массив
}
console.log(rgbToHex(prompt("r="), prompt("g="), prompt("b=")));