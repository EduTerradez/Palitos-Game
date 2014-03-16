(function() {
  'use strict';
  
  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.load.spritesheet('Palito' , 'assets/Palitos.png', 19,68);
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      
      this.load.spritesheet('Player1' , 'assets/Player1.png', 150,100);
      this.load.spritesheet('Player2' , 'assets/Player2.png', 150,100);
      this.load.spritesheet('P1wins' , 'assets/P1WINS.png', 146,145);
      this.load.spritesheet('P2wins' , 'assets/P2WINS.png', 146,145);
      this.load.spritesheet('Play' , 'assets/Play.png', 110,50);
      this.load.spritesheet('finish' , 'assets/NextTurn.png', 307,50);
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['palitosgame'] = window['palitosgame'] || {};
  window['palitosgame'].Preloader = Preloader;

}());
