import ordersModel from '../models/ordersModel';

const ordersService = {
  async listOrders() {
    const result = await ordersModel.listOrders();
    return { code: 200, data: result };
  },
};

export default ordersService;