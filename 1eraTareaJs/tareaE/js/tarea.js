let num1,num2,num3,raiz;

num1= parseInt (prompt( `ponga el primer numero`));
num2= parseInt (prompt( `ponga el segundo numero`));
num3= parseInt (prompt( `ponga el tercer numero`));



if (num1>num2 && num1>num3) {
    document.write(  `el numero mayor es ${num1}`);

}

else if (num2>num1 && num2>num3) {
    document.write(  `el numero mayor es ${num2}`);
}

if( num3>num2 && num3>num1) {
    document.write ( `el numero mayor es  ${num3}`);
}


if (num1<num2 && num1<num3) {
    document.write(  `el numero menor es ${num1}`);

}

else if (num2<num1 && num2<num3) {
    document.write(  `el numero menor es ${num2}`);
}

if( num3<num2 && num3<num1) {
    document.write ( `el numero menor es  ${num3}`);
}

raiz= math.sqrt(num2);
document.write( `la raiz del numero 2 es ${raiz}`);