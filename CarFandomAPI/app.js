
const express = require('express');
const dotenv = require('dotenv');

const initiateDBConnection = require('./config/db');

const app = express();

app.use(express.json());

const customerrouter = require("./routes/Customer");

const carRouter = require ('./routes/Car');
const feedbackRouter = require ('./routes/Feedback');

const custServiceRouter = require ('./routes/CustomerService');
const postRouter = require ('./routes/Post');


dotenv.config({
  path: './config/.env'
});

const PORT = process.env.PORT;


app.use('/Customer', customerrouter);
app.use('/CustomerService', custServiceRouter);
app.use('/Post', postRouter);
app.use('/Feedback', feedbackRouter);
app.use('/Car', carRouter);
app.use(express.json());
app.listen(PORT, async () => {
  console.log(`server has been started as is listening to port ${PORT}`);
  await initiateDBConnection();
});
