import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

const htmlMiddleware = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const publicPath = path.join(__dirname, '/public');
  req.html = fs.readFileSync(`${publicPath}/app.html`, { encoding: 'utf8' });
  next();
};

export default htmlMiddleware;
