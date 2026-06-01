import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/connection.js";

class Destino extends Model {}

Destino.init({
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: { msg: "El nombre no puede estar vacio" },
        },
    },
    pais: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: { msg: "El pais no puede estar vacio" },
        },
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: { msg: "La imagen debe ser una URL valida" },
        },
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: { msg: "El precio debe ser un numero" },
            min: { args: [0], msg: "El precio no puede ser negativo" },
        },
    },
    cupoMaximo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "El cupo debe ser un numero entero" },
            min: { args: [1], msg: "El cupo debe ser al menos 1" },
        },
    },
    fechaPartida: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: { msg: "La fecha de partida debe ser una fecha valida" },
        },
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "La duracion debe ser un numero entero" },
            min: { args: [1], msg: "La duracion debe ser al menos 1 dia" },
        },
    },
}, {
    sequelize,
    modelName: "Destino",
})

export default Destino;
