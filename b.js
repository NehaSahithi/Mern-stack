const marks = {
  maths: 42,
  physics: 34,
  chemistry: 77,
  english: 23
};
let total=0;
for(let key in marks){
    total+=marks[key];}
console.log("total:",total);
let average=total/Object.keys(marks).length;
console.log("avg marks:",average);
let highest=0;
for(let key in marks){
    if(marks[key]>highest){
        highest=marks[key];
    }
}
console.log(highest);
marks.computer=90;
console.log(marks);