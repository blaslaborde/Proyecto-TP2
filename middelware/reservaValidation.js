export const validateCreateReserva = (req, res, next) => {
  const { cantPersonas, destinoId } = req.body ?? {}

  if (!cantPersonas || !destinoId) {
    return res.status(400).send({
      success: false,
      message: 'Todos los campos son obligatorios',
    })
  }

  if (!Number.isInteger(cantPersonas) || cantPersonas <= 0) {
    return res.status(400).send({
      success: false,
      message: 'cantPersonas debe ser un entero positivo',
    })
  }

  if (!Number.isInteger(destinoId) || destinoId <= 0) {
    return res.status(400).send({
      success: false,
      message: 'destinoId debe ser un entero positivo',
    })
  }
  next()
}

export const validateReservaId = (req, res, next) => {
  const { numeroDeReserva } = req.params
  const parsed = Number(numeroDeReserva)

  if (!Number.isInteger(parsed) || parsed <= 0) {
    return res.status(400).send({
      success: false,
      message: 'El numeroDeReserva debe ser un entero positivo',
    })
  }
  req.params.numeroDeReserva = parsed
  next()
}

export const validateUpdateReserva = (req, res, next) => {
  const { cantPersonas } = req.body ?? {}

  if (cantPersonas === undefined) {
    return res.status(400).send({
      success: false,
      message: 'Debe enviar cantPersonas para actualizar',
    })
  }

  if (!Number.isInteger(cantPersonas) || cantPersonas <= 0) {
    return res.status(400).send({
      success: false,
      message: 'cantPersonas debe ser un entero positivo',
    })
  }

  next()
}
