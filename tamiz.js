/*En este ejercicio vamos a mostrar todos los numeros numeros primos que se encuentren en un rango dinamico */

let numero = 100; //Rango de numeros a evaluar
let primos = []; //Arreglo de numeros primos (int)
let esPrimo = []; //Arreglo de numeros primos(Bool)
let iteracion = 0; //Controlador de iteraciones

if (numero >= 2) {
  //Comprobamos que el numero ingresado sea mayor a 2
  for (let i = 0; i <= numero; i++) {
    esPrimo.push(true); //Llenamos todo el arreglo esPrimo con true
  }

  for (let i = 2; i <= numero; i++) {
    //Aca llenamos el arreglo primos con true
    if (esPrimo[i]) {
      //Si el numero en la posicion i del arreglo esPrimo es true
      primos.push(i); //Guardamos la posicion del true en el arreglo primos

      for (let j = 1; j * i <= numero; j++) {
        esPrimo[i * j] = false; //Si la posicion
        iteracion++; //Contador para el numero de iteraciones
      }
    }
  }
  console.log(primos);
  console.log("El numero de las iteraciones es " + iteracion);
} else {
  console.log("El numero ingresado debe ser mayor o igual a 2 ");
}
