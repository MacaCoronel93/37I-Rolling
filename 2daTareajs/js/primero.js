/*
PUNTO 1
Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por
cuatro)

let ladoCuadrado = prompt("ingrese el lado del cuadrado");
let perímetro = ladoCuadrado*4;

document.write (  `el perimetro del cuadrado es ${perímetro}`)*/


/*PUNTO 2
Escribir un programa en el cual se ingresan cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.

let num1,num2,num3,num4,suma, producto

num1 =parseInt (prompt ("ingresar el numero 1"));
num2 = parseInt( prompt ("ingresar el numero 2"));
num3 = parseInt( prompt ("ingresar el numero 3"));
num4 = parseInt( prompt ("ingresar el numero 4"));

suma= (num1+num2);
producto=( num3*num4)

document.write ( `la suma del numero 1 y el numero 2 es ${suma} 
y el producto del numero 3 y numero 4 es ${producto}`)*/

/*PUNTO 3
Realizar un programa que lea cuatro valores numéricos e informe su suma y
producto
let num1,num2,num3,num4,suma, producto

num1 =parseInt (prompt ("ingresar el numero 1"));
num2 = parseInt( prompt ("ingresar el numero 2"));
num3 = parseInt( prompt ("ingresar el numero 3"));
num4 = parseInt( prompt ("ingresar el numero 4"));
suma= (num1+num2+num3+num4);
producto=( num1*num2*num3*num4)

document.write ( `la suma de los cuatro valores es ${suma} y
 el producto de los cuatro valores es ${producto}`)*/

/*PUNTO 4
 Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

let cantidad, precio, producto,total
cantidad = parseInt( prompt ("cuanto lleva del producto"));
producto = prompt(`que producto lleva el cliente`)
precio = parseInt( prompt ("cual es el valor del producto"));
total =parseInt(cantidad*precio)

document.write(`El cliente lleva ${cantidad} de ${producto} y debe pagar${total}`)*/



/*PUNTO 5 
 Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos
operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado
a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
O en forma más corta:
nota1=parseInt(prompt('Ingrese primer nota:',''));


let nota1, nota2, nota3, promedio,suma

nota1 = parseInt( prompt ("ingresar la primera nota"));
nota2 = parseInt( prompt ("ingresar la segunda nota"));
nota3 = parseInt( prompt ("ingresar la tercera nota"));

suma=( nota1+nota2+nota3);
promedio = parseInt(suma/3);

if (promedio>=7) {
    document.write( `el alumno esta promocionado con la nota ${promedio}`);
}
else{if (promedio<7){
    document.write(`El alumno no promociono con la nota ${promedio}`);
}
}*/

/*PUNTO 6
Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado
debemos utilizar el operador ==)

let contraseña, contraseña1
contraseña= prompt(`carge la primera cotraseña`)
contraseña1= prompt(`carge de nuevo la cotraseña`)
if(contraseña==contraseña1){
    document.write( `las contraseñas son iguales`)
} else {
    if (contraseña!=contraseña1){
       document.write( `Las contraseñas no son iguales`)
    }
}*/

/*PUNTO 7
Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el
número es positivo, cero o negativo.

let numeroEntero= parseInt(prompt ( `ìngreso un numero entero`));
if(numeroEntero>0){
    document.write( `El numero es positivo`)
} else if(numeroEntero==0){
        document.write(`El numero es cero`)
    }
else {
    document.write(`El numero es negativo`)
}*/

/*PUNTO 8
 Confeccionar un programa que permita cargar un número entero positivo de hasta
tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

let numeroEntero= parseInt (prompt( `ingrese un numero positivo de hasta 3 cifras`))
if(numeroEntero<1000 && numeroEntero>99){
    document.write( `El numero ${numeroEntero} tiene 3 cifras`);
} if (numeroEntero<100 && numeroEntero>9){
    document.write(`El numero ${numeroEntero} es de dos cifras`);

}else if(numeroEntero<10){
    document.write(`El numero es de una cifra`);

}*/

