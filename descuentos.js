// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const preciConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonCoupon() {

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },   

    ] 

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    const userCoupon = coupons.find(function(coupon) {

        return coupon.name === couponValue;

    });

    if(!userCoupon) {
        alert("El cupon " + couponValue + " no es válido")
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     preciConDescuento
// });