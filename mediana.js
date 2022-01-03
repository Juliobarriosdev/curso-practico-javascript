const lista1 = [
    100,
    200,
    500,
    400000000,
];
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemnto) {
            return valorAcumulado + nuevoElemnto;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function esPar(numero) {

    if (numero % 2 === 0) {   
        return true;
    } else {
        return false;
    }
}

function calcularMediana (lista) {

    const listaOrdenada = lista.sort((a, b) => a -b);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;
    
    if (esPar(listaOrdenada.length)) {  
        const elemeno1 = listaOrdenada[mitadLista - 1];
        const elemeno2 = listaOrdenada[mitadLista];
    
        const promedioElemto1y2 = calcularMediaAritmetica([  
            elemeno1,
            elemeno2
        ]);
    
        mediana = promedioElemto1y2;
        return mediana;
    
    } else {
        mediana = lista[mitadLista];
        return mediana;
    };
};

calcularMediana (lista1);