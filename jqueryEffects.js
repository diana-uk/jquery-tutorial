$("document").ready(function() {
    $("#btn1").on("click", function() {
        $("#id-site-welcome-image").hide(2000);
    });
    $("#btn2").on("click", function() {
        $("#id-site-welcome-image").show(2000);
    });
    $("#btn3").on("click", function() {
        $("#id-site-welcome-image").toggle(3000);
    });
    $("#btn4").on("click", function() {
        $("#id-site-welcome-image").fadeIn(2000);
    });
    $("#btn5").on("click", function() {
        $("#id-site-welcome-image").fadeOut(2000);
    });
    $("#btn6").on("click", function() {
        $("#id-site-welcome-image").fadeToggle(2000);
        console.log('hi');
    });
    $("#btn7").on("click", function() {
        $("#id-site-welcome-image").slideDown(2000);
    });
    $("#btn8").on("click", function() {
        $("#id-site-welcome-image").slideUp(2000);
    });
    $("#btn9").on("click", function() {
        $("#id-site-welcome-image").stop(2000);
    });
    $("#btn10").on("click", function() {
        $("#id-site-welcome-image").animate({
            left: '150px',
            opacity: '1',
            height: '400px',
            width: '400px'
        }, 2000);
    });
});

