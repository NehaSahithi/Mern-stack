const marks = [78, 92, 35, 88, 40, 67];

let marks1=marks.filter(marksObj=>marksObj>=40);
console.log(marks);
console.log(marks1);

let marks2=marks.map(marksObj=>marksObj+5);
console.log(marks2);

let marks3=marks.reduce((highest,marksObj)=>{
    return marksObj>highest?marksObj:highest;
})
console.log(marks3);

let marks4=marks.find(marksObj=>marksObj<40);
console.log(marks4);

let marks5=marks.findIndex(marksObj=>marksObj===92);
console.log(marks5);