import express from 'express';
import morgan from 'morgan';
import router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser'


const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

// Routes
app.use('/api', router)


export default app;

