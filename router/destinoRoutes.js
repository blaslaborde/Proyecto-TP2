import { Router } from 'express'
import {
  validateCreateDestino,
  validateDestinoId,
} from '../middelware/destinoValidation.js'
import destinoController from '../container/destinoContainer.js'
import { authRequired } from '../middelware/auth.js'

const destinoRoutes = Router()

destinoRoutes.get('/:id', validateDestinoId, destinoController.getDestinoById)

destinoRoutes.post('/', authRequired, validateCreateDestino, destinoController.createDestino)
destinoRoutes.put('/:id', authRequired, validateDestinoId, destinoController.updateDestino)
destinoRoutes.delete('/:id', authRequired, validateDestinoId, destinoController.deleteDestino)

export default destinoRoutes
