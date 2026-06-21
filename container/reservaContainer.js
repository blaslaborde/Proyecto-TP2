import { Reserva } from '../Models/index.js'
import ReservaService from '../services/reservaService.js'
import ReservaController from '../controllers/ReservaController.js'
import { destinoService } from './destinoContainer.js'

const reservaService = new ReservaService(Reserva, destinoService)
const reservaController = new ReservaController(reservaService)

export default reservaController
