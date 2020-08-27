import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../../client/components/App';

const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const htmlContent = ReactDOMServer.renderToString(
    <Router location={req.url} context={{}}>
      <App />
    </Router>
  );
  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
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
