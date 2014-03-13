(function() {
  'use strict';

  function End() {
    
  }

  End.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    
  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].End = End;

}());
