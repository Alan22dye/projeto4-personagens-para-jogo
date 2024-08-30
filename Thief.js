const Character = require('./Character');

class Thief extends Character {
  attack(target) {
    const damage = 2 * (this.attackPts - target.defensePts);
    if (damage > 0) {
      target.lifepoints -= damage;
      console.log(`${this.name} (Thief) attacked ${target.name}, causing ${damage} damage!`);
    } else {
      console.log(`${this.name} (Thief)'s attack was too weak to harm ${target.name}.`);
    }
  }
}

module.exports = Thief;
