import expres from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./src/Routes/feeRoute.js";

const app = expres();
const PORT = 8082;

app.get('/', (req, res) =>{
    res.send(`Nodemon and express app running on port ${PORT}`);
});

//Mongoose
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FPdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//BodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//route
route(app);

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});
