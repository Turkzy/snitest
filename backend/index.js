import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js';
import LoginRoute from './routes/LoginRoute.js';
import CategoryRoute from './routes/CategoryRoute.js';
import POSRoute from './routes/POSRoute.js';
import OtpRoute from './routes/OtpRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));

app.use(ProductRoute);
app.use(LoginRoute);
app.use(CategoryRoute);
app.use(POSRoute);
app.use(OtpRoute);

app.listen(5000, () => console.log('Server is Running...'));
