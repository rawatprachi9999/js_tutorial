// let json_data=
// 	 `[
// 		{
// 			"color": "red",
// 			"value": "#f00"
// 		},
// 		{
// 			"color": "green",
// 			"value": "#0f0"
// 		},
// 		{
// 			"color": "blue",
// 			"value": "#00f"
// 		},
// 		{
// 			"color": "cyan",
// 			"value": "#0ff"
// 		},
// 		{
// 			"color": "magenta",
// 			"value": "#f0f"
// 		},
// 		{
// 			"color": "yellow",
// 			"value": "#ff0"
// 		},
// 		{
// 			"color": "black",
// 			"value": "#000"
// 		}
// 	]`

// // json_data=`[{"category":"smartphones"},{"category2":"washng machine"}]`
// console.log(typeof(json_data));
// let JS_Object_Data =JSON.parse(json_data)
// // let JS_Object_Data =JSON.parse(json_data,filter, spaces)
// // let JS_Object_Data =JSON.parse(json_data,["color"],4)
  
//   console.log(JS_Object_Data)

// for(let data of JS_Object_Data){
//     console.log(data);
// }
// JS_Object_Data.forEach(data =>console.log(data.color))


// let cricketers=[
// 	{
// 		first_name:"Virat",
// 		last_name:"Kohli",
// 		age:36,
// 		skills:"['Bowling','Fielding']"
// 	},
// 	{
// 		first_name:"Rohit",
// 		last_name:"Kohli",
// 		age:38,
// 		skills:"['Bowling','Fielding']"
// 	},{
// 		first_name:"Hardik",
// 		last_name:"Pandya",
// 		age:28,
// 		skills:"['Bowling','Batting']"
// 	}
// ]
// console.log(cricketers);
// console.log(cricketers[1]);
// let cricketers_json= JSON.stringify(cricketers,['first_name','age'],8)
// console.log(cricketers_json);


// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// const obj = JSON.parse(text);
// console.log(typeof(text));
// console.log(typeof(obj.employees));
// console.log(obj.employees);

// let jsonObj={
// 	name:"prachi",
// 	age:24,
// 	friend:"smriti",
// 	food:"rajma-chawal"
// }
// console.log(jsonObj)
// let myJsonStr=JSON.stringify(jsonObj)
// console.log(myJsonStr)
// let newJsonObj=JSON.parse(myJsonStr,undefined,8)
// console.log(newJsonObj)

// let array=[23,78,90,35,7]
// let out=array.map(el=>el/2).filter(el =>el>30).reduce(function(result,item){
// 	return result+=item;
// },0)
// console.log(out);

// const jsonObject = { name: "John", age: null, city: undefined };
// const jsonString = JSON.stringify(jsonObject);
// console.log(jsonString); 



