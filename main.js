// Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
  constructor(life, power) {
    this.life = life;   
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    this.life -= damage;
    console.log(`Vida restante: ${this.life}`);
  }
}


// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power); 
  }

  drinkColaCao() {
    this.power += 10; 
    console.log("El maya ha bebido Cola Cao. Nuevo poder:", this.power);
  }
}


// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.


class Aztec extends Warrior{
    constructor(life, power) {
      super(life, power); 
    }
drinkNesquik(){
    this.life += 10;
    console.log("El azteca ha bebido Nesquik. Nueva vida:", this.life);    
}
}



// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik
const guerreroAzteca = new Aztec(35, 70)

guerreroAzteca.drinkNesquik()



// Maya bebe Cola Cao
const guerreroMaya = new Maya(30, 20)

guerreroMaya.drinkColaCao()



// Maya ataca a azteca. Azteca defiende.

const damageToAztec = guerreroMaya.attack(); 
guerreroAzteca.defend(damageToAztec);

// Azteca ataca a maya. Maya defiende.

const damageToMaya = guerreroAzteca.attack();
guerreroMaya.defend(damageToMaya);