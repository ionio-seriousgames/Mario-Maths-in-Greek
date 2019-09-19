Game.MainMenu = function(game){
    
};
//Αποτελεί το state του κυρίως μενού

var titlescreen;//Περιέχει το sprite του τίτλου του παιχνιδιού
var backround2;//Περιέχει το backround

Game.MainMenu.prototype = {
    create:function(game){
        //Ορισμός backround και του sprite του τίτλου
        backround2 = this.add.tileSprite(0,0,1300,800,'backround2');
         titlescreen = game.add.sprite(650,200,'titlescreen');
        titlescreen.anchor.setTo(0.5,0.5);
       
        //Δημιουργεία των κουμπιών Play και Controls που οδηγούν αντίστοιχα
        //στα state στη αφήγησης και της οθόνης πλήκτρων
        this.createButton(game,"Play",650,450, 300, 100, function(){
            this.state.start('afigisi');
        });
        
         this.createButton(game,"Controls",650,600, 300, 100, function(){
            this.state.start('controls');
        });
        
       
  
    },
    
    update:function(game){
        
    },
    //Συνάρτηση δημιουργίας κουμπιών
    createButton:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    }
    
};
