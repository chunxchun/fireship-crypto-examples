const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {
    const salt = randomBytes(16);
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user;
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':')
    const hashedBuffer = scryptSync(password, salt, 64)

    const keyBuffer = Buffer.from(key, 'hex')
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    return match ? 'login success' : 'login fail';
}

const users = [];
const user = signup('user@mail.com', 'password');
console.log(user);

const result = login('user@mail.com', 'password');
console.log(result);