$(document).ready(function(){
    $("#buy").click(function(){
        $("#buy").css("display", "none");
        $("#h1-section-4").css("display", "none");
        $(".flip-card").css("display", "none");
        $("#form").css("display", "none");
        $('.buy-txt').removeClass('hidden');
        $("#buy-anyway").fadeIn(4000);
        $(".logo-1").fadeIn("slow");
    });
  });
  
  $(document).ready(function(){
      $("#buy").hover(function(){
          $(this).css("background-color", "white");
          $(this).css("color", "black");
      }, function(){
          $(this).css("background-color", "grey");
          $(this).css("color", "white");
      });
  });

  $(document).ready(function(){
    $("#buy-anyway").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }, function(){
        $(this).css("background-color", "black");
        $(this).css("color", "white");
    });
});
