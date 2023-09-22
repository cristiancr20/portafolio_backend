
const page = require('../models/pagina');

//crer categoria
exports.createPagina = async (req, res) => {
    try {
        const { categoria, pagina, imagen, ruta } = req.body;
        const newPagina = new page({categoria, pagina, imagen, ruta });
        await newPagina.save();
        return res.status(201).json({ message: 'Pagina creada correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
}

//obtener categorias
exports.getPaginas = async (req, res) => {
    try {
        const paginas = await page.find();
        return res.status(200).json({ paginas });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
}

//obtener categoria por id
exports.getPaginaById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await categoria.findById(id);
        return res.status(200).json({ categoria });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
}

//actualizar categoria


