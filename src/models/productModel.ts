import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './conection';
import { IAddProducts } from '../interface/interface';

const productModel = {
  async addProducts(name:string, amount:string): Promise <IAddProducts> {

  }
}

export default productModel;