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




function nth(list, n) { // в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(nth(list, 1));
console.log(nth(list, 3));



function listToArray(list) { // получает список, возвращает массив
    var arr = [];
    for (var i = list; i; i = i.rest)
        arr.push(i.value);
    return arr;
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(listToArray(list));