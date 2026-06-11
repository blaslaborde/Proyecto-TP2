import { Router } from 'express'
import userRoutes from './userRoutes.js'
import destinoRoutes from './destinoRoutes.js'
import reservaRoutes from './reservaRoutes.js'

const router = Router()

router.use('/usuarios', userRoutes)
router.use('/reservas', reservaRoutes)
router.use('/destinos', destinoRoutes)

export default router
