// importamos express y el cors
const express = require('express');
const cors = require('cors');

// creamos el servidor
const app = express();

// configuramos el servidor
app.use(cors());
app.use(express.json());

// creamos la ruta
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto http://localhost:3000');
});


