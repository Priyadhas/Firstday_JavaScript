function Factorial(a)
{

if(a===0)
    {
    return 1
    }
else
{
return a*Factorial(a-1);
}
};
let num=3;
let result =Factorial(num);
console.log(result);