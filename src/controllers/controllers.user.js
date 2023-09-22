const usuario = require('../models/user');
const jwt = require('jsonwebtoken');


//crear usuario
exports.createUser = async (req, res) => {
    try {
        const { name, enpmail, password, role } = req.body;
        const newUser = new usuario({ name, email, password, role });
        await newUser.save();
        return res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
};

//obtener usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await usuario.find();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
};



//iniciar sesion con jwt
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usuario.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretKey'); // Genera un token seguro

        return res.status(200).json({
            message: 'Inicio de sesión correcto',
            token,
            user: {
                _id: user._id,
                email: user.email,
                rol: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un error en el servidor' });
    }
};

