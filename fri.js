function level1(s1,s2){
    return s1(s2)
}
function level2(s2){
    return s2()
}
function level3(){
    return 100
}

let out =level1(level2,level3)
{
    console.log(out)
}

// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);


const radius = [1, 2, 3];
// function to calculate area of the circle
const calculateArea =  function (radius,f2) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
           
    }
    console.log(output);  
    return f2(radius)
    
}
// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);

    }
    return output;
}
console.log(calculateArea(radius,calculateDiameter));

let a=[1,2,3,56,89]
// a.fill("prachi");

// a.push(2);
// console.log(a);
// delete a[5];
// console.log(a);
 a.includes(5,0);
console.log(a);


console.log(greet('Alice'));
function greet(name) {
    return `Hello, ${name}!`;
}

 // Output: Hello, Alice!

let q=10
let b='10'
let c=(q===b)
console.log(c);
`${hello
    sjbdsjfk
}`
console.log(`${q}*`);


