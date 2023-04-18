class Pokemon {
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
squirtle.attack(); 




