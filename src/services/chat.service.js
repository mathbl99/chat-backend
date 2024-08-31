exports.handleMessage = (io) => {
  return (message) => {
    console.log(message)
    io.emit('receive-message', message)
  }
}
