const cors = require('cors')

const configureCors = () => {
    return cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:3000',
                'http://some_local_domain.com'
            ]

            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
        exposedHeaders: ['X-Total-Count', 'Content-Range'],
        credentials: true, // enable support for cookies
        preflightContinue: false,
        maxAge: 600, // preflight requests cache for 10 minutes (in simple terms: maxAge is the number of seconds a preflight request can be reused. (next question: what is a preflight request? It's a request that is sent before the actual request is sent to the server, and it's used to check if the server supports certain HTTP methods and headers.))
        optionsSuccessStatus: 204
    })
}

module.exports = { configureCors }