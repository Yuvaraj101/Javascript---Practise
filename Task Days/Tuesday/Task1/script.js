//swap operations with third variable

var a = 10
var b = 20
var temp = a
console.log(a);
console.log(b);
console.log(temp);
a = b
b = temp
console.log(a);
console.log(b);

//swap without third variable

var a = 5
var b = 4
console.log(a);
console.log(b);
a = a+b //30
b = a-b //10
a = a-b //30-10 = 20
console.log(a);
console.log(b);
