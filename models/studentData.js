import mongoose, { Mongoose } from "mongoose";
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      admno: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      course: {
        type: String,
        required:true,
      },
      
    }, {timestamps:true});
    
    const Student= mongoose.model("Student", studentSchema);
    export default Student