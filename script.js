// ///1///
// let fruits = ["apple", "mango", "avocado", "kiwi"];

// fruits.splice(fruits.length - 1, 1, "strawberry");
// console.log(fruits); 


// ///2///
// let info = 'good day';

// let axalisityva= info.slice(5);
// console.log(axalisityva);     


// ///3///
// function getStringLength(str) {
//     return str.length;
// }


// ///4///
// let myArray = [5, 25, 89, 120, 36];
// myArray.push("javascript", "python");
// myArray.unshift("html", "css");
// console.log("Number of elements in the array:", myArray.length);
// myArray.shift();
// myArray.pop();
// console.log("Modified array:", myArray);
// console.log("Number of elements in the array after removal:", myArray.length);


// ///5///
// let fruits = ["orange", "banana", "kiwi"];
// console.log("Number of elements in the array:", fruits.length);
// fruits.push("apple", "pineapple");
// fruits.unshift("watermelon");
// console.log("Number of elements in the array after additions:", fruits.length);
// fruits.splice(2, 0, "mango");
// fruits.shift();
// fruits.pop();
// console.log("Number of elements left in the array:", fruits.length);


// //6//
// let array3 = [1, 2, 3, 4, 5];
// array3.splice(3, 0, 'a', 'b', 'c');
// console.log(array3); 

// ///7///
// let array7 = [15, 100, 25, 10, 36];
// array7.splice(array7.indexOf(10), 1);
// console.log(array7); 

// ///8///
// let array8 = [1, 2, 3, 4, 5];
// array8.splice(2, 1, 'three');
// console.log(array8);

// ///9///
// let array4 = [1, 2, 3, 4, 5];
// let sum = 0;

// array4.forEach(function(number) {
//     sum += number;
// });

// console.log(sum); 

// ///10///
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// let newArray = array2.map(element => {
//     if (typeof element === 'number') {
//         return element ** 2;
//     } else if (typeof element === 'string') {
//         return element.toUpperCase();
//     } else {
//         return element;
//     }
// });

// console.log(newArray);


///11///
// let correctAnswer = 'tbilisi';
// let userAnswer = prompt('საქართველოს დედაქალაქი?');

// if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//     console.log('სწორი პასუხია');
// } else {
//     console.log('არასწორი პასუხია');
// }


//
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const correctAnswer = 'tbilisi';

// rl.question('საქართველოს დედაქალაქი? ', (userAnswer) => {
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         console.log('სწორი პასუხია');
//     } else {
//         console.log('არასწორი პასუხია');
//     }
//     rl.close();
// });




//12
// let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array5.map(element => element / 3);

// console.log(newArray);

//13
// let array1 = ["hello1", 14, 24, "hello2"];

// let numbersOnly = array1.filter(element => typeof element === 'number');

// console.log(numbersOnly);

//14
// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let filteredLanguages = languages.filter(language => language.length > 3);

// console.log(filteredLanguages);

//15
let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let filteredWords = words.filter(word => 
    word.toLowerCase().includes('m')
);

console.log(filteredWords);

