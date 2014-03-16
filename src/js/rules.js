(function() {
  'use strict';

  function Rules() {
  }

  Rules.prototype = {

    create: function () {
      var x = this.game.width / 2;


      this.add.bitmapText(200, 50, 'HOW TO PLAY', {font: '35px minecraftia', align: 'center'});
      this.add.bitmapText(90, 170, 'In this game, the goal is to make', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(83, 200, 'your rival hit de last stick, build', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(90, 230, 'up your own strategy to do so!!', {font: '25px minecraftia', align: 'center'});

      this.playButton = this.add.button(x-55, 400, 'Play', function() {}, this, 1, 0, 2); 
    },

    update: function () {

      if(this.playButton.frame === 2) {
        this.game.state.start('game');
      }
    },

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Rules = Rules;

}());