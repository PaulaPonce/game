function ArcherHero(map, x, y) {
  Hero.call(this, map, x, y);
  this.name = "Archer";
  //this.voice = "";
}

ArcherHero.prototype = Object.create(Hero.prototype);
ArcherHero.prototype.constructor = ArcherHero;

// image property MUST be defined in prototype
ArcherHero.prototype.image = 'characters/archer/archer.png';
//ArcherHero.prototype.say();
