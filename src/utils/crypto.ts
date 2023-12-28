import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken'
import config from '../config'


const signOptions: SignOptions = {
    algorithm: config.auth.createOptions.algorithm, 
    expiresIn: config.auth.createOptions.expiresIn,
    issuer: `${config.auth.createOptions.issuer}.${config.server.environment}`
}


function hashPassword(password: string) {
    return bcrypt.hash(peperify(password), config.auth.saltRounds)
}

async function generateAccessToken(userId: string) {
    const payload = { userId }
     return jwt.sign(payload, config.auth.secret, signOptions)
}

function comparePasswords(candidatePassword:string, userPassword:string) {
    return bcrypt.compare(peperify(candidatePassword), userPassword)
}

function peperify(password: string) {
    return crypto.createHmac('sha1', config.auth.secret)
      .update(password)
      .digest('hex')
}


export default {
    generateAccessToken,
    hashPassword,
    comparePasswords
}