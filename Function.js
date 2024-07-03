function add()
{
    const a=3,b=5;
    d=a+b;
    console.log(a+b);
}
add();
//Function expression
let a=function happy (name)
{
    console.log(name+" is very happy");
}
a('Priya');
// Anonymous function
let b= function(){
    console.log("always be thankful");
}
b();
//Arrow function
let h=(name)=>{
    console.log('My name is '+ name);
}
h('Priya');
//Callback functions
function fetchData(callback)
{
setTimeout(function(){
    let data='Data fetched successfully';
    callback(data);
},2000);
}
function processData(data){
    console.log(data);
}
fetchData(processData);
//HigherOrderFunctions
const number=[1,2,3,4,5];
function applyOperation(Operation,number)
{
    return number.map(Operation);
}
function Multiply(num)
{
    return num*2;
}
function Add(num)
{
    return num+1;
}
const sum=applyOperation(Add,number);
const product=applyOperation(Multiply,number);
console.log(sum);
console.log(product);
//Immediate invoked function
a=(function(){
    var m=4;
    console.log(m);
});
a();
console.log(m);