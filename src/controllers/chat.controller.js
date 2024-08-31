const chatService = require('../services/chat.service')

module.exports = (io, socket) => {
  socket.on('send-message', chatService.handleMessage(io))
}
