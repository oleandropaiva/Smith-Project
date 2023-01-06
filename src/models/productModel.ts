import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IAddProducts, IGetProducts } from '../interface/interface';

const productModel = {
  async addProducts(name:string, amount:string): Promise<IAddProducts> {
    const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
    const [result] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
    return { id: result.insertId, name, amount };
  },
  async listProducts(): Promise<IGetProducts[]> {
    const sql = 'SELECT id, name, amount, orderId FROM Trybesmith.products';
    const [result] = await connection.execute<RowDataPacket[]>(sql);
    return result as IGetProducts[];
  },
};

export default productModel;