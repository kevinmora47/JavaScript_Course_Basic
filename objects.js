// Sintaxis.

var objeto = {
    // Properties.
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020
};

// Objects with function.
var objeto = {
    // Properties.
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(this.marca+" "+this.annio);
    }
};

// Calling object method.
objeto.detalleDelAuto();