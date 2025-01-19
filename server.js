require('dotenv').config()
const express = require('express')
const { configureCors } = require('./config/corsConfig')
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware')
const { globalErrorHanlder } = require('./middleware/errorHandler')
const { urlVersioning } = require('./middleware/apiVersioning')
const { rateLimiter } = require('./middleware/rateLimiting')

const itemRoutes = require('./routes/item-routes.js')

const app = express()
const PORT = process.env.PORT

app.use(requestLogger)
app.use(addTimeStamp)
// app.use(configureCors)
app.use(rateLimiter(1, 60 * 1000))
app.use(express.json())


app.use(urlVersioning('v1'))

app.use('/api/v1', itemRoutes)
app.use(globalErrorHanlder)

app.listen(PORT, () => {
    console.log("Server is listening on PORT ", PORT);

})