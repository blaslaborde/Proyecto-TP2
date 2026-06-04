import { Router } from 'express'
import userRoutes from './userRoutes.js'
import roleRoutes from './roleRoutes.js'
import destinoRoutes from './destinoRoutes.js'

const router = Router()

router.use('/usuarios', userRoutes)
router.use('/reservas', reservaRoutes)
router.use('/destinos', destinoRoutes)

export default router
