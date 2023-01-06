import { Request, Response } from 'express';
import userService from '../services/userService';

const userController = {
  async addUser(req:Request, res:Response) {
    const { username, vocation, level, password } = req.body;
    const { code, data } = await userService.addUser(username, vocation, level, password);
    return res.status(code).json(data);
  },
};

export default userController;