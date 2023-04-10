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
tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.*/

let numeroEntero= parseInt (prompt( `ingrese un numero positivo de hasta 3 cifras`))
if(numeroEntero<1000 && numeroEntero>99){
    document.write( `El numero ${numeroEntero} tiene 3 cifras`);
} if (numeroEntero<100 && numeroEntero>9){
    document.write(`El numero ${numeroEntero} es de dos cifras`);

}else if(numeroEntero<10){
    document.write(`El numero es de una cifra`);

}
