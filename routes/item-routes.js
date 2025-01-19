const { asyncHandler, APIError } = require('../middleware/errorHandler');
const express = require('express')
const router = express.Router()

const items = [
    { id: 1, name: 'Bike', price: 100 },
    { id: 2, name: 'TV', price: 200 },
    { id: 3, name: 'Album', price: 10 },
    { id: 4, name: 'Book', price: 5 },
    { id: 5, name: 'Phone', price: 500 },
    { id: 6, name: 'Computer', price: 1000 },
    { id: 7, name: 'Keyboard', price: 25 },
    { id: 8, name: 'Mouse', price: 50 },
    { id: 9, name: 'Monitor', price: 200 },
    { id: 10, name: 'Laptop', price: 1000 },
    { id: 11, name: 'Table', price: 300 },
    { id: 12, name: 'Chair', price: 50 },
]

router.get(
    "/items",
    asyncHandler(async (req, res) => {
        console.log("items");
        res.json(items);
    })
);

router.post(
    "/items",
    asyncHandler(async (req, res) => {
        console.log("post items", req.body);
        if (!req.body.name || !req.body.price) {
            throw new APIError("name and price are required", 400);
        }
        const { name, price } = req.body;
        const id = items.length + 1;
        items.push({ id, name, price });
        res.json(items);
    })
)
module.exports = router