Game.controls = function(game){
    
};

//Αυτό είναι το state της οθόνης παρουσίασης πλήκτρων
var controlsScreen;//Μεταβλητή που εκχωρείται το sprite των πλήκτρων

Game.controls.prototype = {
    create:function(game){
       //Ορισμός του sprite των πλήκτρων και του backround
        this.stage.backgroundColor = "#000000";
         controlsScreen = game.add.sprite(650,500,'controlsScreen');
        controlsScreen.anchor.setTo(0.5,0.5);
        //Δημιουργία του κουμπιού Play από την συνάρτηση CreateButton
        //Όταν το κουμπί πατηθεί, οδηγεί τον χρήστη στο state της αφήγησης
        this.createButton(game,"Play",650,50, 300, 100, function(){
            this.state.start('afigisi');
        });
        
        
        
       
  
    },
    
    update:function(game){
        
    },
    //Συνάρτηση δημιουργίας κουμπιού
    createButton:function(game,string,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x,button1.y, string, {font:"14px Arial" , fill:"#fff", align:"center"});
        
        txt.anchor.setTo(0.5,0.5);
    }
    
};
