import { User } from '../Models/index.js'
import UserService from '../services/userService.js'
import UserController from '../controllers/userController.js'

const userService = new UserService(User)
const userController = new UserController(userService)

export default userController
