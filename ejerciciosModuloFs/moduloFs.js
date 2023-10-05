// CREAR UN ARCHIUVO .TXT
const  fs  = require('fs');


// Ejercicio 1:

// fs.writeFile('nuevoArchivo.txt', "hola mundo", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// }); 



//Ejercicio 2:


// fs.readFile('nuevoArchivo.txt', function (err, data) {
//   console.log(data.toString());
// }); 



//Ejericicio 3:
fs.appendFile('nuevoArchivo.txt','contenido actualizado',function (err, data) {
       console.log(data.toString());    
})