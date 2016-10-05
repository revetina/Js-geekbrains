function reverseArray(arr) { //получила массив и вернула другой массив с обратным порядком
    arr1 = [];
    for (i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    };
    return arr1;
};

console.log(reverseArray([1, 2, 3, 4, 5]));




function reverseArrayInPlace(arr) { //получила массив и вернула тот же с обратным порядком
    for (i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    };
    arr.splice(0, arr.length / 2);
    return arr;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));