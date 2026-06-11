import { Reserva } from '../Models/index.js'
import ReservaService from '../services/reservaService.js'
import ReservaController from '../controllers/ReservaController.js'

const reservaService = new ReservaService(Reserva)
const reservaController = new ReservaController(reservaService)

export default reservaController
