
let a = 1;
let b = 'bongos';
let c = true;
a = b;
b = c;
c = a;

/*What is a?
a is 'bongos'
What is b?
b is true
What is c?
c is 'bongos'
*/

const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";
console.log(firstWord+" "+secondWord+" "+thirdWord+" "+fourthWord);

//Result ==> "Please squeeze the cheese"


const num1 = 5;
const num2 = 10;
const num3 = num1 + num2
console.log("The sum of " + num1 + " and " + num2 + " is " + num3);
//Result ==> The sum of 5 and 10 is 15

//7
999 > 999
999 === 999 
999 !== 999
-5 >= -4
100 <= -100
20 + 5 < 5 
81 / 9 === 9
9 !== 8 + 1
/*Result ==> 
a) false
b) true
c) false
d) false
e) false
f) false
g) true
h) false
*/


let num = 30
if (num%3 == 0 && num%5 == 0){ 
console.log("FizzBuzz")
}else if (num%3 == 0){
console.log("Fizz")
}else if (num%5 == 0){
console.log("Buzz")
}else{
console.log(num)
}
//Result ==> FizzBuzz


let num = 0
while(num <= 100){
    if (num%3 == 0 && num%5 == 0){
    console.log("FizzBuzz")
}else if (num%3 == 0){
    console.log("Fizz")
}else if (num%5 == 0){ 
    console.log("Buzz")
}else{ 
console.log(num)
}
    num++;
}
//Result ==> done


//10
function maxNum(max){
    let num = 0   
    while(num <= max){
       if (num%3 == 0 && num%5 == 0){
       console.log("FizzBuzz")
       }else if (num%3 == 0){ 
       console.log("Fizz")
       }else if (num%5 == 0){ 
       console.log("Buzz")
       }else{
       console.log(num)
       }
       num++;
   }   
   }