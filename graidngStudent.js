/* HackerLand University has the following grading policy:

---Every student receives a  in the inclusive range from  to .
---Any  less than  is a failing grade.
---Sam is a professor at the university and likes to round each student's  according to these rules:

---If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
---If the value of  is less than , no rounding occurs as the result will still be a failing grade.
--------------------------------Examples:
 round to  (85 - 84 is less than 3)
 do not round (result is less than 40)
 do not round (60 - 57 is 3 or higher)

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

-----------------------------Function Description---------------------

Returns: int[n]: the grades after rounding as appropriate

Input Format: The first line contains a single integer, , the number of students.Each line  of the  subsequent lines contains a single integer, .

---------Sample Input 0

4
73
67
38
33

---------Sample Output 0

75
67
40
33

-----------Explanation 0

Student  received a , and the next multiple of  from  is . Since , the student's grade is rounded to .
Student  received a , and the next multiple of  from  is . Since , the grade will not be modified and the student's final grade is .
Student  received a , and the next multiple of  from  is . Since , the student's grade will be rounded to .
Student  received a grade below , so the grade will not be modified and the student's final grade is . */

function gradingStudents(grades) {

    const roundedGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38){
            roundedGrades.push(grades[i])
        }else{
            let next = Math.ceil(grades[i] / 5) * 5;
            if(next - grades[i] < 3){
                roundedGrades.push(next)
            }else{
                roundedGrades.push(grades[i])
            }
        }
    }
    return roundedGrades;
}

/* ----------------------------------------------Approach 2 ------------------------------------------------*/

function gradingStudents(grades) {

    const roundedGrades = grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        const remainder = grade % 5;
        if (remainder >= 3) {
            return grade + (5 - remainder);
        }
        return grade;
    });
    return roundedGrades;
}