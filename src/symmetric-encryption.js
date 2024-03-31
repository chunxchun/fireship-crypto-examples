const { randomBytes, createCipheriv, createDecipheriv } = require("crypto")

const message = 'hello crypto'
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex')
console.log(`Encrypted: ${encryptedMessage}`)

// decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8')
console.log(`Deciphered: ${decryptedMessage.toString('utf8')}`);