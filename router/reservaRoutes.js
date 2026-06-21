import { Router } from 'express'
import {
  validateCreateReserva,
  validateReservaId,
  validateUpdateReserva,
} from '../middelware/reservaValidation.js'
import reservaController from '../container/reservaContainer.js'

const reservaRoutes = Router()

reservaRoutes.get(
  '/:numeroDeReserva',
  validateReservaId,
  reservaController.getReservaByNumeroDeReserva,
)
reservaRoutes.post('/', validateCreateReserva, reservaController.createReserva)
reservaRoutes.put(
  '/:numeroDeReserva',
  validateReservaId,
  validateUpdateReserva,
  reservaController.updateReserva,
)
reservaRoutes.delete(
  '/:numeroDeReserva',
  validateReservaId,
  reservaController.deleteReserva,
)

export default reservaRoutes
