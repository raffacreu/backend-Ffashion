const { Router } = require('express')

const ContactControllers = require('./app/controllers/ContactControllers')

const router = Router()

router.get('/contacts', ContactControllers.index)

module.exports = router