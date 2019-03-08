var abc = "abcdefghijklmnopqrstuvwxyz";


        var i = 0;
        var wins = 0;
        var losses = 0;
        var usertr = [];
        var x = 0;
      
       

        function getLetter() {
            x = Math.floor(Math.random() * 26);
            compLetter = abc.charAt(x);
            usertr = [];
            i = 10;
            console.log("compu:" + compLetter);
            document.getElementById("gleft-txt").innerHTML = "Gueses left: " + i;
        }

        getLetter();
        
        document.onkeyup = function (event) {
            var user = event.key;

         if (!usertr.includes(user) && !/[^a-zA-Z]/.test(event.key)){
                if (user === compLetter) {
                    wins++;
                    
                    getLetter();
                }

                else if(i>1 ){
                    usertr.push(user);
                 //   usertr = (usertr + user + ", ");
                    i--;
                    }
                    else{
                        getLetter();
                        losses++;
            
                    }
                                   
            document.getElementById("wins-txt").innerHTML = "Wins: " + wins;
            document.getElementById("losses-txt").innerHTML = "Losses: " + losses;
            document.getElementById("gleft-txt").innerHTML = "Gueses left: " + i;
            document.getElementById("usertr-txt").innerHTML = "Letters guessed so far: " + usertr.join(",");
                }
        }
        
