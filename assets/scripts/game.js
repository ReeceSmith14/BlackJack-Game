$(document).ready(function(){

   $("#deal-button").on("click", function(){
        $("#dealer-hand img").hide("puff", function() {
            // Animation complete, show the next element
            $("#dealer-hand img").show("fold");
            $("#player-hand img").hide("puff", function() {
                // Animation complete, show both elements
                $("#player-hand img").show("fold");
            });
        });
    });

});
