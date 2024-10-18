const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname)));

// Ruta para bisiesto.html
app.get('/bisiesto.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'bisiesto.html'));
});

// Ruta para conversor.html
app.get('/conversor.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'conversor.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});