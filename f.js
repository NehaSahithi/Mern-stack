const courses = ["javascript", "react", "node", "mongodb", "express"];

let res1=courses.filter(coursesObj=>coursesObj.length>5);
console.log(courses,res1);

let res2=courses.map(coursesObj=>coursesObj.toUpperCase());
console.log(courses,res2);

 let res3 = courses.reduce((courseStr, coursesObj) => {
    return courseStr === ""
        ? coursesObj.toUpperCase()
        : courseStr + " | " + coursesObj.toUpperCase();
}, "");
 console.log(res3);

 let res4=courses.find(coursesObj=>coursesObj==="react");
    console.log("found course:",res4);

let res5=courses.findIndex(courseObj=>courseObj==="node");
console.log(res5);       