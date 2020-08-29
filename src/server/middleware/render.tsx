import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';


const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const htmlReplacements: StringMap = {
    HTML_CONTENT: '',
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
