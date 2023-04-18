/*1.- Escribe un programa de una sola línea que haga 
que aparezca en la pantalla un alert que diga “un mensaje”.


alert ("un mensaje");
*/

/*2.- Escribe un programa de una sola línea que escriba en la 
pantalla un texto que diga «Hello World» (document.write).

 document.write(`Hello World`);*/

 /*3.- Escribe un programa de una sola línea que escriba en la 
 pantalla el resultado de sumar 3 + 5.


document.write( `La suma de 3+5 es igual a ${8}`); 
*/

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario 
con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder


let nombreUsuario = prompt (`Deje aqui el nombre de Usuario`)

document.write(`Hola ${nombreUsuario} `)*/

/*5.- Escribe un programa de tres líneas que pida un número, pida otro 
número y escriba el resultado de sumar estos dos números.


let num1, num2, suma

num1 = parseInt (prompt(`Ingrese el primer numero`));
num2 = parseInt (prompt(`Ingrese el segundo numero`));
suma = (num1+num2); 

document.write(`La suma del primer y el segundo numero es ${suma}`)*/

/*6.- Escribe un programa que pida dos números y escriba en la
 pantalla cual es el mayor.
 
let num1, num2 

num1 = prompt(`Ingrese el primer numero `);
num2 = prompt( `Ingrese el segundo numero `)

if (num1<num2){
    document.write(`El numero ${num2} es mayor que ${num1}`)
}else{
    document.write(`El numero ${num1} es mayor que el numero ${num2} `)
}*/

/*7.- Escribe un programa que pida 3 números y escriba en la 
pantalla el mayor de los tres.
let num1, num2,num3 

num1 = prompt(`Ingrese el primer numero `);
num2 = prompt( `Ingrese el segundo numero `);
num3 = prompt( `Ingrese el tercer numero `);


if (num1<num2 && num3<num2 ){
    document.write(`El numero ${num2} es mayor `);
}if
   (num2<num1 && num3<num1){ document.write(`El numero ${num1} es mayor`);
} else{
    document.write(`El numero ${num3} es el mayor`);
}*/

/*8.- Escribe un programa que pida un número y diga si es divisible por 2



const numero = prompt("Introduce un número:");


if (numero % 2 == 0) {
  document.write(`El número ${numero} es divisible por 2`);
} else {
  document.write(`El número ${numero} no es divisible por 2`);
}*/

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

/*10.- Escribe un programa que pida un número y nos diga si
 es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const numero = prompt("Introduce un número:");


if (numero % 2 == 0) {
  document.write(`El número ${numero} es divisible por 2 <br>`);
} if (numero % 3 == 0) {
  document.write(`El número ${numero}  es divisible por 3 <br>`);
}
if (numero % 5 == 0) {
  document.write(`El número ${numero}  es divisible por 5 <br>`);
}
else if (numero % 7 == 0) {
  document.write(`El número ${numero} es divisible por 7 <br>`);
} else {document.write(`El número ${numero} no es divisible por ninguno de los anteriores`);
}*/
/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es 
divisible (hay que decir todos por los que es divisible)*/




