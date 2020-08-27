import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import v1 from './routes/v1';
import htmlMiddleware from './middleware/html';
import renderMiddleware from './middleware/render';

const publicPath = path.join(__dirname, '/public');
const app = express();

app.use(express.static(publicPath));
// app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(htmlMiddleware());
app.use(renderMiddleware());
app.use('/api/v1', v1);

export default app;
