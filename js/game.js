var Clickbutton = {

  score: 0

};

Clickbutton.Preloader = function () {};

Clickbutton.Preloader.prototype = {

  init: function () {

    this.input.maxPointers = 1;
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

    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var text = game.add.text(game.world.centerX, game.world.centerY, "- START -\nClick Button\n- GAME -", style);

    text.anchor.set(0.5);

    this.input.onDown.addOnce(this.start, this);

  },

  start: function () {

    this.state.start('Clickbutton.Game');

  },

  update: function () {}

};

Clickbutton.Game = function() {

  this.score = 0;
  this.scoreText = null;

  this.timer = null;
  this.timeText = null;

  this.scoreText = null;

  this.target = null;

};

Clickbutton.Game.prototype = {

  init: function() {

    this.score = 0;

  },

  create: function() {

    this.stage.backgroundColor = 0x000000;

    var scoreStyle = { font: "16px Arial", fill: "#fff", align: "right" };
    this.scoreText = game.add.text(100, 25, "Hits: " + this.score, scoreStyle);
    this.scoreText.anchor.set(0.5);

    var timeStyle = { font: "16px Arial", fill: "#fff", align: "right" };
    this.timeText = game.add.text(700, 25, "Time: " + this.timeText, timeStyle);
    this.timeText.anchor.set(0.5);

    this.timer = this.time.create(false);
    this.timer.add(10000, this.timeUp, this);
    this.timer.start();

    this.target = this.add.sprite(0, 0, 'love');
    this.target.inputEnabled = true;

    this.target.events.onInputDown.add(this.clickedIt, this);

  },

  clickedIt: function (sprite, pointer) {

    var x = this.rnd.between(0, this.game.width - this.target.width);
    var y = this.rnd.between(0, this.game.height - this.target.height);

    this.target.x = x;
    this.target.y = y;

    this.addScore();

  },

  addScore: function () {

    this.score++;
    this.scoreText.text = "Hits: " + this.score;

  },

  timeUp: function() {

    this.scoreText.text = "Time up! Hits:" + this.score;

    this.timeText.visible = false;

    this.target.inputEnabled = false;

  },

  update: function() {

    if (this.timeText.visible)
    {
      this.timeText.text = 10 - Math.floor(this.timer.seconds);
    }

  }

};

var game = new Phaser.Game(800, 450, Phaser.AUTO, 'game');

game.state.add('Clickbutton.Preloader', Clickbutton.Preloader);
game.state.add('Clickbutton.MainMenu', Clickbutton.MainMenu);
game.state.add('Clickbutton.Game', Clickbutton.Game);

game.state.start('Clickbutton.Preloader');
