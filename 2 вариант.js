//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль



/* num =prompt('input number');
if (num >= 0){
console.log('number is positive')    
}else{
    console.log('number in negativ')
}*/




//Дана строка. Выведите в консоль длину этой строки

/*strin = prompt('input string')
console.log('length string', strin.length)*/


//Дана строка. Выведите в консоль последний символ строки



/*stri = prompt('input string')
console.log('last element string', stri.slice(-1))*/


//Дано число. Проверьте, четное оно или нет

/*number = prompt('input number')
if (number % 2 == 0){
    console.log('number is even')
}else{
    console.log('number is odd ')
}*/


//Даны два слова. Проверьте, что первые буквы этих слов совпадают

/*strin1 =prompt('input one word')
strin2 = prompt('input two word')

if (strin1[0] == strin2[0]){
    console.log('first word match')
}else{
    console.log('first word is not match')
}*/


/*Дано слово. Получите его последнюю букву. 
Если слово заканчивается на мягкий знак, 
    то получите предпоследнюю букву*/

/*stri = prompt('input string')
if (stri.slice(-1) == 'ь'){
    console.log(stri.slice(-2, -1))
}else{
    console.log('last letter', stri.slice(-1))
}*/

//or


/*stri = prompt('input string')
if (stri[stri.length - 1] == 'ь'){
    console.log(stri[stri.length - 2])
}else{
    console.log('last letter', stri[stri.length - 1])
}*/


//Дано число. Выведите в консоль первую цифру этого числа

/*number = prompt('input number')
console.log(String(number), typeof number)
console.log('first digital', number[0])*/

//or


/*let num = 42;
let str = String(num);  // Явное преобразование числа в строку
console.log(str, typeof str); // "42" "string"*/


//Дано число. Выведите в консоль последнюю цифру этого числа

/*number = prompt('input number')
strin = String(number)
console.log('last digital', strin.slice(-1))*/

/*let num = +"123";  // Унарный плюс → число
let str = 123 + "";  // Конкатенация с пустой строкой → строка
let bool = !!1;  // Двойное отрицание → boolean (true)*/

/*Дано число. Выведите в консоль сумму первой и последней цифры 
этого числа*/
/*numb = prompt('input number')
f_dig = Number(numb[0])
l_dig = Number(numb.slice(-1))
console.log(f_dig + l_dig)
*/

//Дано число. Выведите количество цифр в этом числе

/*num = prompt('input number')
console.log('the lengths digits', num.length)*/


//Даны два числа. Проверьте, что первые цифры этих чисел совпадают
/*num1 = prompt('input number')
num2 = prompt('input number')
if (num1[0] == num2[0]){
    console.log('first digits match')
}else{
    console.log('first digits disconect')
}*/


/*Дана строка. Если в этой строке более одного символа, выведите
в консоль предпоследний символ этой строки*/

/*stri = prompt('input string')
if (stri.length > 1){
    console.log(stri.slice(-2, -1))
}else{
    console.log('string have at the one simbol')
}*/

/*Даны два целых числа. Проверьте, что первое число без 
остатка делится на второе*/


/*num1 = prompt('input number')
num2 = prompt('input number')
ost = num1 % num2
if (num1 %  num2 == 0){
    console.log('the first number is evenly divisible by the second number')
}else{
    console.log('the remainder of the division', ost)
}*/


//Выведите в консоль все целые числа от 1 до 100

for (let i = 1; i <= 100; i++) {
  console.log(i);
}