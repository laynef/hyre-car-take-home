import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';


const renderMiddleware = () => (req: Request, res: Response) => {
  res.send(req.html);
};

export default renderMiddleware;
