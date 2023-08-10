const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Definir la carpeta 'public' como directorio estático
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});