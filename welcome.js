$(function() {  
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500); 
});

setTimeout(function() { 
    $(document).ready(function() {
        $("ul").fadeOut("slow");
        $('.fade-in-text-1').removeClass('hidden');
        setTimeout(() => {  
            $("ul").css("display", "none");
            $('.fade-in-text-1').fadeIn("3000");
            setTimeout(function() { 
                $('.fade-in-text-1').fadeOut("3000");
                window.location.href = "../STUMTEC/content.html"; 
            }, 3000);
        }, 2000);
    }); 
}, 4000);

//setTimeout(() => {  console.log("World!"); }, 2000);