import { Router } from 'express'
import {
  validateCreateDestino,
  validateDestinoId,
} from '../middelware/destinoValidation.js'
import destinoController from '../container/destinoContainer.js'

const destinoRoutes = Router()

destinoRoutes.get('/:id', validateDestinoId, destinoController.getDestinoById)
destinoRoutes.put('/:id', validateDestinoId, destinoController.updateDestino)
destinoRoutes.post('/', validateCreateDestino, destinoController.createDestino)
destinoRoutes.delete('/:id', validateDestinoId, destinoController.deleteDestino)

export default destinoRoutes
