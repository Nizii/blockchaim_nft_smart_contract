$(function() {  
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500); 
});

var ethConnectPromise = window.ethereum.request({ method: 'eth_requestAccounts' });

setTimeout(function() { 
    $(document).ready(function() {
        $("ul").fadeOut("slow");
        $('.fade-in-text-1').removeClass('hidden');
        setTimeout(() => {  
            $("ul").css("display", "none");
            Promise.resolve(ethConnectPromise).then(function(){
                window.location.href = "./content.html";
                console.log("proceed to content");
              }).catch(function(error)
              {
                $('.fade-in-text-1').fadeIn("3000");
                console.log("you must connect your ethereum wallet before continueing to this site!")
                document.getElementById("connectText").innerHTML = "There was an Error with connecting your Ethereum Wallet. Please try again by reloading the page to continue browsing this site."
              })
        }, 2000);
    }); 
}, 4000);

//setTimeout(() => {  console.log("World!"); }, 2000);