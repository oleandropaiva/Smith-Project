import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IGetOrders } from '../interface/interface';

const TABLE_PRODUCTS = 'Trybesmith.products';
const TABLE_ORDERS = 'Trybesmith.orders';

const ordersModel = {
  async listOrders(): Promise<IGetOrders[]> {
    const sql = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM ${TABLE_ORDERS} AS o
    INNER JOIN ${TABLE_PRODUCTS} AS p
    ON o.id = p.order_id
    GROUP BY p.order_id
    ORDER BY o.user_id
    `;
    const [result] = await connection.execute<RowDataPacket[]>(sql);
    return result as IGetOrders[];
  },
};

export default ordersModel;
