import express from 'express';
import apiRoutes from './routes/apiRoutes'
import swaggerSpec from './swagger';
import swaggerUi from 'swagger-ui-express';

const app = express();
// Using express.json to parse req body
app.use(express.json());

app.use('/api/v1', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


export default app;