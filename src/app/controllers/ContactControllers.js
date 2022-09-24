const { response } = require('express');
const ContactRepository = require('../repositories/ContactRepository')


class ContactControllers {
    async index(request, response) {
        //listar todos os registros
        const contacts = await ContactRepository.findAll()

        response.json(contacts)
    }

    async show(request, response) {
        //obter um registro
        const { id } = request.params
        const contact = await ContactRepository.findById(id)

        if(!contact) {
            // 404: not found
            return response.status(404).json({ error: 'User not found'})
        }

        response.json(contact)
    }

    async store(request, response) {
        //criar novo registro
        const { name, email, phone, category_id } = request.body

        if(!name) {
            return response.status(400).json({ error: 'Name is required'})
        }
        
        const contactExists = await ContactRepository.findByEmail(email)

        if(contactExists) {
            return response.status(400).json({ error: 'This email is already been taken'})
        }

        const contact = await ContactRepository.create({
            name, 
            email, 
            phone, 
            category_id,
        })

        response.json(contact)
    }

    update() {
        //editar um registro
        
    }

    async delete(request, response) {
        //deletar um registro
        const { id } = request.params
        const contact = await ContactRepository.findById(id)

        if(!contact) {
            // 404: not found
            return response.status(404).json({ error: 'User not found'})
        }

        await ContactRepository.delete(id)
        // 204: not content
        response.sendStatus(204)
    }
}

module.exports = new ContactControllers()