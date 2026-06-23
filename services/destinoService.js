class DestionoService {
  constructor(destino) {
    this.destino = destino
  }

  getDestinoById = async (id) => {
    const destino = await this.destino.findOne({
      where: { id: parseInt(id) },
      attributes: [
        'id',
        'nombre',
        'pais',
        'descripcion',
        'imagen',
        'precio',
        'cupoMaximo',
        'cupoOcupado',
        'fechaPartida',
        'duracion',
      ],
    })
    return destino
  }
  createDestino = async ({
    nombre,
    pais,
    descripcion,
    imagen,
    precio,
    cupoMaximo,
    fechaPartida,
    duracion,
  }) => {
    const destino = await this.destino.create({
      nombre,
      pais,
      descripcion,
      imagen,
      precio,
      cupoMaximo,
      fechaPartida,
      duracion,
    })
    return destino
  }
  updateDestino = async ({
    id,
    nombre,
    pais,
    descripcion,
    imagen,
    precio,
    cupoMaximo,
    fechaPartida,
    duracion,
  }) => {
    const destino = await this.destino.findOne({ where: { id } })
    if (!destino) {
      return null
    }

    await destino.update({
      nombre,
      pais,
      descripcion,
      imagen,
      precio,
      cupoMaximo,
      fechaPartida,
      duracion,
    })
    return destino
  }
  deleteDestino = async (id) => {
    return await this.destino.destroy({ where: { id } })
  }

  reservarCupo = async (id, cantidad) => {
    const destino = await this.destino.findOne({ where: { id } })
    if (!destino) throw new Error('Destino no encontrado')

    const disponible = destino.cupoMaximo - destino.cupoOcupado
    if (cantidad > disponible) {
      throw new Error(`Cupo insuficiente. Disponible: ${disponible}`)
    }

    await destino.increment('cupoOcupado', { by: cantidad })
  }

  liberarCupo = async (id, cantidad) => {
    await this.destino.decrement('cupoOcupado', {
      by: cantidad,
      where: { id },
    })
  }
}

export default DestionoService
