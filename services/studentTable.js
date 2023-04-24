import Student from "./../models/studentData.js";
//Add new student


// Returns student With Id
 export const QueryStudentById = (id) => {
    let Student;
    Student.forEach((studentData) => {
      if (studentData.id === Number(id)) {
        Student= studentData;
      }
    });
    return Student;
  };


  
  // Returns List of students
  export const QueryListOfStudents = () => {
    return Student;
  };
  
  export const DeleteStudentById = (id) => {
    Student.filter((Student) => {
      return Student.id !== Number(id);
    });
  };
  
//   module.exports = {
//     QueryStudentById,
//     QueryListOfStudents,
//     DeleteStudentById,
//   };