const Character = require('./Character');
const Thief = require('./Thief');
const Mage = require('./Mage');
const Warrior = require('./Warrior');


const hero = new Character('Hero', 100, 20, 10);
const thief = new Thief('Sneaky Thief', 80, 15, 5);
const mage = new Mage('Wise Mage', 70, 10, 5, 30);
const warrior = new Warrior('Brave Warrior', 120, 25, 15, 10);


hero.attack(thief);
thief.attack(hero);
mage.attack(thief);
warrior.switchStance(); 
warrior.attack(thief);
warrior.switchStance();

mage.heal(hero);

console.log(hero);
console.log(thief);
console.log(mage);
console.log(warrior);
