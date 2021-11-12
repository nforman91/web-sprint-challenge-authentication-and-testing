const Jokes = require('../jokes/jokes-model')

async function checkUsernameFree (req, res, next) {
    const { username } = req.body
    const user = await Jokes.findBy({ username: username })
    if(user.length){
        next({ status: 422, message: 'username taken' })
    } else {
        next()
    }
}

module.exports = {
    checkUsernameFree,
    
}
