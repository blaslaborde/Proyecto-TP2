class ReservaController {
  constructor(reservaService) {
    this.reservaService = reservaService
  }
  getReservaByNumeroDeReserva = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const reserva =
        await this.reservaService.getReservaByNumeroDeReserva(numeroDeReserva)
      if (!reserva) {
        return res
          .status(404)
          .send({ success: false, message: 'Reserva no encontrada' })
      }
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  createReserva = async (req, res) => {
    try {
      const { cantPersonas, destinoId, userId } = req.body
      const reserva = await this.reservaService.createReserva({
        cantPersonas,
        destinoId,
        userId,
      })
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  updateReserva = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const { cantPersonas } = req.body
      const reserva = await this.reservaService.updateReserva({
        numeroDeReserva,
        cantPersonas,
      })
      if (!reserva) {
        return res
          .status(404)
          .send({ success: false, message: 'Reserva no encontrada' })
      }
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  deleteReserva = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const deleted = await this.reservaService.deleteReserva(numeroDeReserva)
      if (!deleted) {
        return res
          .status(404)
          .send({ success: false, message: 'Reserva no encontrada' })
      }
      res.status(200).send({ success: true, message: 'Reserva eliminada' })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default ReservaController
