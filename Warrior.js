const Character = require('./Character');

class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts, position = 'defense') {
    super(name, lifepoints, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.position = position;
  }

  attack(target) {
    if (this.position === 'attack') {
      const damage = this.attackPts - target.defensePts;
      if (damage > 0) {
        target.lifepoints -= damage;
        console.log(`${this.name} (Warrior) attacked ${target.name}, causing ${damage} damage!`);
      } else {
        console.log(`${this.name} (Warrior)'s attack was too weak to harm ${target.name}.`);
      }
    } else {
      console.log(`${this.name} (Warrior) is in defense mode and cannot attack.`);
    }
  }

  switchStance() {
    if (this.position === 'attack') {
      this.position = 'defense';
      this.defensePts += this.shieldPts;
      console.log(`${this.name} (Warrior) switched to defense stance. Defense increased to ${this.defensePts}.`);
    } else {
      this.position = 'attack';
      this.defensePts -= this.shieldPts;
      console.log(`${this.name} (Warrior) switched to attack stance. Defense reduced to ${this.defensePts}.`);
    }
  }
}

module.exports = Warrior;
