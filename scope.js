var miNombre = "Kevin";

function nombre(){
var ape = "Mora";
console.log(miNombre + " " + ape);
}

nombre();

// **Veamos el siguiente ejemplo:**
// En este caso como vemos tenemos en cuenta los 2 scope, en este ejemplo las variables globales se pueden acceder por medio de un scope local, pero no podemos hacer lo contrario, ya que no tenemos el alcance necesario para poder acceder a variables de un scope local desde uno global, por esto no brinda la alerta de undefined.