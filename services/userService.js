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
  updateUser = async ({ username, email, password }) => {
    const user = await this.user.update(
      { username, email, password },
      {
        where: { id },
      },
    )
    return user
  }
  deleteUser = async (id) => {
    return await this.user.destroy({ where: { id } })
  }
}

export default UserService
