function arrayToList(arr) { //получает массив и преобразует в список
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));


function prepend(list, element) { //получает список и элемент, добавляет элемент к первоначальному списку.
    var newList = {
        value: element,
        rest: list
    };
    return newList;
};
var list = arrayToList([1, 2, 3]);
console.log(prepend(list, 0));
console.log(prepend(list, -1));