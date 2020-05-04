//1.- Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;
//2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;
//3.- Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;
//4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2;
//5.- Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
var booleanoAnd = booleano1 == booleano2;
//6.- Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
var booleanoNot = !booleano1;
//7.- Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
var booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && booleano2));
//8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp++;
//9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
var incrementarAntes = 2;
var resultadoAntes = ++incrementarAntes;
//10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10
var contarHasta10_2;
for (contarHasta10_2 = 0; contarHasta10_2 < 10; contarHasta10_2++) {
    console.log('Impreso')
};
//11.- Crear las variables postI y postJ con valor 0 a continuación crea un bucle que itere hasta que i > 10 en cada iteración se deberá sumar el valor de postJ++ a la variable postI
var postI = 0;
var postJ = 0;
var postK = 0;
while (postK <= 10) {
    postK++;
    postI += postJ++;
}
//12.- Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
var sumaPares = 0;
for (i = sumaPares; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(sumaPares += i)
    }
}
//13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera
let variableValorNumerico = 1;
//14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
const MiNombre = "Silvia";
//15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MiNumeroFav = 2;
//16.- Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2
var booleanoOr = booleano1 || booleano2;
//17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
var booleanoMix1 = (booleano2 && (TAU / 2 == PI) || (variableValorNumerico <= MiNumeroFav));
//18.- Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
var booleanoMix2 = (variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU));
//19.- Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9
var seisNoesNueve = 6 == !9;
//20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
var valorSuma = MiNumeroFav + variableValorNumerico;
//21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
var valorResta = MiNumeroFav - variableValorNumerico;
//22.- Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
var valorMultiplicacion = MiNumeroFav * variableValorNumerico;
//23.- Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
var valorDivision = MiNumeroFav / 3;
//24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se veirfique que contarHasta10 === 10
var contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
}
//25.- Crear las variables preI y preJ con valor 0 a continuación crea un bucle que itere hasta que i > 10 en cada iteración se deberá sumar el valor de ++j a la variable i

//26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)