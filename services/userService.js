class UserService {
  constructor(user) {
    this.user = user
  }

  getUserById = async (id) => {
    const user = await this.user.findOne({
      where: { id },
      attributes: ['username', 'email'],
    })
    return user
  }
  createUser = async ({ username, email, password }) => {
    const user = await this.user.create({
      username,
      email,
      password,
    })
    return user
  }
  updateUser = async ({ id, username, email, password }) => {
    const user = await this.user.findOne({ where: { id } })
    if (!user) {
      return null
    }

    await user.update({ username, email, password })
    return user
  }
  deleteUser = async (id) => {
    return await this.user.destroy({ where: { id } })
  }

  login = async ({ email, password }) => {
    const user = await this.user.findOne({
      where: { email },
      attributes: ['id', 'username', 'email', 'password'],
    })
    if (!user) throw new Error('User not found')

    const validPassword = await user.validatePassword(password)
    if (!validPassword) throw new Error('Invalid password')

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    }
  }
}

export default UserService
