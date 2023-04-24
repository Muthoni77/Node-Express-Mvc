import { QueryListOfStudents,
    QueryStudentById,
    DeleteStudentById,} from "./../services/studentTable.js";
    // export const register = async (req, res) => {
  export const GetAllStudents= (req, res) => {
    const studentList = QueryListOfStudents();
  
    // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
    return res.json(studentList);
  };

  
  export const GetStudent= (req, res) => {
    const studentId= req.params.id;
    const student = QueryStudentById(studentId);
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(student);
  };
  
  export const DeleteStudent = (req, res) => {
    const studentId = req.params.id;
    const student = DeleteStudentById(studentId);
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(student);
  };
  
//   module.exports = {
//     GetAllStudents,
//     GetStudent,
//     DeleteStudent,
//   };