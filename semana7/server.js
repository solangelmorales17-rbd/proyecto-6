const express = require('express');
const app = express();

// Middleware obligatorio para recibir y entender datos en formato JSON
app.use(express.json());

// Arreglo en memoria que actuará como base de datos temporal para los reportes
let reportes = [];

// Ruta GET: Permite consultar la lista de todos los reportes registrados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Permite registrar un nuevo reporte comunitario en la lista
app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1, // Genera un ID automático según el tamaño del arreglo
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Agrega el nuevo objeto reporte al arreglo en memoria
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

// El servidor se enciende y escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});