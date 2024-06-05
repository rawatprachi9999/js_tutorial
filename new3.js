 let arr = ['abc', 'def', 'ghi'];
 let out=[]
for(let el of arr){
    let captalized=el.charAt(0).toUpperCase()+el.slice(1);
    out.push(captalized)

}

console.log(out);

