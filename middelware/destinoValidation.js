export const validateCreateDestino = (req, res, next) => {
  const {
    nombre,
    pais,
    descripcion,
    precio,
    cupoMaximo,
    fechaPartida,
    duracion,
  } = req.body ?? {}

  if (
    !nombre ||
    !pais ||
    !descripcion ||
    !precio ||
    !cupoMaximo ||
    !fechaPartida ||
    !duracion
  ) {
    return res.status(400).send({
      success: false,
      message: 'Todos los campos son obligatorios',
    })
  }

  if (
    typeof nombre !== 'string' ||
    typeof pais !== 'string' ||
    typeof descripcion !== 'string'
  ) {
    return res.status(400).send({
      success: false,
      message: 'nombre, pais y descripcion deben ser strings',
    })
  }

  if (typeof precio !== 'number' || precio < 0) {
    return res.status(400).send({
      success: false,
      message: 'precio debe ser un numero no negativo',
    })
  }

  if (
    !Number.isInteger(cupoMaximo) ||
    cupoMaximo <= 0 ||
    !Number.isInteger(duracion) ||
    duracion <= 0
  ) {
    return res.status(400).send({
      success: false,
      message: 'cupoMaximo y duracion deben ser enteros positivos',
    })
  }

  if (typeof fechaPartida !== 'string' || isNaN(Date.parse(fechaPartida))) {
    return res.status(400).send({
      success: false,
      message: 'fechaPartida debe ser una fecha ISO valida',
    })
  }

  next()
}

export const validateDestinoId = (req, res, next) => {
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
