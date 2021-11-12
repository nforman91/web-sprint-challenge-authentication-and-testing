const Jokes = require('../jokes/jokes-model')

function checkUsernamePasswordSent (req, res, next) {
    const { username, password } = req.body
        if(!username || !password) {
            next({ status: 422, message: 'username and password required' })
        } else {
            next()
        }
}

async function checkUsernameFree (req, res, next) {
    const { username } = req.body
    const user = await Jokes.findBy({ username })
    if(user.length){
        next({ status: 422, message: 'username taken' })
    } else {
        next()
    }
}

module.exports = {
    checkUsernamePasswordSent,
    checkUsernameFree,

}
