export const startCapture = async () => {
  try {
    console.log('Capture started')
    return { message: 'Capture started' }
  } catch (error) {
    console.error('Error starting capture:', error)
    throw new Error('Error starting capture')
  }
}
