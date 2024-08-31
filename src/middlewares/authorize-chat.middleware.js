const jwt = require('jsonwebtoken')

module.exports = async (socket, next) => {
  const authToken = await socket.handshake.auth.token

  if (!authToken) {
    next(new Error('Missing token'))
  }

  try {
    jwt.verify(authToken, process.env.JWT_SECRET_KEY)

    return next()
  } catch (error) {
    next(error)
  }
}
