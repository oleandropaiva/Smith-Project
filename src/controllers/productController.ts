import { Request, Response } from 'express';
import productService from '../services/productService';

const productController = {
  async addProducts(req:Request, res:Response) {
    const { name, amount } = req.body;
    const { code, data } = await productService.addProducts(name, amount);
    return res.status(code).json(data);
  },
  async listProducts(_req:Request, res:Response) {
    const { code, data } = await productService.listProducts();
    return res.status(code).json(data);
  },
};

export default productController;