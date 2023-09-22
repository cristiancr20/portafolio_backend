const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conexión exitosa con MongoDB'))
    .catch(err => console.error('Error al conectar con MongoDB:', err));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

const userRouter = require('./src/routers/routes');
app.use(userRouter);

