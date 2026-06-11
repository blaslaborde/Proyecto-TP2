import express from 'express'
import sequelize from './connection/connection.js'
import './Models/index.js'
import router from './router/router.js';

const app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
await sequelize.sync({ force: true })

app.use(router);
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`)
  console.log(`Accede en: http://localhost:${PORT}`)
})
