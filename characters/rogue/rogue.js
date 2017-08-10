function RogueHero(map, x, y) {
  Hero.call(this, map, x, y);
  this.name = "Rogue";
  //this.voice = "";
}

RogueHero.prototype = Object.create(Hero.prototype);
RogueHero.prototype.constructor = RogueHero;

// image property MUST be defined in prototype
RogueHero.prototype.image = 'characters/rogue/rogue.png';
//RogueHero.prototype.say();
