const {Schema, model, Model} = require('mongoose');

const contactSchema = new Schema({
    username: {type: 'string', required: true},
    email: {type: 'string', required: true},
    message: {type: 'string', required: true},
});

const Contact = new model('Contact', contactSchema);

module.exports = Contact;