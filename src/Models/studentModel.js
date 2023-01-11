import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const studentSchema = new Schema({
    firstName:{
        type: String,
        required:  true
    },
    lastName: {
        type: String,
        required: true
    },
    studentId:{
        type: String,
        require: true
    }
}, {timeseries: true});