import { User } from '../Models/index.js'
import UserService from '../services/userService.js'
import UserController from '../controllers/UserController.js'

const userService = new UserService(User)
const userController = new UserController(userService)

export default userController
