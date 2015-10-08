var AwpWop = {

  score: 0

};

AwpWop.Game = function() {

  this.score = 0;

};

AwpWop.Game.prototype = {

  preload: function() {

    this.load.image('boring', 'assets/boring.png');
    this.load.image('cringe', 'assets/cringe.png');
    this.load.image('knight', 'assets/knight.png');
    this.load.image('love', 'assets/love.png');
    this.load.image('mod', 'assets/mod.png');
    this.load.image('rekt', 'assets/rekt.png');
    this.load.image('sad', 'assets/sad.png');
    this.load.image('schlick', 'assets/schlick.png');
    this.load.image('seven', 'assets/seven.png');

  },

  create: function() {

    this.love = this.add.sprite(0, 0, 'love');

  },

  update: function() {

    this.love.x = this.world.randomX;
    this.love.y = this.world.randomY;

  }

};

var game = new Phaser.Game(800, 450, Phaser.AUTO, 'game');

game.state.add('AwpWop.Game', AwpWop.Game, true);

game.state.start('AwpWop.Game');
