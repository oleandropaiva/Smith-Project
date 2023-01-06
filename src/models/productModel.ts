import { ResultSetHeader,
  // RowDataPacket
} from 'mysql2';
import connection from './conection';
import { IAddProducts } from '../interface/interface';

const productModel = {
  async addProducts(name:string, amount:string): Promise<IAddProducts> {
    const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
    const [result] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
    return { id: result.insertId, name, amount };
  },
};

export default productModel;