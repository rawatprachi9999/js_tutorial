
for( var i=1;i<11;i++){
    if(i%2==0)
console.log("even no",i);
}
console.log('saree for...'+"A")
console.log(10 +" "+10)
for(let start=30;start>=1;start--){
    if(start%2!=0){
        console.log(start)
    }
}
let s1="prachi";
let s2=s1.split('');
console.log(s2);
s2.reverse();
console.log(s2);
s2.join('');
console.log(s2);
console.log(s1.split('').reverse().join(''));

let p=0;
while(p<100){
    console.log(p++);
}
const fruits=['orange','papaya','banana','apple'];
fruits.sort();
console.log(fruits);


//sorting array
let array =[92,67,43,2,78,4];
let temp;
for(let j=0;j<=array.length-1;j++){
    for(let i=j+1;i<array.length;i++)
    if (array[j]>array[i]){
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
    }
}
console.log(array);

//camel_to_snake
// function camelTosnake(camelstring)
// {
//     let snakestring='';
//     for(let i=0;i<camelstring.length;i++)
//         {
//             const char=camelstring[i];
//             if(char==char.toUpperCase() && i>0)
//                 {
//                     snakestring+='_';
//                 }
            
//             snakestring+=char.toLowerCase();  
//         }
//         return snakestring;
// }
// console.log(camelTosnake("hiMyNameIsPrachiRawat"));

//snakeToCamel
function snakeToCamelConverter(snake_string)
{
    let camelString="";
    let captalized=false;
    for(let j=0;j<snake_string.length;j++)
        {
          
            const char=snake_string[j];
            if(char=='_')
                {
                    captalized=true;
                   
                }
                else
                {
                    if(captalized)
                        {
                            camelString+=char.toUpperCase();
                             captalized=false;
                        }

                    else
                        {
                            camelString+=char;
                        }
                }
                
                
        }
     return camelString;
}
let snake_string="hi_my_snake_string";
console.log(snakeToCamelConverter(snake_string));


//reverse ans array
let b=[1,2,34,5,67];
for(let i=1;i<=b.length;i++){
    console.log(b[(b.length)-i]);
}

//palindrome number
let c1="racecar";
let w=c1.split('');
let flag=true;
let n3=w.length-1;
let o=0;
while(o<n3)
{
    
    if(w[o]==w[n3-o])
        {
            o++;
            
        }
        else
        {
            flag=false;
            break;
        }

}

if (flag) {
    console.log(`${c1} is Palindrome`);
} else {
    console.log(`${c1} is  not Palindrome`);
}
const d1 =new Date();
console.log(d1);
const d = new Date(2018, 15, 24, 10, 33, 30, 0);
console.log(d);
let a = Array();
console.log(a);
