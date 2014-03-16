(function() {
  'use strict';

  
  function Game() {
    this.player = null;
    this.line1 = null;
    this.line2 = null;
    this.line3 = null;
    this.palito = null;
    this.turn = 1;
    
    this.played;

    this.counter;
    
    this.position1;
    this.position2,
    this.position3;
    
    this.line1Used;
    this.line2Used;
    this.line3Used;
    
    this.sticksUsed;
    
    this.finishButton = null;
    
    this.player1 = null;
    this.player2 = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      window.palitosgame.Global.lastMove = 0;
      
      this.line1 = new Array();
      this.line2 = new Array();
      this.line3 = new Array();
      
      this.sticksUsed = true;
      this.played = false;
      this.counter = 0;
      
      this.line1Used = false;
      this.line2Used = false;
      this.line3Used = false;
      
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
      	  this.line1Used = false;
          this.line2Used = false;
          this.line3Used = false;
          this.played = false;
        }
      }, this, 0, 0, 1);
      
      for(var i = 0; i < 3;i++){
    	  
    	  this.line1[i] = this.add.button(this.position1, 100, 'Palito', (function(x){ return function(){
    		if(this.line2Used === false && this.line3Used === false){
    		  if(this.line1[x].used === false){  
    		  if(this.turn === 1){
    		  this.line1[x].frame = 1;
    		  this.line1[x].used = true;
          this.counter++;
          window.palitosgame.Global.lastMove = 1
          console.log (this.lastMove);
    		  }
    		  else if(this.turn === 2){
    			  this.line1[x].frame = 2;
    			  this.line1[x].used = true;
            this.counter++;
            window.palitosgame.Global.lastMove = 2
            console.log (this.lastMove);
    		  }
    		}
    		  this.line1[x].state = 1;
    		  this.line1Used = true;
    		  this.played = true;
    		}
    	  }})(i), this);
    	  
    	  this.line1[i].state = 0;
    	  this.line1[i].used = false;
    	  this.position1 += 60;
      }
     
      		for( i = 0; i < 5;i++){
    	  
      			this.line2[i] = this.add.button(this.position2, 200, 'Palito', (function(x){ return function(){
      				if(!this.line1Used && this.line3Used === false){
      				if(this.line2[x].used === false){  
      					if(this.turn === 1){
      						this.line2[x].frame = 1;
      						this.line2[x].used = true;
                  this.counter++;
                  window.palitosgame.Global.lastMove = 1
                  console.log (this.lastMove);
      					}
      					else if(this.turn === 2){
      						this.line2[x].frame = 2;
      						this.line2[x].used = true;
                  this.counter++;
                  window.palitosgame.Global.lastMove = 2
                  console.log (this.lastMove);
      					}
      				}
      				this.line2Used = true;
      				this.played = true;
      				this.sticksUsed ++;
      				}
      				}})(i), this);
    	  
      					this.line2[i].state = 0;
      					this.line2[i].used = false;
      					this.position2 += 60;
      }
         
      		for(i = 0; i < 7;i++){
          	  
      			this.line3[i] = this.add.button(this.position3, 300, 'Palito', (function(x){ return function(){
      				
      				if(this.line1Used === false && this.line2Used === false){
      				if(this.line3[x].used === false){  
      					if(this.turn === 1){
      						this.line3[x].frame = 1;
      						this.line3[x].used = true;
                  this.counter++;
                  window.palitosgame.Global.lastMove = 1
                  console.log (this.lastMove);
      					}
      					else if(this.turn === 2){
      						this.line3[x].frame = 2;
      						this.line3[x].used = true;
                  this.counter++;
                  window.palitosgame.Global.lastMove = 2
                  console.log (this.lastMove);
      					}
      				}
      				this.line3[x].state = 1;
      				this.line3Used = true;
      				this.played = true;
      			}
      				}})(i), this);
    	  
      					this.line3[i].state = 0;
      					this.line3[i].used = false;
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
      
      if (this.counter === 15) {
        this.game.state.start('gameover');
      }

      
    },

    

  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Game = Game;

}());
