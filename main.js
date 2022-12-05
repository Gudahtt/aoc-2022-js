const fs = require('fs')
const { join } = require('path')

const file = fs.readFileSync(join(__dirname, './input.txt'), 'utf8')
const inputs = file.split('\n')

// put solution below this line