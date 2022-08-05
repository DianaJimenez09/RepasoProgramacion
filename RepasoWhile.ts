///////////////
//Array Reverte
///////////////

let array1 = [1, 2, 3, 4, 5, 6];

function reverte(array: number[]) {
  let arrayX = new Array();
  let i = 0;
  while (i < array.length) {
    arrayX.unshift(array[i]);
    i++;
  }
  return arrayX;
}

console.log(reverte(array1));

///////
//Pares
///////

function filtraPares(num: number[]): void {
  let j = 0;
  let existePar = false;
  while (!existePar && j < num.length) {
    if ((num[j] % 2 === 0, (existePar = true))) {
      console.log("si hay numero par");
    } else {
      console.log("no hay numero par");
      j++;
    }
  }
}

filtraPares([1, 2, 3, 4, 5, 6]);
