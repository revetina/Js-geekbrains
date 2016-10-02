function numToObj(num) {
    var obj = {};
    if (num > 999) {
        console.log("неправильное число");
        return obj;
    } else {
        obj["единицы"] = num.charAt(num.length - 1);
        obj["десятки"] = num.charAt(num.length - 2);
        obj["сотни"] = num.charAt(num.length - 3);
    }
    console.log(obj);
}
numToObj(prompt("введите число"));