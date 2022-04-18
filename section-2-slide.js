$(document).ready(function(){
  $("#flip").click(function(){
    $("#flip").css("display", "none");
    $("#panel").slideToggle(1000);
  });
});

$(document).ready(function(){
    $("#flip").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }, function(){
        $(this).css("background-color", "black");
        $(this).css("color", "white");
    });
});