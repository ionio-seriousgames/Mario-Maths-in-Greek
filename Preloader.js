//var game = {};

Game.Preloader = function(game){
    
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload:function(){
        
        this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');
        
        this.preloadBar.anchor.setTo(0.5,0.5);
        
        this.time.advancedTiming = true;
        
        this.load.setPreloadSprite(this.preloadBar);
        
        //LOAD ALL ASSETS
        //Σε αυτό το state γίνεται η φόρτωση όλων των assets (εικόνες, ήχοι, χάρτες)
        
        this.load.tilemap('map','assets/FirstLevel.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset','assets/GoldBricks.png');
        
        this.load.tilemap('map2','assets/lathosLevel.json',null,Phaser.Tilemap.TILED_JSON);
        
        this.load.spritesheet('player','assets/player.png',24,26);
        
        this.load.image('bird','assets/bird.png'); 
        
        this.load.image('titlescreen','assets/titlescreen.png');
        
        this.load.image('button','assets/button.png');
        
        this.load.image('skipButton','assets/skipButton.png');
        
        this.load.image('bullet','assets/bullet.png');
        
        this.load.image('bullet2','assets/bullet2.png');
        
        this.load.audio('coin','assets/coin.wav');
        
        this.load.audio('jump','assets/jump.wav');
        
        this.load.audio('stomp','assets/stomp.wav');
        
        this.load.image('coin25','assets/coin25.png');
        
        this.load.image('coin9','assets/coin9.png');
        
        this.load.image('coin1','assets/coin1.png');
        
        this.load.image('coin4','assets/coin4.png');
        
        this.load.image('coin36','assets/coin36.png');
        
        this.load.image('coin10','assets/coin10.png');
        
        this.load.image('coin15','assets/coin15.png');
        
        this.load.image('coin27','assets/coin27.png');
        
        this.load.image('coin8','assets/coin8.png');
        
        this.load.image('coin12','assets/coin12.png');
        
        this.load.image('coin24','assets/coin24.png');
        
        this.load.image('coin16','assets/coin16.png');
        
        this.load.image('coin18','assets/coin18.png');
        
        this.load.image('coin20','assets/coin20.png');
        
        this.load.image('coin30','assets/coin30.png');
        
        this.load.image('coin35','assets/coin35.png');
        
        this.load.image('coin40','assets/coin40.png');
        
        this.load.image('coin45','assets/coin45.png');
        
        this.load.image('coin50','assets/coin50.png');
        
        this.load.image('coin21','assets/coin21.png');
        
        this.load.image('coin6','assets/coin6.png');
        
        this.load.image('coin14','assets/coin14.png');
        
        this.load.image('coin22','assets/coin22.png');
        
        this.load.image('coin28','assets/coin28.png');
        
        this.load.image('coin33','assets/coin33.png');
        
        this.load.image('coin39','assets/coin39.png');
        
        this.load.image('coin48','assets/coin48.png');
        
        this.load.image('coin51','assets/coin51.png');
        
        this.load.image('coin55','assets/coin55.png');
        
        this.load.image('coin56','assets/coin56.png');
        
        this.load.image('coin58','assets/coin58.png');
        
        this.load.image('coin60','assets/coin60.png');
        
        this.load.image('coin62','assets/coin62.png');
        
        this.load.image('coin63','assets/coin63.png');
        
        this.load.image('coin64','assets/coin64.png');
        
        this.load.image('coin65','assets/coin65.png');
        
        this.load.image('coin69','assets/coin69.png');
        
        this.load.image('coin70','assets/coin70.png');
        
        this.load.image('coin75','assets/coin75.png');
        
        this.load.image('coin76','assets/coin76.png');
        
        this.load.image('coin80','assets/coin80.png');
        
        this.load.image('coin81','assets/coin81.png');
        
        this.load.image('coin84','assets/coin84.png');
        
        this.load.image('coin85','assets/coin85.png');
        
        this.load.image('coin87','assets/coin87.png');
        
        this.load.image('coin90','assets/coin90.png');
        
        this.load.image('coin93','assets/coin93.png');
        
        this.load.image('coin95','assets/coin95.png');
        
        this.load.image('coin98','assets/coin98.png');
        
        this.load.image('coin99','assets/coin99.png');
        
        this.load.image('coin100','assets/coin100.png');
        
        this.load.image('coin110','assets/coin110.png');
        
        this.load.image('coin120','assets/coin120.png');
        
        this.load.image('coin130','assets/coin130.png');
        
        this.load.image('coin140','assets/coin140.png');
        
        this.load.image('coin150','assets/coin150.png');
        
        this.load.image('coin160','assets/coin160.png');
        
        this.load.image('coin170','assets/coin170.png');
        
        this.load.image('coin180','assets/coin180.png');
        
        this.load.image('coin190','assets/coin190.png');
        
        this.load.image('coin200','assets/coin200.png');
        
        this.load.image('coin300','assets/coin300.png');
        
        this.load.image('heartbonus','assets/heartbonus.png');
        
        this.load.image('wall','assets/wall.jpeg');
        
        this.load.image('luckybox','assets/luckybox.png');
        
        this.load.image('luckybox2','assets/luckybox2.png');
        
        this.load.image('flag','assets/flag.png');
        
        this.load.image('key','assets/key.png');
        
        this.load.image('lathos2','assets/lathos2.png');
        
        this.load.image('lathos3','assets/lathos3.png');
        
        this.load.image('lathos5','assets/lathos5.png');
        
        this.load.image('lathos10','assets/lathos10.png');
        
        this.load.spritesheet('raccoon','assets/raccoon.png',23.75,32.25);
        
        this.load.image('gameoverScreen2','assets/gameoverScreen2.png');
        
        this.load.image('gameoverScreen3','assets/gameoverScreen3.png');
        
        this.load.image('gameoverScreen5','assets/gameoverScreen5.png');
        
        this.load.image('gameoverScreen10','assets/gameoverScreen10.png');
        
        this.load.image('lossScreen','assets/lossScreen.png');
        
        this.load.image('backround','assets/backround.png');
        
        this.load.image('backround3','assets/backround3.png');
        
        this.load.image('turtle','assets/turtle.png');
        
        this.load.image('hint','assets/hint.png');
        
        this.load.image('hint2','assets/hint2.png');
        
        this.load.image('hint3','assets/hint3.png');
        
        this.load.image('hint5','assets/hint5.png');
        
        this.load.image('hint10','assets/hint10.png');
        
        this.load.image('teleport','assets/teleport.png');
        
        this.load.image('teleport2','assets/teleport2.png');
        
        this.load.image('playagain','assets/playagain.png');
        
        this.load.image('afigisiScreen','assets/afigisiScreen.png');
        
        this.load.image('afigisiScreen2','assets/afigisiScreen2.png');
        
        this.load.image('afigisiScreen3','assets/afigisiScreen3.png');
        
        this.load.image('afigisiScreen4','assets/afigisiScreen4.png');
        
        this.load.image('afigisiScreen5','assets/afigisiScreen5.png');
        
        this.load.image('afigisiScreen6','assets/afigisiScreen6.png');
        
        this.load.image('afigisiScreen7','assets/afigisiScreen7.png');
        
        this.load.image('afigisiScreen8','assets/afigisiScreen8.png');
        
        this.load.image('afigisiScreen9','assets/afigisiScreen9.png');
        
        this.load.image('afigisiScreen10','assets/afigisiScreen10.png');
        
        this.load.image('afigisiScreen11','assets/afigisiScreen11.png');
        
        this.load.image('lossScreen2','assets/lossScreen2.png');
        
        this.load.image('lossScreen3','assets/lossScreen3.png');
        
        this.load.image('lossScreen5','assets/lossScreen5.png');
        
        this.load.image('lossScreen10','assets/lossScreen10.png');
        
        this.load.image('luigiButton','assets/luigiButton2.png');
        
        this.load.image('marioButton','assets/marioButton2.png');
        
        this.load.image('backround2','assets/backround2.png');
        
        this.load.image('elevator','assets/elevator.png');
        
        this.load.image('propel','assets/propel.png');
        
        this.load.image('brick','assets/brick.jpg');
        
        this.load.spritesheet('luigi','assets/luigi2.png',36.39,46.14);
        
        this.load.spritesheet('super','assets/super3.png',35.0909,44);
        
        this.load.spritesheet('flame','assets/flame.png',35,60);
        
        this.load.spritesheet('goomba','assets/goomba.png',16,16);
        
        this.load.spritesheet('water','assets/water2.png',372.6,322);
        
        this.load.image('div2','assets/div2.png');
        
        this.load.image('div3','assets/div3.png');
        
        this.load.image('div5','assets/div5.png');
        
        this.load.image('div10','assets/div10.png');
        
        this.load.audio('song','assets/song.mp3');
        
        this.load.audio('victory','assets/victory.mp3');
        
        this.load.audio('lose','assets/lose.mp3');
        
        this.load.audio('helicopter','assets/helicopter.mp3');
        
        this.load.audio('fall','assets/fall.mp3');
        
        this.load.audio('break','assets/break.mp3');
        
        this.load.audio('hit','assets/hit.mp3');
        
        this.load.audio('hitenemy','assets/hitenemy.mp3');
        
        this.load.image('controlsScreen','assets/controlsScreen.png');
        
        this.load.image('heart','assets/heart.png');
        
        this.load.image('portal','assets/portal.png');
        
        this.load.image('epilogi2','assets/epilogi2.png');
        
        this.load.image('epilogi3','assets/epilogi3.png');
        
        this.load.image('epilogi5','assets/epilogi5.png');
        
        this.load.image('epilogi10','assets/epilogi10.png');
        
        this.load.image('mariodark','assets/mariodark.jpg');
        
        
    },
    
    create:function(){
        
        this.state.start('MainMenu');
    }
}