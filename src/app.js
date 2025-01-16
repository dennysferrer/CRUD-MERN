import express from 'express';
import morgan from 'morgan';
import routerAuth from './routes/auth.routes.js';
import routerTasks from './routes/task.routes.js';
import cookieParser from 'cookie-parser'


const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

// Routes
app.use('/api', routerAuth)
app.use('/api', routerTasks)


export default app;

