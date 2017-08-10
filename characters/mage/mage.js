function MageHero(map, x, y) {
  Hero.call(this, map, x, y);
  this.name = "Mage";
  //this.voice = "";
}

MageHero.prototype = Object.create(Hero.prototype);
MageHero.prototype.constructor = MageHero;

// image property MUST be defined in prototype
MageHero.prototype.image = 'characters/mage/mage.png';
//RogueHero.prototype.say();