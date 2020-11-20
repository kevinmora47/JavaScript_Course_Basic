var estudiantes = ["Emily", "Andrey", "Sergio", "Daniel"];

function saludarEstudiantes(estudiante) {

    // console.log(`Hola ${estudiante}`);
    for (var i = 0; i < estudiantes.length; i++) {
        console.log("Hola!, " + estudiantes[i]);
    }

}


//Another way.
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}