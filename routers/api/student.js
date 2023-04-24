import { Router } from "express";
import{ GetAllStudents,
    GetStudent,
    DeleteStudent} from "../../controllers/student.js";
    // import {login, register}from "./../../controllers/user.js";
    const router = Router();
    router.get("/all", GetAllStudents);
router.get("/byId/:id", GetStudent);
router.delete("/:id", DeleteStudent);

export default router;