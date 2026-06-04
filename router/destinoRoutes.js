import { Router } from 'express'
import destinoController from '../container/destinoContainer'

const destinoRoutes = Router()

destinoRoutes.get('/:id', destinoController.getDestinoById)
destinoRoutes.put('/:id', destinoController.updateDestino)
destinoRoutes.post('/', destinoController.createDestino)
destinoRoutes.delete('/:id', destinoController.deleteDestino)

export default destinoRoutes
