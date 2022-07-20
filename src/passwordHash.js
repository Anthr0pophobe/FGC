const bcrypt = require('bcryptjs')
const salt = "$2a$10$ZZ.Ezn7uC1KwvhjDeUyhIe"

export function hashValue(password) {
    const passwordHash = bcrypt.hashSync(password, salt)
    return passwordHash
}

export function isSameHashValue(passHash, password) {
    return bcrypt.compareSync(password, passHash)
}

