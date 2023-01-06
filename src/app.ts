import express from 'express';
import productController from './controllers/productController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());
app.post('/products', productController.addProducts);
app.get('/products', productController.listProducts);
app.post('/users', userController.addUser);

export default app;
