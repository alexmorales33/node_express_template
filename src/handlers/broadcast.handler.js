import { startBroadcast } from '../controllers/broadcast.controller.js'

export const startBroadcastHandler = async (req, res, next) => {
  try {
    const options = req.body
    const result = await startBroadcast(options)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
