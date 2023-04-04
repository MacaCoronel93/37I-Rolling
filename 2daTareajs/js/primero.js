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

document.write ( `la suma del numero 1 y el numero 2 es ${suma} y el producto del numero 3 y numero 4 es ${producto}`)*/

/*PUNTO 3
Realizar un programa que lea cuatro valores numéricos e informe su suma y
producto*/
let num1,num2,num3,num4,suma, producto

num1 =parseInt (prompt ("ingresar el numero 1"));
num2 = parseInt( prompt ("ingresar el numero 2"));
num3 = parseInt( prompt ("ingresar el numero 3"));
num4 = parseInt( prompt ("ingresar el numero 4"));
suma= (num1+num2+num3+num4);
producto=( num1*num2*num3*num4)

document.write ( `la suma de los cuatro valores es ${suma} y el producto de los cuatro valores es ${producto}`)*/

