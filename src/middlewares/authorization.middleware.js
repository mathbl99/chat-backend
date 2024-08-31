const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({
      message: 'Missing Token',
    })
  }

  const [_, token] = authToken.split(' ')

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY)

    return next()
  } catch (error) {
    return res.status(401).json({
      message: 'Token invalid',
    })
  }
}
