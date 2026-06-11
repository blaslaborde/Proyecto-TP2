class UserController {
  constructor(userService) {
    this.userService = userService
  }

  getUserById = async (req, res) => {
    try {
      const { id } = req.params
      const user = await this.userService.getUserById(id)
      res.status(200).send({ success: true, message: user })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  createUser = async (req, res) => {
     console.log("req", req.body)
    try {
      const { username, email, password } = req.body
     
      const user = await this.userService.createUser({ username, email, password })
      res.status(200).send({ success: true, message: user })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  updateUser = async (req, res) => {
    try {
      const { id } = req.params
      const { name, email, password } = req.body
      const user = await this.userService.updateUser({
        id,
        username,
        email,
        password,
      })
      res.status(200).send({ success: true, message: user })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params
      const user = await this.userService.deleteUser(id)
      res.status(200).send({ success: true, message: user })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default UserController
