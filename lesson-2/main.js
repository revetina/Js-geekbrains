//первая часть домашки
var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 сначала инкремент, затем выдает результат
d = b++; alert(d); // 1 сначала результат, затем инкремент

c = (2+ ++a); alert(c); // 5 к двойке прибавляется инкремент а (2+1)
d = (2+ b++); alert(d); // 4 к двойке прибавляется b (2) и только потом она инкрементируется

alert(a); // 3 два последовательных инкремента
alert(b); // 3 тоже два инкремента


//вторая часть домашки
var a = 2;
var x = 1 + (a *= 2);
alert(x);// x = 5

//задание со * вариант 1
var number;
    for(number = 1; number <= 100; number++){
        if (number%3==0){
            console.log("fizz");
        }else if(number%5==0){
            console.log("buzz");
        }else {
            console.log(number);
        }
            
    }
//задание со * - вариант 2
var number;
    for(number = 1; number <= 100; number++){
        if ((number%3)==0&(number%5)==0){
            console.log("FizzBuzz");
        }else {
            console.log(number);
        }
    }