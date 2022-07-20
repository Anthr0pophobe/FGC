const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

export function hashValue(password) {
    const passwordHash = bcrypt.hashSync(password, salt)
    return passwordHash
}

export function isSameHashValue(passHash, password) {
    return bcrypt.compareSync(password, passHash)
}

