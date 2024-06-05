// function greet(name)
// {
//     console.log('hello ' + name+' !!!' );
// }

// setTimeout(greet,3000,'ram')//run only once
// // setInterval(greet,3000,'ram')//run after each 3 seconds
// let country=['IND','AUS','NZ','WI', 'USA','PAK']
// let out=country.forEach((el) => console.log(el.toLowerCase()))

//  nums =[2,4,7,9,23]
//  const squarednumbers = nums.map(function(number){
//   return number * number;
  
//  })
//  console.log(squarednumbers);


//filter
 const num=[1,3,5,2,6,8,10]

 let res=num.filter(function(el){
  return el%2==0
 });
 console.log(res);
//  let res=num.filter(el =>el%2==0)
//  console.log(res);
//  let out=[]
//  let check=[]

// nums.forEach(el => console.log(el*el))
//   out=nums.map(el=>el*5);
//   console.log(out);

//   check=nums.filter(el=> el%2==0)//odd no
//   console.log(check);

 
//   let sum=nums.reduce( (acc,el)=>acc+el)
//   console.log(sum);

//   let names=['prachi','shivya','ankuj' ]
//   let con=names.reduceRight( (acc,el) => acc+(el))
//   console.log(con);
//   console.log(names.sort())
//   let age=[12,45,22,67,9]
//   let voters =age.every(el => el>=18)
//   console.log(voters);

//   let voters2 =age.some(el => el>=18)
//   console.log(voters2);


//   let matrix=[  [1,34,89,2,3],  [4,5,6] , [7,8,9]]
//   console.log(matrix.flatMap(el_arr => el_arr.map(el => el*2)));

// //   let data=[1,34,60,89,100]
// //   let res=data.findIndex(el => el%4==0)
// //   console.log(res);


// let data=[51,76,5,4,6,30,8,19,1,5,7,3,9]
// let res=data.sort((a,b) => a-b)
// console.log(res);


function counter(){
  let count=0;

  return function inc(){
    return ++count;
  };
}

let increment = counter();
console.log(increment());
console.log(increment());

