import { Router } from 'express'
import { startBroadcastHandler } from '../handlers/broadcast.handler.js'

const router = Router()

router.post('/start-broadcast', startBroadcastHandler)

export default router
