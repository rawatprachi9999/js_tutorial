let array1 = [];
let array2 = new Array([1,3]);
let array3 = Array.of(['hi',23]);
let array4 = Array.from('hello');
let s1="india";
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(s1.split(""));
let n1=[1,2,3];
let n2=[1,2,3];
n3=n1+", "+n2;
n4=n1.concat(n2);
console.log(n3);
console.log("befor pop",n4);
n4.pop()

console.log("after pop==> ",n4);
n4.shift()
console.log("after shift==> ",n4);
n4.push(200,44);
console.log("after push ==> ",n4);
n4.unshift(1,2)
console.log("after unshift ==> ",n4);
console.log(n4.slice(0,2));

out2=n4.splice(2,1,1,2,3);
console.log("splice method",out2);
console.log("before spice method",n4);

console.log("splice method",out2);
alph=['a','b','c','d'];
console.log(alph);
console.log(alph.join("==> "));

console.log(typeof(alph));
console.log(typeof(alph.join("==> ")));

FrontEnd.reverse()
console.log("After ==> ", FrontEnd)


// let word = prompt("Enter a string")
// let rev_word = word.split('')
// rev_word.reverse()
// rev_word = rev_word.join('')

// if (word == rev_word){
//     console.log("The given word is palindrome")
// }
// else{
//     console.log("Its not!!!")
// }

FrontEnd.sort()
