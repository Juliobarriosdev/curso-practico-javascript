//Helpers
function esPar(numero) {

    return (numero % 2 === 0);

};

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemnto) {
            return valorAcumulado + nuevoElemnto;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}


function medianaSalarios(lista) {

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 =   lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

function calcularMedianaSalarios (lista) {
    const salariosVE = lista.map (
        function (persona) { 
            return persona.salary;
        }
    );

    //Mediana General

    const salariosVeSorted = salariosVE.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );

    //Mediana Top 10%

    const spliceStar = (salariosVeSorted.length * 90) / 100;
    const spliceCount = salariosVeSorted.length - spliceStar;
    
    const salariosVeTop10 = salariosVeSorted.splice(
        spliceStar,
        spliceCount,
    );
    
    //Resultado mediana general y top 10%
    
    const medianaGeneralVe = medianaSalarios(salariosVeSorted);
    const medianaTop10Ve = medianaSalarios(salariosVeTop10);

    console.log ({
        medianaGeneralVe,
        medianaTop10Ve,
    });
};