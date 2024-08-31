const jwt = require('jsonwebtoken')
const { database } = require('../database/inmemory-db')

const User = require('../models/user.model')

exports.createUser = async ({ name, email, password }) => {
  const userAlreadyExists = database.find((user) => user.email === email)

  if (userAlreadyExists) {
    return false
  }

  const newUser = User(name, email, password)

  database.push(newUser)

  console.log(database)

  return true
}

exports.authenticateUser = async ({ email, password }) => {
  const user = database.find((entity) => entity.email === email)

  if (!user) {
    return null
  }

  const passwordMatch = password === user?.password

  if (!passwordMatch) {
    return null
  }

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      subject: user.id,
      expiresIn: '24h',
    }
  )

  return { token }
}

exports.returnUserInformation = async (id) => {
  const user = database.find((user) => user.id === id)

  if (!user) {
    return null
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}
