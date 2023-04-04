let num1, num2,suma,resta,producto;

num1= (prompt( `ponga el primer numero`));
num2= (prompt( `ponga el segundo numero`));
suma= num1+num2
resta= num2-num1
producto= num1*num2

if (num1>num2) {
    console.log(`el resultado de la suma entre ${num1}y ${num2} es ${suma}`);

}

else if (num1<num2) {
    console.log(  `el resultado de la resta de ${num2} y ${num1} es ${resta}`);
}


if ( num1==num2) {
    console.log (  `el resulta de la multiplicacion entre ambos numeros es ${producto}`);
}

