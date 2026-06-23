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
      res.status(200).send({ success: true, message: `Usuario ${user.username} fue creado exitosamente`})
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  updateUser = async (req, res) => {
    try {
      const { id } = req.params
      const { username, email, password } = req.body
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

  login = async (req,res) =>{
    try{
      const { email, password } = req.body
      const token = await this.userService.login({ email, password })
      res.cookie("token", token);
      res.status(200).send({ success: true, message: "Login exitoso" })
    } catch (error){
      res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default UserController
