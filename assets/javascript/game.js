/*                  Crystals Collector Game              */

// Assign a random number to start the game
    // Number should be between 19-120
$(document).ready(function() {
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
// Show random number on Match this 
    $("#matchThis").text(Random);
    reset();

// Assign random number to each crystal between 1-12
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

// Variables for Wins, Losses and player total
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

$("#wins").text(wins);
$("#losses").text(losses);

// Adds the wins of the player
    function goodplay(){
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
        reset()
    }

// Adds the losses of the player
    function loser(){
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset()
    }

// Click on crystals
    $(".blue").on("click", function(){
        userTotal = userTotal + num1;
        console.log (userTotal);
        $("#totalScore").text(userTotal);

            if(userTotal === Random){
                goodplay();
            }
            else if (userTotal > Random) {
                loser();
            }
    })

    $(".clear").on("click", function(){
        userTotal = userTotal + num2;
        console.log (userTotal);
        $("#totalScore").text(userTotal);

            if(userTotal === Random){
                goodplay();
            }
            else if (userTotal > Random) {
                loser();
            }
    })

    $(".green").on("click", function(){
        userTotal = userTotal + num3;
        console.log (userTotal);
        $("#totalScore").text(userTotal);

            if(userTotal === Random){
                goodplay();
            }
            else if (userTotal > Random) {
                loser();
            }
    })

    $(".red").on("click", function(){
        userTotal = userTotal + num4;
        $("#totalScore").text(userTotal);

            if(userTotal === Random){
                goodplay();
            }
            else if (userTotal > Random) {
                loser();
            }
    })
    
// Reset game   
    function reset(){
        Random=Math.floor(Math.random()*101+19);
        
        $("#matchThis").text(Random);
        console.log(matchThis)
        num1= Math.floor(Math.random()*11+1)
        num2= Math.floor(Math.random()*11+1)
        num3= Math.floor(Math.random()*11+1)
        num4= Math.floor(Math.random()*11+1)
        userTotal= 0;
        $("#totalScore").text(userTotal);
    }
    
});

