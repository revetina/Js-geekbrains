function rgbToHex(r, g, b) {
    var hex;
    m = Number(r).toString(16).toUpperCase(); //получает hex-значение
    m = m.length > 1 ? m : "0" + m;
    n = Number(g).toString(16).toUpperCase();
    n = n.length > 1 ? n : "0" + n;
    o = Number(b).toString(16).toUpperCase();
    o = o.length > 1 ? o : "0" + o;
    hex = "#" + m + n + o;
    return (hex);
}
console.log(rgbToHex(prompt("r="), prompt("g="), prompt("b=")));