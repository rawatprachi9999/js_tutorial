// // let [x,y,...z]=[1,3,5,7,9,11,100,200]
// // console.log(x);
// // console.log(y);
// // console.log(z);


// //spread operator
// let x=[12,23,34]
// let y=["A","B","C"]
// let z=[...x,...y,1,2,4,3,5]
// console.log(z);

// // let x=[1,2,3]
// // let y=x//same refernce /referncing
// // x="ABC"
// // y.push(100)
// // console.log(x);
// // console.log(y);


// // let x=[12,23,34]
// // let y=[...x]//copy of x
// // y.push(112)
// // console.log(x);
// // console.log(y);

// // let add(...args)=>{
// //     console.log(args);
// // }
// // add(199,77,86)

// let str1=`you "welocme" message 1234 is the
//  automated your welcome mesage google@gmail.com
//   generally  be sucinated
//   check out the below templates for some ideas/.`
// //   let pattern=/[a-z0-9]+/gim +/
// //   let out =str1.match(pattern)
// //   console.log(out);

// // we have an array with a name and surname
// let arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname);

// function replaceWord(text) {
//     // Define the regular expression to match "JavaScript"
//     let regex = /JavaScript/g;

//     // Replace all occurrences of "JavaScript" with "JS"
//     return text.replace(regex, "JS");
// }

// // Test the function
// let text = "I love JavaScript. JavaScript is awesome!";
// console.log(replaceWord(text)); // Output: "I love JS. JS is awesome!"


// function extractNumbers(text) {
//     // Define the regular expression to match all numbers
//     let regex = /\d+/g;

//     // Use match to find all numbers
//     let result = text.match(regex);

//     // Return the result
//     return result;
// }

// Test the function
// let text = "The price is 100 dollars and 50 cents.";
// console.log(extractNumbers(text)); // Output: [ '100', '50' ]

// camelCase   ==> camel_case
            // conversion
//snake_case ===>      snakeCase
//use reduce and regex


// function camelConvert(camelcase){
//     return camelcase.split('').reduce((acc,char) => {
//         if (char==char.toUpperCase()){
//             acc+="_"+char.toLowerCase()
//         }
//         else{
//             acc+=char
//         }
//         return acc

//     }
//     ,'')
    
// }

// let res1=camelConvert('redFortExampleOne')
//  console.log(res1);
//  function camelConvert(str){
//     return str.replace( /([A-Z])/g,'_$1').toLowerCase()
//  }

// function snakeToCamel(str){
//     return str.split('').reduce( (acc,char,index,arr) => 
//     {
//         if (char=='_')
//             {
//                 if (index+1 <arr.length){

//                     acc+=arr[index+1].toUpperCase()
//                     arr[index+1]=''
                    
//                 }
                
                
//             }
//             else if(char !=''){
//                 acc+=char
//             }
//         return acc
//     },'')
// }
// let out =snakeToCamel("high_bro_example")
// console.log(out);

// function snakeToCamel(str) {
//     return str.replace(/(_\w)/g, match => match[1].toUpperCase());
// }
// let out = snakeToCamel("high_bro_example");
// console.log(out); // Output: "highBroExample"


// function countOccurrences(arr) {
//     let occurrenceCount = {};
  
//     arr.forEach(element => {
//       if (occurrenceCount[element]) {
//         occurrenceCount[element]++;
//       } else {
//         occurrenceCount[element] = 1;
//       }
//     });
  
//     return occurrenceCount;
//   }
  
//   // Example usage:
//   const exampleArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//   const counts = countOccurrences(exampleArray);
//   console.log(counts);


//   function countOcc(arr){
//     return arr.reduce((acc,el)=>{
//        acc[el]=(acc[el]||0)+1
//        return acc
       
//   },{})
// }
//   let arr="prachirawat";
//   let ar=arr.split('')
//   let out =countOcc(ar)
  
// console.log(out)



// function calculateOccurence(arr)
// {
//     let count={}
//     return arr.filter(el)=> 
//         {
//         count[el]==(arr[index]||0)+1

//         }
//         return count    
//     }
// let arr=[1,2,3,4,5,6,7]

// console.log(calculateOccurence(arr))







    // return arr.reduce( (acc,el)=>{
    // arr[el]=(arr[el]||0)+1
    // return acc
    // },{})


// const array = [5,2,7,1, 2, 3, 4, 1, 2, 5];


// function removeDuplicates(arr){
//     return arr.filter((value,index)=> arr.indexOf(value)==index)
 
// }

// const array = [5,2,7,1, 2, 3, 4, 1, 2, 5];
// console.log(removeDuplicates(array))

// const fruits=['apple','banana','orange','papaya']
// // fruits.forEach((el)=>console.log(`the fruit ${fruits.indexOf(el)} is ${el}`))
// let out =fruits.map((fruit)=>
//     {
//         fruit.charAt(0).toUpperCase()+fruit.slice(1)
//     })
// console.log(out);

// let number=[12,34,70,80,20]
// let out=number.filter((el)=>{
//     return el%10==0
// })
// console.log(out);

// let number=[12,34,70,80,20]
// let out=number.map((el)=>{
//     return  el **2
// })
// console.log(out);

let number=[1,2,3,4,5]
let out=number.reduce((el)=>{
    while(el>0)
        {
            el=el*el-1
        }
    return el      
})
console.log(out);