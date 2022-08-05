"use strict";
exports.__esModule = true;
exports.parImpar = void 0;
var RepasoFor_1 = require("./RepasoFor");
////////////////////
//PRIMER RETO REPASO
////////////////////
///////////////
//Signo Zodiaco
///////////////
function SignoZodiaco(dia, mes) {
    var tuSigno;
    if ((dia >= 21 && mes === "marzo") || (dia <= 20 && mes === "abril")) {
        tuSigno = "Tu signo es Aries";
    }
    else if ((dia >= 21 && mes === "abril") || (dia <= 21 && mes === "mayo")) {
        tuSigno = "Tu signo es Tauro";
    }
    else if ((dia >= 22 && mes === "mayo") || (dia <= 21 && mes === "junio")) {
        tuSigno = "Tu signo es Geminis";
    }
    else if ((dia >= 22 && mes === "junio") || (dia <= 22 && mes === "julio")) {
        tuSigno = "Tu signo es Cancer";
    }
    else if ((dia >= 23 && mes === "julio") ||
        (dia <= 23 && mes === "agosto")) {
        tuSigno = "Tu signo es Leo";
    }
    else if ((dia >= 24 && mes === "agosto") ||
        (dia <= 23 && mes === "septiembre")) {
        tuSigno = "Tu signo es Virgo";
    }
    else if ((dia >= 24 && mes === "septiembre") ||
        (dia <= 23 && mes === "octubre")) {
        tuSigno = "Tu signo es Libra";
    }
    else if ((dia >= 24 && mes === "octubre") ||
        (dia <= 22 && mes === "noviembre")) {
        tuSigno = "Escorpion";
    }
    else if ((dia >= 23 && mes === "noviembre") ||
        (dia <= 21 && mes === "diciembre")) {
        tuSigno = "Tu signo es Sagitario";
    }
    else if ((dia >= 22 && mes === "diciembre") ||
        (dia <= 20 && mes === "enero")) {
        tuSigno = "Tu signo es Capricornio";
    }
    else if ((dia >= 21 && mes === "enero") ||
        (dia <= 18 && mes === "febrero")) {
        tuSigno = "Tu signo es Acuario";
    }
    else if ((dia >= 19 && mes === "febrero") ||
        (dia <= 20 && mes === "marzo")) {
        tuSigno = "Tu signo es Piscis";
    }
    return tuSigno;
}
SignoZodiaco(28, "julio");
//////////
//Arcoiris
//////////
//colores Arcoiris : rojo,naranja,amarillo,verde,azul,morado,lila,
var colores = ["marron", "amarillo", "rosa", "rojo"];
function arcoiris(color) {
    var colorX = new Array();
    for (var i = 0; i < color.length; i++) {
        if (color[i] === "rojo" ||
            color[i] === "naranja" ||
            color[i] === "amarillo" ||
            color[i] === "verde" ||
            color[i] === "azul" ||
            color[i] === "morado" ||
            color[i] === "lila")
            console.log("\u00C8l ".concat(color[i], " esta en el arcoiris"));
    }
}
arcoiris(colores);
/////////////
//Par o Impar
/////////////
function parImpar(numero) {
    if (numero % 2 === 0) {
        console.log("".concat(numero, " es par"));
    }
    else {
        console.log("".concat(numero, " es impar"));
    }
}
exports.parImpar = parImpar;
parImpar(6);
//////////////////////
//Array suma carateres
//////////////////////
var c = ["casa", "coche", "ciudad", "cesta"];
var b = ["Barco", "baca", "bicicleta", "balon", "biciesto", "Brasil"];
var v = ["Venezuela", "veneno", "voltaje"];
console.log((0, RepasoFor_1.numCaracteres)(c));
console.log((0, RepasoFor_1.numCaracteres)(b));
console.log((0, RepasoFor_1.numCaracteres)(v));
parImpar((0, RepasoFor_1.numCaracteres)(c));
parImpar((0, RepasoFor_1.numCaracteres)(b));
parImpar((0, RepasoFor_1.numCaracteres)(v));
