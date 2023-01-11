# fee-paymentApis
this project is consists of only backend 
TECHNOLOGIES AND FRAMWORK USED
javascript(nodeJs and expressJs)
mongoose and mongodb
Containers like Docker 

this project is a system that is design for a school for their feepayment and some other systems 
but we didnt use any external api integration this is designed from scratch and modelled using schema and uml

#THE DATABSE DESIGN OR SCHEMA MODELLING 
this consists of the
1. fee
The fee constain some models or schema that are 
- id
- fee-type
- fee-amount
- state-date and end date

2. User
The user schema contains and i names it student because we are dealing with a school not a financial banks
- name
- email
- password
- billing address

3. Payment
The payment schema contains 
- userId
- feeId
- paymentMethods
- paymentAmount
- paymentDate
- transactionId but unfortunately am working on the transaction logic to be able to do transaction whwen the student has paid the fees

4.Payment History
The payment history contains
- paymentID
- status
- updatedDate

After that i deploy the backend to the ocker container


this is the monolithic design of the systems is a link so you can press and view the system
https://whimsical.com/UfiCScEBcmp7wgay2U9LCB@2Ux7TurymNGHwiWqnMu3




