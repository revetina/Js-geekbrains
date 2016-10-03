function objectToQueryString(object) {
    var str = "";
    for (var key in object) {
        str += "&" + key + "=" + object[key];
    }
    str = str.slice(1);
    return str;
}

var test = {
    id: 1,
    name: "Kat",
    passw: "qwerty",
    access: "user",
    phone: "88889990000"
};

console.log(objectToQueryString(test));