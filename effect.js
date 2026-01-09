$(document).ready(function(){
    $("#turn_on").click(function(){
        $("body").addClass("peach");
        $(".container").fadeIn(2000);
        $(this).fadeOut();
        $("#play").fadeIn();
    });

    $("#play").click(function(){
        $(".song")[0].play();
        $(this).fadeOut();
        $("#bannar_coming").fadeIn();
    });

    $("#bannar_coming").click(function(){
        $(".bannar").addClass("bannar-come");
        $(this).fadeOut();
        $("#balloons_flying").fadeIn();
    });

    $("#balloons_flying").click(function(){
        // balloons flying animation
        for (let i = 1; i <= 6; i++) {
            $("#b"+i).animate({ bottom: "80%" }, 4000 + i*200)
                     .fadeIn(200);
        }
        $(this).fadeOut();
        $("#cake_fadein").fadeIn();
    });

    $("#cake_fadein").click(function(){
        $(".cake-cover").fadeIn(2000);
        $(this).fadeOut();
        $("#light_candle").fadeIn();
    });

    $("#light_candle").click(function(){
        $(".velas .fuego").fadeIn(1000);
        $(this).fadeOut();
        $("#wish_message").fadeIn();
    });

    $("#wish_message").click(function(){
        $(".message p").fadeIn(2000);
        $(this).fadeOut();
        $("#story").fadeIn();
    });

});
