import jwt from 'jsonwebtoken';

function genToken(id:number):string {
  const token = jwt.sign({ id }, 'secret', { expiresIn: '30d' });
  return token;
}

export default genToken;