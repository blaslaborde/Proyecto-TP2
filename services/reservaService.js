class ReservaService {
  constructor(reserva, destinoService) {
    this.reserva = reserva
    this.destinoService = destinoService
  }
  getReservaByNumeroDeReserva = async ({ numeroDeReserva, userId }) => {
    const reserva = await this.reserva.findOne({
      where: { numeroDeReserva },
      attributes: [
        'numeroDeReserva',
        'fechaInicio',
        'fechaFin',
        'cantPersonas',
        'importeTotal',
        'UserId',
      ],
    })
    if (!reserva) return null
    if (reserva.UserId !== userId) throw new Error('No autorizado')
    return reserva
  }
  createReserva = async ({ cantPersonas, destinoId, userId }) => {
    const destino = await this.destinoService.getDestinoById(destinoId)
    if (!destino) throw new Error('Destino no encontrado')

    await this.destinoService.reservarCupo(destinoId, cantPersonas)

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
  updateReserva = async ({ numeroDeReserva, cantPersonas, userId }) => {
    const reserva = await this.reserva.findOne({ where: { numeroDeReserva } })
    if (!reserva) return null
    if (reserva.UserId !== userId) throw new Error('No autorizado')

    const destino = await this.destinoService.getDestinoById(reserva.DestinoId)
    const delta = cantPersonas - reserva.cantPersonas

    if (delta > 0) {
      await this.destinoService.reservarCupo(reserva.DestinoId, delta)
    } else if (delta < 0) {
      await this.destinoService.liberarCupo(reserva.DestinoId, -delta)
    }

    const importeTotal = cantPersonas * destino.precio
    await reserva.update({ cantPersonas, importeTotal })
    return reserva
  }
  deleteReserva = async ({ numeroDeReserva, userId }) => {
    const reserva = await this.reserva.findOne({ where: { numeroDeReserva } })
    if (!reserva) return null
    if (reserva.UserId !== userId) throw new Error('No autorizado')

    await this.destinoService.liberarCupo(
      reserva.DestinoId,
      reserva.cantPersonas,
    )
    await reserva.destroy()
    return true
  }
}

export default ReservaService
