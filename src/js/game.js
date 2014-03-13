(function() {
  'use strict';

  
  function Game() {
    this.player = null;
    this.fila1 = null;
    this.fila2 = null;
    this.fila3 = null;
    this.palito = null;
    this.turn = 1;
    this.posicion;
    this.finishButton = null;

  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      
      this.fila1 = new Array();
      this.fila2 = new Array();
      this.fila3 = new Array();
      this.posicion = 275;
      this.finishButton = this.add.button(200, 400, 'finish', function() { 
    	  if(this.turn === 1){
    		  this.turn = 2;
    		  
    	  } 
    	  else{
    		  this.turn = 1;
    	  }
    		  }, this, 0, 0, 0);
      
      for(var i = 0; i < 3;i++){
    	  
    	  this.fila1[i] = this.add.button(this.posicion, 100, 'Palito', (function(x){ return function(){
    		  console.log(this.fila1);
    		  console.log(x);
    		  console.log(this.fila1[x]);
    		  this.fila1[x].state = 1;
    	  }})(i), this, 0, 0, 0);
    	  this.fila1[i].state = 0;
    	  this.fila1[i].frame = 1;
    	  this.posicion += 60;
      }
     
      
      //this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;
      console.log(this.fila1[0].state);
      
    },

    /*onInputDown: function () {
      this.game.state.start('menu');
    }*/

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Game = Game;

}());
