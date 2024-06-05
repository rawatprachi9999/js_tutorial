// //example of map reduce and filter 
// let a1=[ [1,[4,7],],[39,78,90] ]
// without using in-built method
let array=[23,89,45,21,9,7,4]
for(let i=0;i<array.length;i++)
{
    for (let j=i+1;j<array.length;j++)
        {
            if(array[i]<array[j])
            {
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
}

console.log(array)
