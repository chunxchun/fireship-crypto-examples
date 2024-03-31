const { createHmac } = require('crypto')

const password = 'secret'
const message = 'helloo crypto'

const hmac = createHmac('sha256', password).update(message).digest('hex')

console.log('hmac', hmac)