"use strict";
///////////
//Contiente
///////////
exports.__esModule = true;
exports.numCaracteres = void 0;
var Asia = {
    continente: "Asia",
    pais: ["India", "China", "Pakistan", "Japon", "Iran"]
};
var Oceania = {
    continente: "Oceania",
    pais: [
        "Indonesia",
        "Australia",
        "Nueva Zelanda",
        "Tuvalu",
        "Polineasia Francesa",
    ]
};
var America = {
    continente: "America",
    pais: ["Brasil", "Chile", "Argentina", "Mexico", "Canada"]
};
var Europa = {
    continente: "Europa",
    pais: ["España", "Portugal", "Francia", "Italia", "Alemania"]
};
var Africa = {
    continente: "Africa",
    pais: ["Gabon", "Etiopia", "Angola", "Egipto", "Sudan"]
};
var continentes = [Africa, America, Asia, Europa, Oceania];
function ContinentEstas(country) {
    for (var i = 0; i < continentes.length; i++) {
        var continenteActual = continentes[i];
        var paisX = continenteActual.pais;
        for (var i_1 = 0; i_1 < paisX.length; i_1++) {
            if (paisX[i_1] === country) {
                console.log(continenteActual.continente);
                break;
            }
        }
    }
}
ContinentEstas("Angola");
/////////////////
//Filtrar impares
/////////////////
function filtraImpares(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 1) {
            console.log("Los numeros impares son ".concat(i));
        }
    }
}
filtraImpares(7);
///////////
//nombres M
/////////
function nombresM(nombres) {
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i][0] == "M") {
            console.log(true);
        }
        else if (nombres[i][0] != "M") {
            console.log(false);
        }
        break;
    }
}
nombresM(["Mana", "Maria", "Mario", "Mel"]);
////////////////
//Num Caracteres
////////////////
var caracter1 = ["Hola", "que tal"];
function numCaracteres(palabras) {
    var suma = 0;
    for (var i = 0; i < palabras.length; i++) {
        var sum = palabras[i].length;
        suma += sum;
    }
    return suma;
}
exports.numCaracteres = numCaracteres;
console.log(numCaracteres(caracter1));
