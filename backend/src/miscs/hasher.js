const bcrypt = require('bcrypt')

const test = async () => {
    let result = await bcrypt.hash('bingchilling', 10)
    console.log(result)
}

test()