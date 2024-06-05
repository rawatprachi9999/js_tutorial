// const regex = /hello.*world/;
// const str = "hello world hello world hello world";
// // console.log(regex.test(str)); // true
// // let r=(str.replace(/hello/g,'hi'));
// // console.log(r);
// console.log(regex.test(str));

// const regex=/(\d)/g
// const str="1hello 2hello 3hello"
// let out = console.log(regex.test(str));
// console.log(out);

// const regex=/^\d{5}$/
// const str="12345"
// console.log(regex.test(str));

// const regex=/(\w)/
// const str="hello world"
// const out=str.match(regex)
// console.log(out);

function checkVowels(str)
{
    return str.match(/[aeiouAEIOU]/g)
}


// const s= "hello world"
// const reg=/[aeiouAEIOU]/g
// const out =s.match(reg)
console.log(checkVowels("hello world"));