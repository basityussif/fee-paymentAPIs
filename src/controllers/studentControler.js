import mongoose from "mongoose";
import {studentSchema} from "../Models/studentModel";

const student = mongoose.model('student', studentSchema);

export const addNewStudent = (req, res) => {
    let newStudent = new student(req.body);
    newStudent.save((err, student) => {
        if(err){
            res.send(err);
        }
        res.json(student);
    });
}

export const getAllStudent = (req, res) => {
    student.find({}, (err, student) => {
        if(err){
            res.send(err);
        }
        res.json(student);
    });
}

export const updateStudent = (req, res) =>{
    student.findOneAndUpdate({_id: req.params.studentID}, req.body, {new: true, useFindAndModify: false}, (err,student) => {
        if(err){
            res.send(err);
        }
        res.json(student);
    });
}

export const deleteStudent = (req, res) => {
    student.remove({_id: req.params.studentID}, (err, student) =>{
        if(err){
            res.send(err);
        }
        res.json({ message: "Data deleted successfully!!"});
    });
}

