//Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {

    return lado * 4;

} 

function areaCuadrado(lado) {

    return lado * lado;
    
}

console.groupEnd();

//Código del triangulo 

console.group("Triángulos")

// console.log("Los lados del triangulo miden " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo 
// + "cm"
// );

function perimetroTriangulo(lado1, lado2, base) {

    lado1 = Number(lado1);
    lado2 = Number(lado2);
    base = Number(base);

    return lado1 + lado2 + base;
};

function areaTriangulo (base, altura) {

    return (base * altura) / 2;

};

console.groupEnd();

//Código del Círculo 
console.group("Círculos")

// Radio

// const radioCirculo = 4;
// console.log("El radio del círculo es " + radioCirculo + "cm");

//Diámetro

function diametroCirculo(radio) {

    return radio * 2;
}

//PI

const PI = Math.PI;

//Circunferecia

function perimetroCirculo(radio) {
    
    const diametro = diametroCirculo(radio);
    return diametro * PI;

};

//Área

function areaCirculo(radio) {

    return (radio * radio) * PI;

};

console.groupEnd();

// Aquí interactuamos con el HTML 

function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

};
function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

};
function calcularPerimetroTriangulo() {

    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");

    const valueLado1 = lado1.value;
    const valueLado2 = lado2.value;
    const valueBase = base.value;

    if (valueLado1 == valueLado2) { 

        const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
        alert (perimetro);

    } else {

        alert("Los lados no corresponden a un tríangulo Isóseles")
    }
};
function calcularAreaTrianguloIsoseles() {

    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");

    const valueLado1 = Number(lado1.value);
    const valueLado2 = Number (lado2.value);
    const valueBase = Number (base.value);

    const valueBaseParcial = valueBase / 2;

    const valueAltura = Math.sqrt(valueLado1**2 - valueBaseParcial**2);


    if (valueLado1 == valueLado2) { 

        const area = areaTriangulo(valueBase / 2, valueAltura) * 2;
        alert (area);

    } else {

        alert("Los lados no corresponden a un tríangulo Isóseles")
    }

};