/*PUNTO 9
De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la
siguiente información: nombre del postulante, cantidad total de preguntas que se le
realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar
un programa que lea los datos del postulante e informe el nivel del mismo según el
porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.

let nombreAlumno, cantidadPreguntasTotales,CantidadRespuestasCorrectas,division,promedio

nombreAlumno= prompt (`inrgese el nombre del alumno`);
cantidadPreguntasTotales= parseInt (prompt( `ingrese la cantidad de preguntas totales del examen`));
CantidadRespuestasCorrectas= parseInt (prompt( `ingrese la cantidad de respuestas correctas`));
division= parseInt (CantidadRespuestasCorrectas*100);
promedio= parseInt (division/cantidadPreguntasTotales);


if(promedio>=90){
    document.write( `El alumno ${nombreAlumno} tiene un nivel superior y  su promedio es ${promedio}%`);
} if (promedio>=75 && promedio<90){
    document.write(`El alumno ${nombreAlumno} tiene un nivel Medio y  su promedio es ${promedio}%`);

} if(promedio>=50 && promedio<75){
    document.write(`El alumno ${nombreAlumno} tiene un nivel regular y  su promedio es ${promedio}%`);

} else if (promedio<50){
    document.write(
     `El alumno ${nombreAlumno} esta fuera de nivel y  su promedio es ${promedio}%`)
}*/

/*PUNTO 10
.Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde
a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.

let base, altura, superficie
let conta1= 0

for(let i= 1; i <= 3; i++){
    base=parseFloat(prompt( `ingrese base del triangulo`));
    altura=parseFloat(prompt( `ingrese base del altura`));
    superficie=(base*altura)/2;
    if (superficie>12 ){
        conta1++;
    }document.write( `triangulo numero ${i}<br>`)
    document.write( `base ${base}<br>`)
    document.write( `altura ${altura}<br>`)
    document.write( `superficie ${superficie}<br>`)

} document.write( `cantidad de triangulos con superficie superior a 12: ${conta1}<br>`)
*/
/*PUNTO 11
 Desarrollar un programa que solicite la carga de 10 números e imprima la suma de
los últimos 5 valores ingresados.


let numeros = [];

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Ingrese un número:"));
  numeros.push(numero);
}

let ultimosCinco = numeros.slice(-5);
let suma = ultimosCinco.reduce((a, b) => a + b, 0);

document.write(`La suma de los últimos 5 números ingresados es: ${suma} `);*/

/*PUNTO 12
12. Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).


for (let i = 5; i <= 50; i++) {
  const resultado = i * 5;
  document.write(`5 x ${i} = ${resultado}`);*/

 /*PUNTO 13
 
Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

const numero = parseInt(prompt("Ingrese un número del 1 al 10:"));

if (numero < 1 || numero > 10) {
  console.log("Número inválido. Debe ingresar un número del 1 al 10.");
} else {
  for (let i = 1; i <= 12; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}*/

/*PUNTO 14

.Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.



function determinarTipoTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "isósceles";
  } else {
    return "escaleno";
  }
}


const triangulos = [];
for (let i = 1; i <= 4; i++) {
  const lado1 = parseInt(prompt(`Ingrese el lado 1 del triángulo ${i}:`));
  const lado2 = parseInt(prompt(`Ingrese el lado 2 del triángulo ${i}:`));
  const lado3 = parseInt(prompt(`Ingrese el lado 3 del triángulo ${i}:`));
  triangulos.push([lado1, lado2, lado3]);
}

const tiposTriangulos = [];
for (let i = 0; i < 4; i++) {
  const tipoTriangulo = determinarTipoTriangulo(...triangulos[i]);
  tiposTriangulos.push(tipoTriangulo);
  console.log(`El triángulo ${i+1} es ${tipoTriangulo}.`);
}


const cantidadTriangulos = {
  equilátero: 0,
  isósceles: 0,
  escaleno: 0,
};
for (let i = 0; i < 4; i++) {
  cantidadTriangulos[tiposTriangulos[i]]++;
}
console.log(`Cantidad de triángulos equiláteros: ${cantidadTriangulos.equilátero}`);
console.log(`Cantidad de triángulos isósceles: ${cantidadTriangulos.isósceles}`);
console.log(`Cantidad de triángulos escalenos: ${cantidadTriangulos.escaleno}`);


let tipoMenorCantidad = "";
let menorCantidad = Infinity;
for (const tipo in cantidadTriangulos) {
  if (cantidadTriangulos[tipo] < menorCantidad) {
    tipoMenorCantidad = tipo;
    menorCantidad = cantidadTriangulos[tipo];
  }
}
console.log(`El tipo de triángulo del que hay menor cantidad es ${tipoMenorCantidad}.`);

*/

