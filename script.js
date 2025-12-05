var arr=[1,2,3,4];

//Foreach:
// arr.forEach(function(val){
//     console.log(val+" hello");
// })

//Map:
// var newarr=arr.map(function(val){
//    return val*3;
// })
// console.log(newarr);

//filtr:
// var ans=arr.filter(function(val){
//     if(val>3){
//         return true;
//     }
// })
// console.log(ans)

// find
// var ans=arr.find(function(val){
//     if(val==2) return val;
// })
// console.log(ans);

//indexOf:Gives Index
// var ans=arr.indexOf(1);
// console.log(ans);

//Objects:key-value Pair
// var obj={
//     name:"harsh",
//     age:"12"
// }
// console.log(obj.name);
// obj.age=25; //Changes the value
// Object.freeze(obj);// Cannot change the value of obj
// console.log(obj);

//How to find Length of function:Number of paramete is Lenght of Function
// function abcd(a,b,c){//length is 3

// }
// abcd.len

// function abcd(){
//     return 12;
// }

// var ans=abcd(); //The call will go to line 48 then retun 12 And will come to line 52 and write 12 in "ans"

//What is Synchronous?:Code is run Line by Line
//Jo bhi code async nature ka Ho,usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho,jab bhi saara syn code chal jaaye ,tab ch3ck kaaro ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein laao and chalao

async function  abcd(){
    var blob=await fetch(`https://randomuser.me/api/`);
    var ans=await blob.json();
    console.log(ans.results[0]);
}
abcd();