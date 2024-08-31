const userService = require('../services/user.service')
const decodeToken = require('../utils/decodeToken')

exports.createUser = async (req, res) => {
  try {
    const userIsCreated = await userService.createUser(req.body)

    if (!userIsCreated) {
      return res.status(409).json({ message: 'Email already used.' })
    }

    res.status(201).json({ message: 'User registered.' })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

exports.authenticateUser = async (req, res) => {
  const data = req.body

  try {
    const user = await userService.authenticateUser({
      email: data.email,
      password: data.password,
    })

    if (user) {
      res.status(201).json(user)
    } else {
      res.status(404).json({ message: 'User not found.' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.returnUserInformation = async (req, res) => {
  const [_, token] = req.headers.authorization.split(' ')

  const decodedToken = decodeToken(token)
  const id = decodedToken['sub']
  console.log('id: ', id)

  try {
    const userInfo = await userService.returnUserInformation(id)

    if (userInfo) {
      res.status(201).json(userInfo)
    } else {
      res.status(404).json({ message: 'There is no data.' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
