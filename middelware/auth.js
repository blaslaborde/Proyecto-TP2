import { verifyToken } from '../utils/jwt.js'

export const authRequired = (req, res, next) => {
  const token = req.cookies?.token

  if (!token) {
    return res.status(401).send({
      success: false,
      message: 'No autenticado',
    })
  }

  try {
    req.user = verifyToken(token)
    next()
  } catch {
    return res.status(401).send({
      success: false,
      message: 'Token inválido o expirado',
    })
  }
}

export const ownUserOnly = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).send({
      success: false,
      message: 'No autorizado',
    })
  }
  next()
}
