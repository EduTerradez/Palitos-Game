(function() {
  'use strict';

  function Gameover() {
  }

  Gameover.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.playButton = null;

      if (window.palitosgame.Global.lastMove === 2){
        this.titleTxt = this.add.bitmapText(x, y, 'Player 1 wins!', {font: '25px minecraftia', align: 'center'});
        this.titleTxt.anchor.setTo(0.5, 0.5);

        var victory1 = this.add.sprite(50, 50, 'P1wins');
        victory1.animations.add('appear', [ 0, 1], 7, true); 
        victory1.play('appear');

      }else {
        this.titleTxt = this.add.bitmapText(x, y, 'Player 2 wins!', {font: '25px minecraftia', align: 'center'});
        this.titleTxt.anchor.setTo(0.5, 0.5);

        var victory2 = this.add.sprite(500, 50, 'P2wins');
        victory2.animations.add('appear', [ 0, 1], 7, true); 
        victory2.play('appear');

      }

      console.log (this.lastMove)


      
      this.playButton = this.add.button(x-55, 300, 'Play', function() {}, this, 1, 0, 2); 

    },

    update: function () {

      if(this.playButton.frame === 2) {
        this.game.state.start('game');
      }
    },

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Gameover = Gameover;

}());


