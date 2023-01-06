import { ResultSetHeader,
  // RowDataPacket
} from 'mysql2';
import connection from './connection';

const TABLE_USER = 'Trybesmith.users';

const userModel = {
  async addUser(username:string, vocation:string, level:number, password:string) {
    const sql = `INSERT INTO ${TABLE_USER} (username, vocation, level, password) VALUES (?,?,?,?)`;
    const [result] = await connection.execute<ResultSetHeader>(
      sql,
      [username, vocation, level, password],
    );
    return { id: result.insertId };
  },
};

export default userModel;

// { 
//   "username": "MAX",
//   "vocation": "swordsman",
//   "level": 10,
//   "password": "SavingPeople"
// }