const { v4: uuid } = require('uuid')

function User(name, email, password) {
  return {
    id: uuid(),
    name,
    email,
    password,
  }
}

module.exports = User
