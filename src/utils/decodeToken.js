const jwt = require('jsonwebtoken')

function decodeToken(token) {
  try {
    const decodedToken = jwt.decode(token)

    return decodedToken ? decodedToken : null
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}

module.exports = decodeToken
