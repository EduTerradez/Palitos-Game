(function() {
  'use strict';

  function Rules() {
  }

  Rules.prototype = {

    create: function () {
      var x = this.game.width / 2;


      this.add.bitmapText(200, 50, 'HOW TO PLAY', {font: '35px minecraftia', align: 'center'});
      this.add.bitmapText(90, 150, 'In this game, the goal is to make', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(95, 180, 'your rival hit de last stick, for', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(50, 210, 'each turn you can hit as many sticks', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(40, 240, 'as you want, but always from the same', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(85, 270, 'line. Build up your own strategy to', {font: '25px minecraftia', align: 'center'});
      this.add.bitmapText(195, 300, 'beat your opponent', {font: '25px minecraftia', align: 'center'});
      this.playButton = this.add.button(x-55, 380, 'Play', function() {}, this, 1, 0, 2); 
      this.add.bitmapText(380, 470, 'Created by: EDU & INIGO', {font: '20px minecraftia', align: 'center'});
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