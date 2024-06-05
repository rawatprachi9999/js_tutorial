// //function with return value
// function add(a,b){
//     return a+b
// }
// let sum=add(578,89345897)
// console.log(sum)

//function with no return value
// function add(a,b){
//     console.log(a+b)
// }
// add(578,89345897)
// console.log(console.log("hello"))

//return with multiple value
// function squareAndCube( num){
//     let sq=num ** 2;
//     let cube=num ** 3;
//     return [sq,cube];

// }
// console.log(squareAndCube(5));

//  var x=10;
//  {
//     let x=20;
//     let y=30;
//     console.log(x);
//     console.log(y);

//  }
//  var x=200;
//  let y=90;
//  console.log(x);

// function outer(){
//     console.log("greeting");
//     function inner()
//     {
//         console.log("hello");
//     }
//     return inner
// }
// outer()();
// let n=10;
// for(let i=0;i<n;i++)
//     console.log(n);

// function print_something()
// {
//     console.log("something");
// }

// function highOrderFunction(callback)
// {
//     console.log("high order function")
   
// }

// highOrderFunction(print_something)

// function print_something2()
// {
//     console.log("something22");
// }

// function highOrderFunction2()
// {
//     return print_something2
// }

// highOrderFunction2()()

let addAll= (...params) =>{
    let sum=0;
    for(let data of params){
        console.log(data)
        sum += data;
    }
    return sum
}

let out =addAll(10,20,30,40,50,1,2,3,4,5)
console.log(out);
