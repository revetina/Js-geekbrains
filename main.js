var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 сначала инкремент, затем выдает результат
d = b++; alert(d); // 1 сначала результат, затем инкремент

c = (2+ ++a); alert(c); // 5 к двойке прибавляется инкремент а (2+1)
d = (2+ b++); alert(d); // 4 к двойке прибавляется b (2) и только потом она инкрементируется

alert(a); // 3 два последовательных инкремента
alert(b); // 3 тоже два инкремента
