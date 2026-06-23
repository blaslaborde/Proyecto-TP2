import express from 'express'
import cookieParser from 'cookie-parser'
import sequelize from './connection/connection.js'
import './Models/index.js'
import router from './router/router.js';
import { SERVER_PORT, SERVER_HOST} from './config/config.js';

const app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(cookieParser())
await sequelize.sync({ alter: true })

app.use(router);
const PORT = SERVER_PORT || 8080
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`)
  console.log(`Accede en: ${SERVER_HOST}:${PORT}`)
})
