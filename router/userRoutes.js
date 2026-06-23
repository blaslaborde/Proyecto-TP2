import { Router } from 'express'
import userController from '../container/userContainer.js'
import {
  validateCreateUser,
  validateLogin,
  validateUserId,
} from '../middelware/userValidation.js'
import { authRequired, ownUserOnly } from '../middelware/auth.js'

const userRoutes = Router()

userRoutes.post('/', validateCreateUser, userController.createUser)
userRoutes.post('/login', validateLogin, userController.login)

userRoutes.get(
  '/:id',
  authRequired,
  validateUserId,
  ownUserOnly,
  userController.getUserById,
)
userRoutes.put(
  '/:id',
  authRequired,
  validateUserId,
  ownUserOnly,
  userController.updateUser,
)
userRoutes.delete(
  '/:id',
  authRequired,
  validateUserId,
  ownUserOnly,
  userController.deleteUser,
)

export default userRoutes
