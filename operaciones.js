const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const data = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(data);

    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito.');
}

function leer() {
    const data = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(data);
    console.log(citas);
}

module.exports = { registrar, leer };
