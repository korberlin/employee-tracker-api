import express from 'express';
import apiRoutes from './routes/apiRoutes'
import sequelize from './config/database';

const app = express();
// Using express.json to parse req body
app.use(express.json());

async function connectSequelize() {
    try {
        await sequelize.authenticate();
        console.log('connection established to the database');
    }catch (error) {
        console.error('unable to connect database:', error);
    }
}

connectSequelize();
app.use('/api/v1', apiRoutes);
app.use('/', (req, res) => {
    console.log(req)
    res.send('Index is working');
})


export default app;