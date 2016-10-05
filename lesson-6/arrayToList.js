function arrayToList(arr) {
    function prepend(element) { //получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку
        newList = {
            value: element,
            rest: list
        };
        return newList;
    };
    var list = {
        value: arr[0],
        rest: {
            value: arr[1],
            rest: {
                value: arr[2],
                rest: null
            }
        }
    };
    list1 = prepend(0);
    list2 = prepend(-1);
    console.log(list, list1, list2);
};

arrayToList([1, 2, 3]);