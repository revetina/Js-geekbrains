function isEven(num){
    if (num == 0)
        return true;//если 0 возвращает true
    if (num == 1)
        return false;// если 1 то false
    if (num <0)
        num = num*(-1);//проверяем число, не отрицательное ли оно. Если отрицательное - делаем положительным. С отрицательным числом цикл уйдет в бесконечность
    else num = num-2;// если не 0 и не 1, то отнимает 2 и снова проверяет
    return isEven(num);
}
console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));