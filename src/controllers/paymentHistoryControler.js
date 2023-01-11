import mongoose from "mongoose";
import {paymentHistorySchema} from "../Models/paymentHistoryModel";

const paymentHistory = mongoose.model('paymentHistory', paymentHistorySchema);

export const addNewPaymentHistory = (req, res) => {
    let newPaymntHistory = new paymentHistory(req.body);
    newPaymntHistory.save((err, paymentHistory) => {
        if(err){
            res.send(err);
        }
        res.json(paymentHistory);
    });
}

export const getAllPaymentHistory = (req, res) => {
   paymentHistory.find({}, (err, paymentHistory) => {
        if(err){
            res.send(err);
        }
        res.json(paymentHistory);
    });
}

export const updatePaymentHistory = (req, res) => {
    paymentHistory.findOneAndUpdate({_id: req.params.fee_paymentHistoryID}, req.body, {new: true, useFindAndModify: false}, (err, paymentHistory) => {
         if(err){
             res.send(err);
         }
         res.json(paymentHistory);
     });
 }

 export const deetePaymentHistory = (req, res) => {
    paymentHistory.remove({_id: req.params.fee_paymentHistoryID}, (err, paymentHistory) => {
         if(err){
             res.send(err);
         }
         res.json({message: 'Data Deleted uccessfully!!'});
     });
 }

