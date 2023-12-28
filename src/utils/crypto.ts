import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import config from '../config'


function hashPassword(password: string) {
    return bcrypt.hash(peperify(password), config.auth.saltRounds)
}

function peperify(password: string) {
    return crypto.createHmac('sha1', config.auth.secret)
      .update(password)
      .digest('hex')
}


export default {
    hashPassword
}