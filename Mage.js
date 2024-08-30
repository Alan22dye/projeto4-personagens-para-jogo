const Character = require('./Character');

class Mage extends Character {
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  attack(target) {
    const damage = this.attackPts + this.magicPts - target.defensePts;
    if (damage > 0) {
      target.lifepoints -= damage;
      console.log(`${this.name} (Mage) attacked ${target.name}, causing ${damage} damage!`);
    } else {
      console.log(`${this.name} (Mage)'s attack was too weak to harm ${target.name}.`);
    }
  }

  heal(target) {
    const healingAmount = 2 * this.magicPts;
    target.lifepoints += healingAmount;
    console.log(`${this.name} (Mage) healed ${target.name}, restoring ${healingAmount} life points!`);
  }
}

module.exports = Mage;
