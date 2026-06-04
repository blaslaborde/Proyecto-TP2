import { Router } from 'express'
import reservaController from './container/reservaCointainer'

const reservaRoutes = Router()

reservaRoutes.get('/:id', reservaController.getReservaById)
reservaRoutes.post('/', reservaController.createResrva)
reservaRoutes.put('/:id', reservaController.updateReserva)
reservaRoutes.delete('/:id', reservaController.deleteReserva)

export default userRoutes
