import app from './app';
import dotenv from 'dotenv';
import sequelize from './config/database';
import './models/employee'
dotenv.config();

const PORT = process.env.PORT || 3000;
async function initializeDatabase() {
    try {
        await sequelize.sync({force: false});
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to synchronize database', error);
    }
}

initializeDatabase();

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})