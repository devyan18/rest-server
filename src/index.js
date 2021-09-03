const express = require('express')
const app = express()
const morgan = require('morgan')
require('./database')

app.use(express.json())
app.use(morgan('dev'))

app.set('port', process.env.PORT || 4000)

app.use('/notes', require('./routes/notes.routes'))


app.listen(app.get('port'), () => {
  console.log(`Serve on port http://localhost:${app.get('port')}`)
})