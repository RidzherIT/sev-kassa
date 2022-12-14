const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const consaltRouter = require('./router/consaltRouter');
const feedbackRouter = require('./router/feedbackRouter');
const orderRouter = require('./router/orderRouter');
const productRouter = require('./router/productRouter');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/consalt', consaltRouter);
app.use('/feedback', feedbackRouter);
app.use('/order', orderRouter);
app.use('/product', productRouter);
app.listen(PORT, () => `Server started on PORT: ${PORT}`);