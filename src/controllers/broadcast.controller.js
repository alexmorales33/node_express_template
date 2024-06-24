import { startCapture } from '../services/puppeteer.service.js'

export const startBroadcast = async (options) => {
  try {
    const { url, ...captureOptions } = options
    const result = await startCapture(url, captureOptions)
    return result
  } catch (error) {
    console.error('Error starting broadcast:', error)
    throw new Error('Error starting broadcast')
  }
}
