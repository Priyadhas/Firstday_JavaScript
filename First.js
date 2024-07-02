//using var
function varEXample()
{
    var a=3;
    if(true)
        {
            var a =5;
            console.log(a);
        }
        console.log(a);
}
varEXample();
// using let
function letexample()
{
    let a=3;
    if(true)
        {
            let a =5;
            console.log(a);
        }
        console.log(a);
}
letexample();
//using const
function constExample()
{
    const a=3;
    if(true)
        {
            const a =5;
            console.log(a);
        }
        console.log(a);
}
constExample();
//Bigint , symbol, comma, type of
let symbol=Symbol('unique');
console.log(symbol);
let pattern = 11123435678976543232432434545464565n;
console.log(pattern);
let result=(1,2,3);
console.log(result);
console.log(typeof (result));
let a1={ name:"Priya",rollno:45};
console.log( name instanceof a1);

 //Switch case program
let day = 4;
let dayName;
switch (day) {
    case 0:
        dayName="Sunday";
        console.log(dayName);
        break;
    case 1:
        dayName="Monday";
        console.log(dayName);
        break;
    case 2:
        dayName="Tuesday";
        console.log(dayName);
        break;
    case 3:
        dayName="Wednesday";
        console.log(dayName);
        break;
    case 4:
        dayName="Thursday";
        console.log(dayName);
        break;
    case 5:
        dayName="Friday";
        console.log(dayName);
        break;
    case 6:
        dayName="Saturday";
        console.log(dayName);
        break;
    default:
        console.log("Invalid day");
        break;
}
//while loop program
let k = 0;
while (k < 5) {
    console.log("Iteration:", k);
    k++;
}
//do..while loop program
let j = 0;
do {
    console.log("Iteration:", j);
    j++;
} while (j < 5);
// Using if,else-if,else statement
let a=5,b=7;
if(a>b)
    {
        console.log("a is greater then b");
    }
    else if(a<b)
        {
            console.log("a is lesser then b");
        }
        else{
            console.log("a and b are equal");
        }