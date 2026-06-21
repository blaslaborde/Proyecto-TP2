import { Router } from 'express'
import userController from '../container/userContainer.js'
import {
  validateCreateUser,
  validateLogin,
  validateUserId,
} from '../middelware/userValidation.js'

const userRoutes = Router()

userRoutes.get('/:id', validateUserId, userController.getUserById)
userRoutes.post('/', validateCreateUser, userController.createUser)
userRoutes.put('/:id', validateUserId, userController.updateUser)
userRoutes.delete('/:id', validateUserId, userController.deleteUser)
userRoutes.post('/login', validateLogin, userController.login)

export default userRoutes
