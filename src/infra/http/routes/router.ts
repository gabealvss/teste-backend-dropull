import { Router } from 'express'
import { AssetRouter } from './asset.routes'

const router = Router()

router.use('/asset', AssetRouter)

export { router }