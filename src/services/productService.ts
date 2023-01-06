import productModel from '../models/productModel';

const productService = {
  async addProducts(name:string, amount:string) {
    const result = await productModel.addProducts(name, amount);
    return { code: 201, data: result };
  },
};

export default productService;