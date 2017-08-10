function KnightHero(map, x, y) {
  Hero.call(this, map, x, y);
  this.name = "Knight";
  //this.voice = "";
}

KnightHero.prototype = Object.create(Hero.prototype);
KnightHero.prototype.constructor = KnightHero;

// image property MUST be defined in prototype
KnightHero.prototype.image = 'characters/knight/knight.png';
//KnightHero.prototype.say();
