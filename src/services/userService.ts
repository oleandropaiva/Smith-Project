import userModel from '../models/userModel';
import genToken from './genToken';

const userService = {
  async addUser(username:string, vocation:string, level:number, password:string) {
    const { id } = await userModel.addUser(username, vocation, level, password);
    const token = genToken(id);
    return { code: 201, data: { token } };
  },
  // async listProducts() {
  //   const result = await userModel.listProducts();
  //   return { code: 200, data: result };
  // },
};

export default userService;