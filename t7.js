//spliting a array without inbuit funxtion
// let x="prachi";

// let y=x.split('').reverse().join('');
// console.log(y);

// let f_name="prachi"
// let s_name="rawat"
// let full_name=f_name.concat(" " ,s_name).toUpperCase();
// console.log(full_name);


// function greet(){
//     return "good morning";
// }

// console.log(greet())

// function displayDetails(name="prachi",age="24",city="banglore"){
//     console.log(`hi my name is ${name} ,and i am ${age} years old, and i live in ${city}`);
// }

// displayDetails()

// function printAll() {
//     for (let a in arguments) {
//         let new_a = parseInt(a) + 1;
//         console.log(`The index of #${new_a} is ${arguments[a]}`);
//     }
// }

// printAll(123, 456, 789, 23, 65, 33, 54, 90);



// expression function
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet('Bob'));

// arrow functions
// let greet=" "
greet= () =>{
    return "greeting";
}
// console.log(greet());
// This works only if the function has only one statement.

// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:
// hello = (val) => "Hello " + val;
let sum=10+12+13*4;
console.log(sum);

function reverseString(str) {
    // Create an empty string to store the reversed result
    let reversed = '';
  
    // Iterate over the original string from end to start
    for (let i = str.length - 1; i >= 0; i--) {
      // Add the current character to the reversed string
      reversed += str[i];
    }
  
    // Return the reversed string
    return reversed;
  }
  
  // Test the function
  const example1 = reverseString('hello'); // Expected: 'olleh'
  const example2 = reverseString('JavaScript'); // Expected: 'tpircSavaJ'
  
  console.log(example1);
  console.log(example2);

  let n=4
  for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
  }

  var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
let a=4;
let b=9
let c=a==b
console.log(c);