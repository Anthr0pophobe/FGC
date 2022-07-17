const bcrypt = require('bcrypt')

export default function hashPassword(password) {
    return bcrypt.hash(password, 10).then((passHash) => {return passHash})
}
export default function isSamePassword(passHash, password) {
    return bcrypt.compare(passHash, password).then((result) => {return result})
}