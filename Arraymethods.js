const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.at(3));
console.log( fruits.join(" * "));
console.log(fruits.push("Kiwi"));
console.log(fruits);
fruits.splice(2, 1, "Lemon");
console.log(fruits);
fruits.splice(2, 0, "Lemon","grapes");
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);
 var h=fruits.toSpliced(2,1);
console.log(h);
console.log(h.slice(3));
console.log(h);
console.log(h.slice(1,4));//starting from 1 position and then not including 4*/

var fruit=fruits.pop()
 console.log(fruit);
 console.log(fruits);
 var fruitee=fruits.push("done");//push gives the length after adding an element
 console.log(fruitee);
 console.log(fruits);
  var s=fruits.shift();
 console.log(fruits);
 console.log(s);
  var ss=fruits.unshift("go");
 console.log(fruits);
 console.log(ss);
 
 var dd=fruits.concat(s);
 console.log(dd);

