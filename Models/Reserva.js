import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection/connection.js'

class Reserva extends Model {}

Reserva.init(
  {
    numeroDeReserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        isInt: { msg: 'El número de reserva debe ser un número entero' },
        min: { args: [1], msg: 'El número de reserva debe ser mayor a 0' },
      },
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'La fecha de inicio debe ser una fecha valida' },
      },
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'La fecha de fin debe ser una fecha valida' },
      },
    },
    cantPersonas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: 'La cantidad de personas tiene que ser mayor a 0',
        },
      },
    },
    importeTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: { msg: 'El importe tiene que ser un numero' },
        min: { args: [1], msg: 'El importe tiene que ser mayor a 1' },
      },
    },
  },
  {
    sequelize,
    modelName: 'Reserva',
  },
)

export default Reserva
