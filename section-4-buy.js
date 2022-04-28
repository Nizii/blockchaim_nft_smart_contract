$(document).ready(function(){
    $("#buy").click(function(){
        $("#buy").css("display", "none");
        $("#h1-section-4").css("display", "none");
        $(".flip-card").css("display", "none");
        $("#form").css("display", "none");
        $('.buy-txt').removeClass('hidden');
        $("#buy-anyway").fadeIn(4000);
        $(".buy-anyway-title").fadeIn("slow");
    });
  });
  
  $(document).ready(function(){
      $("#buy").hover(function(){
        $(this).css("background-color", "#0000FF");
          $(this).css("color", "white");
      }, function(){
          $(this).css("background-color", "#d24dff");
          $(this).css("color", "white");
      });
  });

  $(document).ready(function(){
    $("#buy-anyway").hover(function(){
        $(this).css("background-color", "#0000FF");
          $(this).css("color", "white");
      }, function(){
          $(this).css("background-color", "#d24dff");
          $(this).css("color", "white");
    });
});
