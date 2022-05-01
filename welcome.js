$(function() {  
    setTimeout(function() {
        $('.fade-in-text-1').removeClass('hidden');
    }, 500); 
});

//Code von Marc 
//var ethConnectPromise = window.ethereum.request({ method: 'eth_requestAccounts' });

setTimeout(function() { 
    $(document).ready(function() {
        $('.fade-in-text-1').fadeIn("slow");
        setTimeout(() => {  
            $('.fade-in-text-1').fadeOut("slow");
            setTimeout(() => {
                $('.fade-in-text-2').removeClass('hidden');
                $('.fade-in-text-2').fadeIn();
                /* Von hier bis... */
                setTimeout(() => {
                    window.location.href = "../content.html";
                }, 4000);
                /* bis hier... kann gelöst werden*/

                /* Code von Marc 
                Promise.resolve(ethConnectPromise).then(function(){
                    window.location.href = "../content.html";
                    console.log("proceed to content");
                }).catch(function(error)
                {
                    $('.fade-in-text-1').fadeIn("3000");
                    console.log("you must connect your ethereum wallet before continueing to this site!")
                    document.getElementById("connectText").innerHTML = "There was an Error with connecting your Ethereum Wallet. Please try again by reloading the page to continue browsing this site."
                })
                */    

            }, 2000);
        }, 2000);
    }); 
}, 2000);

//setTimeout(() => {  console.log("World!"); }, 2000);