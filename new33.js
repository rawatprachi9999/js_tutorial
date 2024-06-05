function addingPipe(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        if (i%2 == 0) {
            arr.splice(i, 0, "|");
            
        }
    }
    return arr;
}
let arr=[1,2,3,4,5,6,7,8,9]
let out=addingPipe(arr)
console.log(out);

// let arr = [1, 4, 6, 2, 8, 10];
// let out = addingPipe(arr);
// console.log(out);


// function unique(arr){
//     return arr.filter( (el,index)=> arr.indexOf(el)===index)
// }
// let a=[1,2,3,4,5]
// let b=[3,4,5,6,7]
// let c=a.concat(b) 
// let d=unique(c)
// console.log(d);




// let str = "prachiprachi";

// function calculate(arr) {
//     return arr.reduce((acc, el) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
// }

// let output = calculate(str.split(''));
// console.log(output);









