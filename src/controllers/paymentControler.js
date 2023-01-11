import mongoose from "mongoose";
import {paymentSchema} from "../Models/paymentModel";

const payment = mongoose.model('payment', paymentSchema);

export const addNewPayment = (req, res) => {
    let newPayment = new payment(req.body);
    newPayment.save((err, paymaent) => {
        if(err){
            res.send(err);
        }
        res.json(paymaent);
    });
}

export const getAllPayment = (req, res) => {
    payment.find({},(err, paymaent) => {
        if(err){
            res.send(err);
        }
        res.json(paymaent);
    });
}


export const updatePayment = (req, res) => {
    payment.findOneAndUpdate({_id: req.params.paymentID}, req.body, {new: true, useFndAndModify: false}, (err, paymaent) => {
        if(err){
            res.send(err);
        }
        res.json(paymaent);
    });
}


export const deletePayment = (req, res) => {
 
    payment.remove({_id: req.params.paymentID},(err, paymaent) => {
        if(err){
            res.send(err);
        }
        res.json({ message: "Data deleted successfully!!"});
    });
}