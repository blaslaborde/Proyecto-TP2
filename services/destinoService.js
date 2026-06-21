class DestionoService {
  constructor(destino) {
    this.destino = destino
  }

  getDestinoById = async (id) => {
    const destino = await this.destino.findOne({
      where: { id: parseInt(id) },
      attributes: [
        'nombre',
        'pais',
        'descripcion',
        'imagen',
        'precio',
        'cupoMaximo',
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
}

export default DestionoService
