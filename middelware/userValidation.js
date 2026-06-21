export const validateCreateUser = (req, res, next) => {
  const { username, email, password } = req.body ?? {}

  if (!username || !email || !password) {
    return res.status(400).send({
      success: false,
      message: 'username, email y password son obligatorios',
    })
  }

  if (
    typeof username !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return res.status(400).send({
      success: false,
      message: 'username, email y password deben ser strings',
    })
  }

  next()
}

export const validateUserId = (req, res, next) => {
  const { id } = req.params
  const parsed = Number(id)

  if (!Number.isInteger(parsed) || parsed <= 0) {
    return res.status(400).send({
      success: false,
      message: 'El id debe ser un entero positivo',
    })
  }

  req.params.id = parsed
  next()
}

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body ?? {}

  if (!email || !password) {
    return res.status(400).send({
      success: false,
      message: 'email y password son obligatorios',
    })
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).send({
      success: false,
      message: 'email y password deben ser strings',
    })
  }

  next()
}
