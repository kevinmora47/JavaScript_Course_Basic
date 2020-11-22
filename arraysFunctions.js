// Walk an arragement.

// We define an object.
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "DVD", costo: 3000 },
    { nombre: "Celular", costo: 2500 }
];

// Then we define a function that to filter what we want.
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

// Returns: Television, Celular.

//----------------------------------------------------------------//

// Map Method.
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "DVD", costo: 3000 },
    { nombre: "Celular", costo: 2500 }
];

var map = articulos.map(function () {
    return articulos.nombre
});

// This will return only the name attribute of the array.


//----------------------------------------------------------------//

// Find method.

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "DVD", costo: 3000 },
    { nombre: "Celular", costo: 2500 }
];

var encuentraArticulo = articulos.find(function (articulo) {

    return articulo.nombre === "DVD"

});

//Retruns { nombre: "DVD", costo: 3000 }

//----------------------------------------------------------------//

// ForEach.
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "DVD", costo: 3000 },
    { nombre: "Celular", costo: 2500 }
];
articulos.forEach(function(articulo){

console.log(articulo.nombre)

});

// Returns names of the object.

//----------------------------------------------------------------//


