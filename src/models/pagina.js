const mongoose = require('mongoose');

const paginaSchema = mongoose.Schema({
    categoria: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true
    },
    pagina: {
        type: String,
        required: [true, 'El titulo es requerido'],
        trim: true,
    },
    imagen: {
        type: String,
        required: [true, 'La imagen es requerida'],
        trim: true,
    },
    ruta: {
        type: String,
        required: [true, 'El link es requerido'],
        trim: true,
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('categoria', paginaSchema)
