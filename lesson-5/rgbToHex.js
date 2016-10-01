function rgbToHex(r, g, b) {
    var massive = {};
    massive.sl = "#";
    massive.r = Number(r).toString(16).toUpperCase();
    massive.g = Number(g).toString(16).toUpperCase();
    massive.b = Number(b).toString(16).toUpperCase();
    return (massive.sl + massive.r + massive.g + massive.b);
}
console.log(rgbToHex(prompt("r="), prompt("g="), prompt("b=")));