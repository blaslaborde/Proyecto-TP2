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
    pais,
    descripcion,
    imagen,
    precio,
    cupoMaximo,
    fechaPartida,
    duracion,
  }) => {
    const destino = await this.destino.update(
      { pais, descripcion, imagen, precio, cupoMaximo, fechaPartida, duracion },
      {
        where: { nombre },
      },
    )
    return destino
  }
  deleteDestino = async (nombre) => {
    return await this.destino.destroy({ where: { nombre } })
  }
}

export default DestionoService
