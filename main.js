const createStudent = (studentName) => {
    return {
        Name: studentName,
        grade: {

        }

    }
}

const addMathGrade = (student) => {
    student.grade.math = "B"
    return student
};

const addHistoryGrade = (student) => {
    student.grade.history = "C"
    return student
};

const addScienceGrade = (student) => {
    student.grade.science = "A"
};

const reportCard = (student) => {
    let studentCard = addMathGrade(student); addScienceGrade(student); addHistoryGrade(student);
    return console.log(studentCard);
};

let studentVishy = createStudent("Vishy");
reportCard(studentVishy)