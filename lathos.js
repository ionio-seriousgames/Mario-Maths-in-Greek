Game.lathos = function(game){
    
};

var lathosScreen;
var map2;
var layer2;
var player;
var facing2 = 'right';
var playerSpeed2 = 150;
var jumpTimer = 0;
var fly = 0;
var controls = {};
var portal;
var fall;
var teleport1;
var teleport2;
var teleport3;
var teleport4;
var epilogi2;
var epilogi3;
var epilogi5;
var epilogi10;
var arxi = 0;

Game.lathos.prototype = {
    create:function(game){
        this.stage.backgroundColor = "#000000";
     //lathosScreen = this.add.tileSprite(0,0,1200,800,'lathosScreen');    
    
     this.physics.arcade.gravity.y = 1000;
        
        map2 = this.add.tilemap('map2');
        map2.addTilesetImage('GoldBricks','tileset');
        layer2 = map2.createLayer('Tile Layer 1');
        layer2.resizeWorld();
        
         map2.setCollisionBetween(28,29);
         fall = this.add.audio('fall');
        fall.play();
    
      if(pl==1){
            player = this.add.sprite(130,200,'super');
            player.anchor.setTo(0.5,0.5);
            player.animations.add('idle',[0],1,true);
            player.animations.add('jump',[10],1,true);
            player.animations.add('run', [2,5,6,1],5,true);
        }
        if(pl==2){
            player = this.add.sprite(130,200,'luigi');
            player.animations.add('idle',[8],1,true);
            player.animations.add('jump',[14],1,true);
            player.animations.add('run', [9,10,11,12,13],6,true);
        }
        player.anchor.setTo(0.5,0.5);
       
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
         controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            down:this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        };
        
        
        portal = this.game.add.sprite(100,0,'portal');
        this.physics.arcade.enable(portal);
        portal.body.allowGravity = false;
        portal.body.immovable = true;
        
        teleport1 = this.game.add.sprite(400,430,'teleport');
        this.physics.arcade.enable(teleport1);
        teleport1.body.allowGravity = false;
        teleport1.body.immovable = true;
        
        teleport2 = this.game.add.sprite(650,430,'teleport');
        this.physics.arcade.enable(teleport2);
        teleport2.body.allowGravity = false;
        teleport2.body.immovable = true;
        
        teleport3 = this.game.add.sprite(900,430,'teleport');
        this.physics.arcade.enable(teleport3);
        teleport3.body.allowGravity = false;
        teleport3.body.immovable = true;
        
        teleport4 = this.game.add.sprite(1150,430,'teleport');
        this.physics.arcade.enable(teleport4);
        teleport4.body.allowGravity = false;
        teleport4.body.immovable = true;
        
       if(x!=2){
        epilogi2 = this.game.add.sprite(420,400,'epilogi2');
        epilogi2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(epilogi2);
        epilogi2.body.allowGravity = false;
       }
        
        if(x!=3){
        epilogi3 = this.game.add.sprite(670,400,'epilogi3');
        epilogi3.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(epilogi3);
        epilogi3.body.allowGravity = false;
        }
        
        if(x!=5){
        epilogi5 = this.game.add.sprite(920,400,'epilogi5');
        epilogi5.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(epilogi5);
        epilogi5.body.allowGravity = false;
        }
        
        if(x!=10){
        epilogi10 = this.game.add.sprite(1170,400,'epilogi10');
        epilogi10.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(epilogi10);
        epilogi10.body.allowGravity = false;
        }
        
    
    },
    
    update:function(game){
        
        this.physics.arcade.collide(player,layer2);
         player.body.velocity.x = 0;
        
        this.physics.arcade.collide(player,epilogi2,this.check2);
        this.physics.arcade.collide(player,epilogi3,this.check3);
        this.physics.arcade.collide(player,epilogi5,this.check5);
        this.physics.arcade.collide(player,epilogi10,this.check10);
        
        if(arxi==1){
            arxi=0;
            epil2=0;
            epil3=0;
            epil5=0;
            epil10=0;
            lathosekkinisi = false;
            this.state.resume('Level1');
            //this.state.start('Level1');
        }
        
    if(controls.right.isDown){
            if(fly==1){
                player.body.allowGravity = false;
                //propel.body.allowGravity = false;
                player.body.x +=4;
               // propel.body.x +=4;
                player.body.velocity.x =10;
               // propel.body.velocity.x =10;
            }
            else{
            player.animations.play('run');
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed2;
                facing2 = 'right';
            }
        }
        
         if(controls.left.isDown){
             if(fly==1){
                 player.body.x -=4;
                 player.body.allowGravity = false;
                // propel.body.x -=4;
                // propel.body.allowGravity = false;
                 player.body.velocity.x = -10;
                //propel.body.velocity.x = -10;    
             }
             else{
            player.animations.play('run');
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed2;
                 facing2 = 'left';
             }
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer && fly ==0){
            player.body.velocity.y = -800;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
            this.sound.play('jump');
            
        }
        
        if(controls.up.isDown && fly ==1){
            player.body.y -=4;
            player.body.allowGravity = false;
             //propel.body.y -=4;
           // propel.body.allowGravity = false;
            player.body.velocity.y = -10;
              //  propel.body.velocity.y = -10;
        }
        
        if(controls.down.isDown && fly ==1){
           player.body.y +=4;
            player.body.allowGravity = false;
            // propel.body.y +=4;
           // propel.body.allowGravity = false;
            player.body.velocity.y =10;
              //  propel.body.velocity.y =10;
        }
    
    if(player.body.velocity.x == 0 && player.body.velocity.y ==0){
            player.animations.play('idle');
        }
    
    
    
    },
    
    check2:function(){
        epilogi2.kill();
        if(epil2==1){
            arxi =1;
        }
    },
    check3:function(){
        epilogi3.kill();
        if(epil3==1){
            arxi=1;
        }
    },
    check5:function(){
        epilogi5.kill();
        if(epil5==1){
            arxi=1;
        }
    },
    check10:function(){
        epilogi10.kill();
        if(epil10==1){
            arxi=1;
        }
    },
    
    };