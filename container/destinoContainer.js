import { Destino } from '../Models/index.js'
import DestinoController from '../controllers/DestinoController.js'
import DestinoService from '../services/destinoService.js'

const destinoService = new DestinoService(Destino)
const destinoController = new DestinoController(destinoService)

export { destinoService }
export default destinoController
