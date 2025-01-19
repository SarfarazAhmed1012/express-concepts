const rateLimit = require('express-rate-limit')

const rateLimiter = (maxRequests, time) => {
    return rateLimit({
        windowMs: time,
        max: maxRequests,
        message: 'Too many requests from this IP, please try again later.',
        standardHeaders: true,
        legacyHeaders: false
    })
}

module.exports = { rateLimiter }