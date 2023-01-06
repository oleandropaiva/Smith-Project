import { Request, Response } from 'express';
import ordersService from '../services/orderService';

const ordersController = {
  async listOrders(_req:Request, res:Response) {
    const { code, data } = await ordersService.listOrders();
    return res.status(code).json(data);
  },
};

export default ordersController;