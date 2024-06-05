// // let student={
// //     firstName:"Prachi",
// //     lastName:"Rore",
// //     fullName:function(age , city){
// //         return "Crickter " +this.firstName + " " + this.lastName+`he is ${age} years old and live in ${city}`
// //     }
// //   }  

// //   let sachin={
// //     firstName:"Sachin",
// //     lastName:'tendulkar'
// //   }

// //   let out = student.fullName.apply(sachin , [40,'mumbai'])
// //   console.log(out);
// //    out = student.fullName.call(sachin , 40,'mumbai')

// //   console.log(out);
// // let student2=Object.assign({},student);
// // student.age=23;
// // student =Object.assign({} , student ,{ skills :['html','css']})
// // student.skills=['html','css']
// // console.log(student.fullName());
// // console.log("student1",student);
// // console.log("student",student2);
// // delete student.fullName
// // console.log(student);
// // console.log(Object.keys(student));
// // console.log(Object.values(student));

// // let x=10
// // let y= "something"
// // let z =[1,2,3]
// // console.log(x.__proto__);
// // console.log(y.__proto__);
// // console.log(z.__proto__);
// // let people={

// // }
// // let a=String("rachna")
// // console.log(typeof(a));
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName())

let arr=[ { name:"prachi",
            marks:97


},

{         name:"shivya",
            marks:50


},
{         name:"abhi",
            marks:58


},
{         name:"khushi",
            marks:89


}
]
let out1=arr.filter(el=>el.marks>60).map(el=>el.name)
console.log(out1);

let out2=arr.filter(el=>el.marks>60).reduce((accumulator,el) =>accumulator+=el.marks,0)
console.log(out2);



// 


