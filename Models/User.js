import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection/connection.js'
import bcrypt from 'bcrypt'

class User extends Model {
  validatePassword = async (password) =>{
    return await bcrypt.compare(password, this.password)
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'El nombre de usuario es obligatorio',
        },
        len: {
          args: [3, 50],
          msg: 'El nombre de usuario debe tener entre 3 y 50 caracteres',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'El email es obligatorio',
        },
        isEmail: {
          msg: 'Debe ingresar un email válido',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'La contraseña es obligatoria',
        },
        len: {
          args: [8, 100],
          msg: 'La contraseña debe tener al menos 8 caracteres',
        },
        isStrongPassword(value) {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,;:¿¡|]).+$/

          if (!regex.test(value)) {
            throw new Error(
              'La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales',
            )
          }
        },
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
)

const hashPassword = async (user) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
  }
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)


export default User
