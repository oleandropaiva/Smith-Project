import express from 'express';
import productController from './controllers/productController';

const app = express();

app.use(express.json());
app.post('/products', productController.addProducts);

export default app;
