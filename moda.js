const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

function calcularModa(lista) {
    
    const listaCount = {};

    lista.map(
        function (elemento) {
        if (listaCount[elemento]) {

                listaCount[elemento] += 1;
                
            } else {

                listaCount[elemento] = 1;
            }
        } 
    );

    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
        return a[1] - b[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
    
};
    
function calcularPromedioPonderado(notas){
    
        const multiplicacionNotaCredito = notas.map(function(notaObject) { 

        return notaObject.note * notaObject.credit;

    });

    const sumaMultNotaCredito = multiplicacionNotaCredito.reduce(function ( a, b) {

        return a + b;

    });

    const creditos = notas.map(function(notaObject) {

        return notaObject.credit;

    });

    const sumaCreditos = creditos.reduce(function ( a, b) {

        return a + b;

    });

    const promedioPonderado =  sumaMultNotaCredito / sumaCreditos;
    return promedioPonderado;
}






