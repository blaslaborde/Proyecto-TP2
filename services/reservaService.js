class ReservaService {
  constructor(reserva, destinoService) {
    this.reserva = reserva
    this.destinoService = destinoService
  }
  getReservaByNumeroDeReserva = async (numeroDeReserva) => {
    const reserva = await this.reserva.findOne({
      where: { numeroDeReserva },
      attributes: [
        'numeroDeReserva',
        'fechaInicio',
        'fechaFin',
        'cantPersonas',
        'importeTotal',
      ],
    })
    return reserva
  }
  createReserva = async ({ cantPersonas, destinoId, userId }) => {
    const destino = await this.destinoService.getDestinoById(destinoId)
    const fechaInicio = destino.fechaPartida
    const fechaFin = new Date(fechaInicio)
    fechaFin.setDate(fechaFin.getDate() + destino.duracion)
    const importeTotal = cantPersonas * destino.precio

    const reserva = await this.reserva.create({
      fechaInicio,
      fechaFin,
      cantPersonas,
      importeTotal,
      DestinoId: destinoId,
      UserId: userId,
    })
    return reserva
  }
  updateReserva = async ({ numeroDeReserva, cantPersonas }) => {
    const reserva = await this.reserva.findOne({ where: { numeroDeReserva } })
    if (!reserva) {
      return null
    }

    const destino = await this.destinoService.getDestinoById(reserva.DestinoId)
    const importeTotal = cantPersonas * destino.precio

    await reserva.update({ cantPersonas, importeTotal })
    return reserva
  }
  deleteReserva = async (numeroDeReserva) => {
    return await this.reserva.destroy({ where: { numeroDeReserva } })
  }
}

export default ReservaService
