const express = require('express');
const router = express.Router();

const {
    getGreet,
    postGreet,
    putGreet,
    deleteGreet
} = require('../controllers/controllers');

router.get('/greet', getGreet)

router.post('/greet', postGreet)

router.put('/greet/:name', putGreet)

router.delete('/greet/:name', deleteGreet)


module.exports = router;