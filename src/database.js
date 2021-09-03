const mongoose = require('mongoose')

const URI = 'MONGODB=mongodb+srv://owo:P44C3BNWZphT5kOa@cluster0.eqerh.mongodb.net/notes'

mongoose.connect(URI)
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))
module.exports = mongoose