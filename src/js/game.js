(function() {
  'use strict';

  
  function Game() {
    this.player = null;
    this.fila1 = null;
    this.fila2 = null;
    this.fila3 = null;
    this.palito = null;
    this.turn = 1;
    
    this.played;
    
    this.position1;
    this.position2,
    this.position3;
    
    this.fila1Used;
    this.fila2Used;
    this.fila3Used;
    
    this.sticksUsed;
    
    this.finishButton = null;
    
    this.player1 = null;
    this.player2 = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      
      this.fila1 = new Array();
      this.fila2 = new Array();
      this.fila3 = new Array();
      
      this.sticksUsed = true;
      this.played = false;
      
      this.fila1Used = false;
      this.fila2Used = false;
      this.fila3Used = false;
      
      this.position1 = 275;
      this.position2 = 215;
      this.position3 = 155;
      
      this.finishButton = this.add.button(200, 400, 'finish', function() { 
    	  if(this.played === true){
    	  if(this.turn === 1){
    		  this.turn = 2;
    		  
    	  } 
    	  else{
    		  this.turn = 1;
    	  }
    	  this.fila1Used = false;
          this.fila2Used = false;
          this.fila3Used = false;
          this.played = false;
      }
    		  }, this, 0, 0, 0);
      
      for(var i = 0; i < 3;i++){
    	  
    	  this.fila1[i] = this.add.button(this.position1, 100, 'Palito', (function(x){ return function(){
    		if(this.fila2Used === false && this.fila3Used === false){
    		  if(this.fila1[x].used === false){  
    		  if(this.turn === 1){
    		  this.fila1[x].frame = 1;
    		  this.fila1[x].used = true;
    		  }
    		  else if(this.turn === 2){
    			  this.fila1[x].frame = 2;
    			  this.fila1[x].used = true;
    		  }
    		}
    		  this.fila1[x].state = 1;
    		  this.fila1Used = true;
    		  this.played = true;
    		}
    	  }})(i), this);
    	  
    	  this.fila1[i].state = 0;
    	  this.fila1[i].used = false;
    	  this.position1 += 60;
      }
     
      		for( i = 0; i < 5;i++){
    	  
      			this.fila2[i] = this.add.button(this.position2, 200, 'Palito', (function(x){ return function(){
      				if(!this.fila1Used && this.fila3Used === false){
      				if(this.fila2[x].used === false){  
      					if(this.turn === 1){
      						this.fila2[x].frame = 1;
      						this.fila2[x].used = true;
      					}
      					else if(this.turn === 2){
      						this.fila2[x].frame = 2;
      						this.fila2[x].used = true;
      					}
      				}
      				this.fila2Used = true;
      				this.played = true;
      				this.sticksUsed ++;
      				}
      				}})(i), this);
    	  
      					this.fila2[i].state = 0;
      					this.fila2[i].used = false;
      					this.position2 += 60;
      }
         
      		for(i = 0; i < 7;i++){
          	  
      			this.fila3[i] = this.add.button(this.position3, 300, 'Palito', (function(x){ return function(){
      				
      				if(this.fila1Used === false && this.fila2Used === false){
      				if(this.fila3[x].used === false){  
      					if(this.turn === 1){
      						this.fila3[x].frame = 1;
      						this.fila3[x].used = true;
      					}
      					else if(this.turn === 2){
      						this.fila3[x].frame = 2;
      						this.fila3[x].used = true;
      					}
      				}
      				this.fila3[x].state = 1;
      				this.fila3Used = true;
      				this.played = true;
      			}
      				}})(i), this);
    	  
      					this.fila3[i].state = 0;
      					this.fila3[i].used = false;
      					this.position3 += 60;
      }
      
      	this.player1 =  this.add.sprite(50, 50, 'Player1');
      	this.player2 = 	this.add.sprite(500, 50, 'Player2');
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;
      
      
      if(this.turn === 1){
    	  this.player1.frame = 1;
    	  this.player2.frame = 0;
    	  
      }
      else{
    	  this.player2.frame = 1;
    	  this.player1.frame = 0;
    	  
      }
      
      
      
    },

    

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Game = Game;

}());
