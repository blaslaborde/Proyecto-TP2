const express = require('express'); 
const app = express(); 

app.get('/',(req,res) =>{
    res.send("Hola soy blas")
});

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  console.log(`Accede en: http://localhost:${PORT}`);
});
