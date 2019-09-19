Game.loss = function(game){
    
};
//Αποτελεί το state που ενεργοποιείται όταν ο χρήστης βρει την πόρτα ή φτάσει 0 ζωές

var lossScreen;;//Μεταβλητή του spite της αντίστοιχης εικόνας ανάλογα με τον αριθμό
var button;//Κουμπί Play Again
var i;//Μεταβλητή ελέγχου αν πατήθηκε το κουμπί Play Again
var music;//Περιέχει τον ήχο

var sum2Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 2
var sum3Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 3
var sum5Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 5
var sum10Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 10
var apotelesmataText;;//Περιέχει το κείμενο που αποτελείται από τον πίνακα συγκεκριμένων λάθος αριθμών
var pinakas;//Περιέχει τους συγκεκριμένους λάθος αριθμούς
var titlescreen2;

Game.loss.prototype = {
    create:function(game){
         music = this.add.audio('song');
       
        //Επιλογή της κατάλληλης εικόνας ανάλογα με τον αριθμό    
        if(life==0){
        lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen');
        }
        if(life!=0 && x==2){
            lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen2');
        }
        if(life!=0 && x==3){
            lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen3');
        }
        if(life!=0 && x==5){
            lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen5');
        } 
        if(life!=0 && x==10){
            lossScreen = this.add.tileSprite(0,0,3200,800,'lossScreen10');
        }
         button = this.add.button(450,-30,'playagain',this.actionOnClick,this);
       if(x==2){
        sum2Text = game.add.text(15,200,'sum2=',{fontSize: '32px',fill : '#000'});
       }
         if(x==3){
        sum3Text = game.add.text(15,200,'sum3=',{fontSize: '32px',fill : '#000'});
       }
         if(x==5){
        sum5Text = game.add.text(15,200,'sum5=',{fontSize: '32px',fill : '#000'});
       }
         if(x==10){
        sum10Text = game.add.text(15,200,'sum10=',{fontSize: '32px',fill : '#000'});
       }
        
        apotelesmataText = game.add.text(15,430,'Επέλεξες λάθος τους αριθμούς',{fontSize: '32px',fill : '#000'});
       
        pinakas = apotelesmata.join(" , ");
        apotelesmataText.text = 'Επέλεξες λάθος τους αριθμούς ' + pinakas;
        //lossScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'lossScreen');
        //lossScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
          //Αν πατηθεί το Play Again, o χρήστης μεταφέρεται στο state του αρχικού μενού 
        //Επίσης γίνονται μηδενισμοί κάποιων μεταβλητών για αποφυγή προβλήματος στην επανεκκίνηση της πίστας
        if(i==1){
            this.state.start('MainMenu');
            sum2=0;
            sum3=0;
            sum5=0;
            sum10=0;
            life = 3;
            i=0;
            lathos =0;
            s2=0;
            s3=0;
            s5=0;
            s10=0;
            wk =0;
            apotelesmata = []
            n=17;
            
        }
        //Εμφάνιση των αποτελεσμάτων σύμφωνα με τα Learning Analytics
        //Ελέγχεται το πλήθος της κάθε μεταβλητής ώστε να υπάρχει σωστή διατύπωση σε ενικό ή πληθυντικό αντίστοιχα
       if(x==2 && sum2!==1 && lathos!==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
       }
        if(x==3 && sum3!==1 && lathos !==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==5 && sum5!==1 && lathos!==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==10 && sum10!==1 && lathos!==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμούς από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        
        if(x==2 && sum2==1 && lathos!==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμό από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
       }
        if(x==3 && sum3==1 && lathos!==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμό από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        if(x==5 && sum5==1 && lathos!==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμό από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
         if(x==10 && sum10==1 && lathos!==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμό από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμούς';
        }
        
        if(x==2 && sum2!==1 && lathos==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμούς από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
       }
        if(x==3 && sum3!==1 && lathos==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμούς από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==5 && sum5!==1 && lathos==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμούς από\nτους ' +s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
         if(x==10 && sum10!==1 && lathos==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμούς από\nτους ' +s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        
        if(x==2 && sum2==1 && lathos==1){
        sum2Text.text = 'Βρήκες σωστά ' + sum2 + ' αριθμό από\nτους ' + s2 + ' που διαιρούνται με το 2! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
       }
        if(x==3 && sum3==1 && lathos==1){
        sum3Text.text = 'Βρήκες σωστά ' + sum3 + ' αριθμό από\nτους ' + s3 + ' που διαιρούνται με το 3! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==5 && sum5==1 && lathos==1){
        sum5Text.text = 'Βρήκες σωστά ' + sum5 + ' αριθμό από\nτους ' + s5 + ' που διαιρούνται με το 5! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        if(x==10 && sum10==1 && lathos==1){
        sum10Text.text = 'Βρήκες σωστά ' + sum10 + ' αριθμό από\nτους ' + s10 + ' που διαιρούνται με το 10! \n Αλλά επέλεξες λάθος ' + lathos + ' αριθμό';
        }
        
        
    },
      
    //Καλείται όταν πατηθεί το κουμπί Play Again
     actionOnClick:function(){
    i=1;
     },
     
};
