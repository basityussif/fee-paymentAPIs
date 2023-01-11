import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const paymentSchema = new Schema({
    userId:{
        type: String,
        rquired: true
    },
    feeId:{
        type: String,
        required: true
    },
    paymentMethod:[
        {
            creditCard: {
                type: String,
                required: true
            },
            bankAccount: {
                type: String,
                required: true
            },
            momo:{
                type: String,
                required: true
            }
        }
    ],
    paymentDate: {
        type: Date,
        default: Date.now
    },
    transactionId:{
        type: String,
        required: true
    }
}, {timestamps: true});