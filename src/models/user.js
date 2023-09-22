const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        trim: true
    },
    role: {
        type: String,
        required: [true, 'El rol es requerido'],
        trim: true,
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('usuario', userSchema)
