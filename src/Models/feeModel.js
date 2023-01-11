import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const feeSchema = new Schema({
    fee_type: [
        {
            registration:{
                type: String,
                required: true
            },
            otherCharges:{
                type: Number,
                required: true
            },
            school_fees:{
                type: Number,
                required: true
            }
        }
    ],
    fee_amount:{
        type: Number,
        required: true
    }
}, {timestamps: true});