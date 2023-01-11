import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const paymentHistorySchema = new Schema({
    paymentId:{
        type: String,
        reqired: true
    },
    status: [
        {
            paid:{
                type: String,
                required: true
            },
            NotPaid: {
                type: String,
                required: true
            }
        }
    ],
    updatedDate:{
        type: Date,
        default: Date.now
    }
}, {timestamps: true});