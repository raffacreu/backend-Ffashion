const { Router } = require('express')

const ContactControllers = require('./app/controllers/ContactControllers')


const router = Router()


router.get('/contacts', ContactControllers.index)
router.get('/contacts/:id', ContactControllers.show)
router.delete('/contacts/:id', ContactControllers.delete)
router.post('/contacts', ContactControllers.store)
router.put('/contacts/:id', ContactControllers.update)

module.exports = router