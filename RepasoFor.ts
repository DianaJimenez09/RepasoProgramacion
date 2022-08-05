///////////
//Contiente
///////////

let Asia = {
  continente: "Asia",
  pais: ["India", "China", "Pakistan", "Japon", "Iran"],
};

let Oceania = {
  continente: "Oceania",
  pais: [
    "Indonesia",
    "Australia",
    "Nueva Zelanda",
    "Tuvalu",
    "Polineasia Francesa",
  ],
};

let America = {
  continente: "America",
  pais: ["Brasil", "Chile", "Argentina", "Mexico", "Canada"],
};

let Europa = {
  continente: "Europa",
  pais: ["España", "Portugal", "Francia", "Italia", "Alemania"],
};

let Africa = {
  continente: "Africa",
  pais: ["Gabon", "Etiopia", "Angola", "Egipto", "Sudan"],
};

let continentes = [Africa, America, Asia, Europa, Oceania];

function ContinentEstas(country: string): void {
  for (let i = 0; i < continentes.length; i++) {
    let continenteActual = continentes[i];
    let paisX = continenteActual.pais;
    for (let i = 0; i < paisX.length; i++) {
      if (paisX[i] === country) {
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

function filtraImpares(num: number): void {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(`Los numeros impares son ${i}`);
    }
  }
}

filtraImpares(7);

///////////
//nombres M
/////////

function nombresM(nombres: string[]): void {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] == "M") {
      console.log(true);
    } else if (nombres[i][0] != "M") {
      console.log(false);
    }
    break;
  }
}
nombresM(["Mana", "Maria", "Mario", "Mel"]);

////////////////
//Num Caracteres
////////////////

let caracter1 = ["Hola", "que tal"];

export function numCaracteres(palabras: string[]) {
  let suma = 0;

  for (let i = 0; i < palabras.length; i++) {
    let sum = palabras[i].length;
    suma += sum;
  }
  return suma;
}
console.log(numCaracteres(caracter1));
