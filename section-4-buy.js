$(document).ready(function(){
    $("#buy-btn").click(function(){
        $("#buy-btn").css("display", "none");
        $("#h1-section-4").css("display", "none");
        $(".flip-card").css("display", "none");
        $("#form").css("display", "none");
        $('.buy-txt').removeClass('hidden');
        $("#buy-anyway-btn").fadeIn(4000);
        $(".buy-anyway-title").fadeIn("slow");
    });
  });
  
  $(document).ready(function(){
      $("#buy-btn").hover(function(){
        $(this).css("background-color", "#0000FF");
          $(this).css("color", "white");
      }, function(){
          $(this).css("background-color", "#d24dff");
          $(this).css("color", "white");
      });
  });

  $(document).ready(function(){
    $("#buy-anyway-btn").hover(function(){
        $(this).css("background-color", "#0000FF");
          $(this).css("color", "white");
      }, function(){
          $(this).css("background-color", "#d24dff");
          $(this).css("color", "white");
    });
});
