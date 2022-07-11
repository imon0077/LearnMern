console.log("script loaded");

// const student = {
//     "name" : "John",
//     "age" : 20
// };

//const students = [student];

/*const students = `[{    
    "name" : "John",
    "age" : 20
},
{
    "name" : "Richie",
    "age" : 18
},
{
    "name" : "Robert",
    "age" : 15
}]`; */


//const studentInput = prompt('Enter Student json object');


const studentInput = `[
    {    
        "name" : "John",
        "age" : 20,
        "courses" : [
            {
                "name" : "javascript",
                "grade" : 90
            },
            {
                "name" : "Database",
                "grade" : 80
            }
        ]
    },
    {
        "name" : "Richie",
        "age" : 18,
        "courses" : [
            {
                "name" : "javascript",
                "grade" : 95
            },
            {
                "name" : "Database",
                "grade" : 85
            }
        ]
    }
]`;


const students = JSON.parse(studentInput);
//console.log(students);

const grades = students.map( student => student.courses.reduce( ( sum, course ) => sum = sum + course.grade, 0 ));

const Individualgrades = students.map( student => student.courses.reduce( ( sum, course ) => sum += course.grade, 0 ) / student.courses.length );

console.log("======================");
console.log(Individualgrades);

console.log(grades);

const totalGrades = grades.reduce( (sum, current) => sum += current, 0 );

console.log(totalGrades);

console.log("======================");

const OverallClassGrade = totalGrades / students.map(student => student.courses).flat().length;

console.log(OverallClassGrade);


// const SumOfAges = students.reduce( (sum, current) => sum + current.age, 0 );
// const avg = SumOfAges / students.length;

//  console.log(avg);