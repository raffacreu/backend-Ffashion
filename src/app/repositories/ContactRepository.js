const { v4 } = require('uuid')

let contacts = [ 
{
    id: v4(),
    name: 'Rafael',
    email: 'rafael@gmail.com',
    phone: '123123123',
    category_id: v4(),
},
{
    id: v4(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    phone: '123123123',
    category_id: v4(),
},
]

class ContactRepository {
    findAll () {
        return new Promise((resolve) => resolve(contacts))
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contacts) => contacts.id == id)
        ))
    }

    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contacts) => contacts.email == email)
        ))
    }

    create({ 
        name, email, phone, category_id 
    }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            }
            contacts.push(newContact)
            resolve(newContact)
        })
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contacts) => contacts.id !== id)
            resolve(contacts)
        })
    }

}

module.exports = new ContactRepository()