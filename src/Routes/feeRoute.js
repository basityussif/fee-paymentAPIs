import {addNewStudent, getAllStudent, updateStudent, deleteStudent} from "../controllers/studentControler";
import {addNewFees, getAllFees, updateFees, deleteFees} from "../controllers/feeControler";
import {addNewPayment, getAllPayment, updatePayment, deletePayment} from "../controllers/paymentControler";
import {addNewPaymentHistory, getAllPaymentHistory, updatePaymentHistory, deetePaymentHistory} from '../controllers/paymentHistoryControler';



const route = (app) => {
  // fees payment route
    app.route('/v1/fee')
    .get(getAllFees)

    .post( addNewFees);

    app.route('/v1/fee/:fee-feeID')
    .put(updateFees)

    .delete(deleteFees);


    // student registration
    app.route('/v1/student')
    .get(getAllStudent )

    .post(addNewStudent );

    app.route('/v1/student/:studentID')
    .put(updateStudent)

    .delete( deleteStudent);

    // payment 
    app.route('/v1/payment')
    .get(getAllPayment)

    .post(addNewPayment);

    app.route('/v1/payment/:paymentID')
    .put( updatePayment)

    .delete(deletePayment);


    // paymenthistory

    app.route('/v1/fee-paymentHistory')
    .get(getAllPaymentHistory)

    .post(addNewPaymentHistory);

    app.route('/v1/fee-paymentHistory/:fee-paymentHistoryID')
    .put(updatePaymentHistory)

    .delete(deetePaymentHistory);
}

export default route;