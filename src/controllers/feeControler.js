import mongoose from "mongoose";
import {feeSchema} from "../Models/feeModel";

const fee = mongoose.model('fee', feeSchema);

export const addNewFees = (req, res) => {
    let newFee = new fee(req.body);
    newFee.save((err, fee) =>{
        if(err){
            res.send(err);
        }
        res.json(fee);
    });
}

export const getAllFees = (req, res) => {
    fee.find({}, (err, fee) => {
        if(err){
            res.send(err);
        }
        res.json(fee);
    })
}

export const updateFees = (req, res) => {
    fee.findOneAndUpdate({_id: req.params.feeID}, req.body, {new: true, useFindAndModify: false}, (err, fee) => {
        if(err){
            res.send(err);
        }
        res.json(fee);
    })
}

export const deleteFees = (req, res) => {
    fee.findOneAndUpdate({_id: req.params.feeID}, (err, fee) => {
        if(err){
            res.send(err);
        }
        res.json({ message: "Dated deleted successfully!!"});
    });
}