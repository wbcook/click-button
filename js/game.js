var Clickbutton = {

  score: 0

};

Clickbutton.Preloader = function () {};

Clickbutton.Preloader.prototype = {

  init: function () {

    this.scale.pageAlignHorizontally = true;

  },

  preload: function() {

    this.load.path = 'assets/';

    this.load.image('love', 'love.png');
    this.load.image('boring', 'boring.png');
    this.load.image('cringe', 'cringe.png');
    this.load.image('knight', 'knight.png');
    this.load.image('mod', 'mod.png');
    this.load.image('rekt', 'rekt.png');
    this.load.image('sad', 'sad.png');
    this.load.image('schlick', 'schlick.png');
    this.load.image('seven', 'seven.png');

  },

  create: function() {

    this.state.start('Clickbutton.MainMenu');

  }

};

Clickbutton.MainMenu = function () {};

Clickbutton.MainMenu.prototype = {

  create: function () {

    this.stage.backgroundColor = 0x000000;

    this.state.start('Clickbutton.Game');

  },

  start: function () {



  },

  update: function () {}

};

Clickbutton.Game = function() {

  this.score = 0;
  this.love = null;

};

Clickbutton.Game.prototype = {

  init: function() {

    this.score = 0;

  },

  create: function() {

    this.stage.backgroundColor = 0x000000;

    this.love = this.add.sprite(0, 0, 'love');

  },

  update: function() {

    this.love.x = this.world.randomX;
    this.love.y = this.world.randomY;

  }

};

var game = new Phaser.Game(800, 450, Phaser.AUTO, 'game');

game.state.add('Clickbutton.Preloader', Clickbutton.Preloader);
game.state.add('Clickbutton.MainMenu', Clickbutton.MainMenu);
game.state.add('Clickbutton.Game', Clickbutton.Game);

game.state.start('Clickbutton.Preloader');
