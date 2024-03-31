const { createHash } = require('crypto')

function hash(str) { return createHash('sha256').update(str).digest('hex') }

let password = 'secret';
const hash1 = hash(password)
console.log('hash1', hash1)

password = 'secret2';
const hash2 = hash(password)
console.log('hash2', hash2)
const match = hash1 === hash2;

console.log(match ? 'match passwords' : 'unmatch passwords')