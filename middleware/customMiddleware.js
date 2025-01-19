const requestLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers['user-agent'];
    console.log(`${timeStamp} ${method} ${url} ${userAgent}`);

    next();
}

const addTimeStamp = (req, res, next) => {
    console.log("addTimeStamp");
    req.timeStamp = new Date().toISOString();
    next();
}

module.exports = { requestLogger, addTimeStamp }