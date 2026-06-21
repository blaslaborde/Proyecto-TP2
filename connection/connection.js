import { Sequelize } from 'sequelize'
import {
  DB_HOST,
  DB_DIALECT,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from '../config/config.js'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
})

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export default sequelize
