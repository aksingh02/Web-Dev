$(document).keypress(function(e){
    $("h1").text(e.key);
});

$("h1").on("click", function(){
    $("h1").css("color", "violet");
});

$("h1").addClass("makeup");