class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
      this.name = name;
      this.lifepoints = lifepoints;
      this.attackPts = attackPts;
      this.defensePts = defensePts;
    }
  
    attack(target) {
      const damage = this.attackPts - target.defensePts;
      if (damage > 0) {
        target.lifepoints -= damage;
        console.log(`${this.name} attacked ${target.name}, causing ${damage} damage!`);
      } else {
        console.log(`${this.name}'s attack was too weak to harm ${target.name}.`);
      }
    }
  }
  
  module.exports = Character;
  