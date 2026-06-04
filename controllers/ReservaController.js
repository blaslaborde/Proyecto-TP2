class ReservaController {
  constructor(reservaService) {
    this.reservaService = reservaService
  }
  getReservaById = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const reserva = await this.reservaService.getReservaById(numeroDeReserva)
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  createReserva = async (req, res) => {
    try {
      const { fechaInicio, fechaFin, cantPersonas, importeTotal } = req.body
      const reserva = await this.reservaService.createReserva({
        fechaInicio,
        fechaFin,
        cantPersonas,
        importeTotal,
      })
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  updateReserva = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const { fechaInicio, fechaFin, cantPersonas, importeTotal } = req.body
      const reserva = await this.reservaService.updateReserva({
        numeroDeReserva,
        fechaInicio,
        fechaFin,
        cantPersonas,
        importeTotal,
      })
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
  deleteReserva = async (req, res) => {
    try {
      const { numeroDeReserva } = req.params
      const reserva = await this.reservaService.deleteReserva(numeroDeReserva)
      res.status(200).send({ success: true, message: reserva })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default ReservaController
