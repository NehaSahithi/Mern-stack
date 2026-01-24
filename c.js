let marks=[10,30,89,75,45];

let result1=marks.filter(element=>element<70);
console.log(result1);

let result2=marks.map(element=>element+5);
console.log(result2);

let result4=marks.reduce((accumulator,element)=>accumulator+element,0);
console.log(result4);

let small=marks.reduce((acc,e)=>acc<e?acc:e,marks[0]);
console.log(small);

let result5=marks.find(element=>element===30);
console.log(result5);
let result6=marks.findIndex(element=>element===30);
console.log(result6);