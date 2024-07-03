let family={
    father:"head",
    Members:5,
    pets:2
}
let person={
    pets:6
}

let a=Object.values(family);
console.log(a);
let b=Object.assign(family,person);
console.log(b);
let d=Object.entries(person);
console.log(d);
let r=Object.keys(family);
console.log(r);
let rs=Object.values(family);
console.log(rs);
