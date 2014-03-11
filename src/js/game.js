(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.fila1 = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.fila1 = new Array[3];
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;
      
      
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Game = Game;

}());
