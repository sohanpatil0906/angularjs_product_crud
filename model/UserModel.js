const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true},
    contact: {type: String, unique: true},
});

module.exports = mongoose.model('users', userSchema);