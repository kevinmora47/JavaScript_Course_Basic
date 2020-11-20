var estudiantes = ["Emily", "Andrey", "Sergio", "Daniel"];

function saludarEstudiante(estudiante) {

    while (estudiantes.length > 0) {
        console.log(`Hola, ${estudiantes}`)
        estudiantes.shift();    
    }

}