/*PUNTO 15

. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en
el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
puntos a procesar


const cantidadPuntos = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));


let primerCuadrante = 0;
let segundoCuadrante = 0;
let tercerCuadrante = 0;
let cuartoCuadrante = 0;


for (let i = 1; i <= cantidadPuntos; i++) {
  const x = parseFloat(prompt(`Ingrese la coordenada x del punto ${i}:`));
  const y = parseFloat(prompt(`Ingrese la coordenada y del punto ${i}:`));
  
  if (x > 0 && y > 0) {
    primerCuadrante++;
  } else if (x < 0 && y > 0) {
    segundoCuadrante++;
  } else if (x < 0 && y < 0) {
    tercerCuadrante++;
  } else if (x > 0 && y < 0) {
    cuartoCuadrante++;
  }
}


console.log(`Cantidad de puntos en el primer cuadrante: ${primerCuadrante}`);
console.log(`Cantidad de puntos en el segundo cuadrante: ${segundoCuadrante}`);
console.log(`Cantidad de puntos en el tercer cuadrante: ${tercerCuadrante}`);
console.log(`Cantidad de puntos en el cuarto cuadrante: ${cuartoCuadrante}`);
*/

/*PUNTO 16
.Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.


let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let acumuladorPares = 0;


for (let i = 1; i <= 10; i++) {
  const valor = parseInt(prompt(`Ingrese el valor número ${i}:`));
  
  if (valor < 0) {
    negativos++;
  } else if (valor > 0) {
    positivos++;
  }
  
  if (valor % 15 === 0) {
    multiplos15++;
  }
  
  if (valor % 2 === 0) {
    acumuladorPares += valor;
  }
}


console.log(`Cantidad de valores negativos ingresados: ${negativos}`);
console.log(`Cantidad de valores positivos ingresados: ${positivos}`);
console.log(`Cantidad de múltiplos de 15 ingresados: ${multiplos15}`);
console.log(`Valor acumulado de los números pares ingresados: ${acumuladorPares}`);
*/

/*PUNTO 17
.Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un
promedio de edades mayor.


let edadesManana = [];
let edadesTarde = [];
let edadesNoche = [];


for (let i = 1; i <= 5; i++) {
  const edad = parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno mañana:`));
  edadesManana.push(edad);
}

for (let i = 1; i <= 6; i++) {
  const edad = parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno tarde:`));
  edadesTarde.push(edad);
}

for (let i = 1; i <= 11; i++) {
  const edad = parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno noche:`));
  edadesNoche.push(edad);
}


const promedioManana = edadesManana.reduce((acc, edad) => acc + edad, 0) / edadesManana.length;
const promedioTarde = edadesTarde.reduce((acc, edad) => acc + edad, 0) / edadesTarde.length;
const promedioNoche = edadesNoche.reduce((acc, edad) => acc + edad, 0) / edadesNoche.length;


console.log(`El promedio de edades del turno mañana es: ${promedioManana}`);
console.log(`El promedio de edades del turno tarde es: ${promedioTarde}`);
console.log(`El promedio de edades del turno noche es: ${promedioNoche}`);


if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
  console.log("El turno mañana tiene un promedio de edades mayor.");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
  console.log("El turno tarde tiene un promedio de edades mayor.");
} else {
  console.log("El turno noche tiene un promedio de edades mayor.");
}
*/