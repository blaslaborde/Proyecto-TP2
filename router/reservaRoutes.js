import { Router } from 'express'
import reservaController from '../container/reservaContainer.js'

const reservaRoutes = Router()

reservaRoutes.get('/:id', reservaController.getReservaById)
reservaRoutes.post('/', reservaController.createReserva)
reservaRoutes.put('/:id', reservaController.updateReserva)
reservaRoutes.delete('/:id', reservaController.deleteReserva)

export default reservaRoutes
