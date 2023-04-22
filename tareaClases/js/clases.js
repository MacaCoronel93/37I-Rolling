/*class Pokemon {
    constructor(type,movement,name){
        this.type = type;
        this.movement = movement;
        this.name = name;
    }
    talk(){
        document.write(`${this.name}<br>`);
    }
    attack(){
        document.write(`${this.movement}<br>`);
    }

}

const charmander = new Pokemon( "fire" ,"smoke screen","charmander");
charmander.talk();
charmander.attack(); 

const pikachu = new Pokemon( "thunder" ,"attack thunder","pikachu");
pikachu.talk();
pikachu.attack(); 

const  squirtle = new Pokemon( "water" ,"tail whip","squirtle");
squirtle.talk();
squirtle.attack(); */

//HERENCIAS //

/*class Persona {
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad= edad;
    }
    imprimir(){
        document.write( `nombre ${this.nombre} <br>`)
        document.write( `edad ${this.edad}<br>`)

    }
}
class Empleado extends Persona{
    constructor(nombre,edad,sueldo){
        super(nombre, edad);
        this.sueldo= sueldo;

    }
imprimir(){
    super.imprimir();
    document.write( `sueldo ${this.sueldo}<br>`)
}
pagaImpuestos(){
    if(this.sueldo>50000)
        document.write( `${this.nombre} debe pagar impuesto`)
    else
        document.write( `${this.nombre}no debe pagar impuesto`)
    
}
}

const persona1 =new Persona( `eduardo`, 44);
persona1.imprimir();
document.write( `<hr>`);

const persona1 =new Empleado( `eduardo`, 44, 440000);
persona1.imprimir();
persona1.pagaImpuestos( );*/

/*let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tenés?");
let actividad = prompt("¿Cuál es tu actividad favorita?");
let deporte = prompt("¿Cuál es tu deporte favorito?");

if (nombre && edad && actividad && deporte) {
    document.write(`Hola! mi nombre es ${nombre}, tengo ${edad} años, mi actividad favorita es ${actividad} y mi deporte favorito es ${deporte}.`)
} else {
    document.write("Porfavor, debes completar todos los campos.")
}*/

/*document.write(`
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
    <div class="card-info">
      <h2>Titulo de la Tarjeta</h2>
      <p>Descripción de la tarjeta</p>
    </div>
  </div>
`);*/

/*let num1= parseInt(prompt( `Escriba el primer numero `));
let num2=parseInt(prompt( `Escriba el segundo numero `));
let operacion= prompt( `Ingrese la operación (+, -, *, /)`)

num1 = isNaN(num1) ? 0 : Number(num1);
num2 = isNaN(num2) ? 0 : Number(num2);*/