function setTxtVisible(){
    $(".section-3-txt-1").fadeIn(1500);
};
let executed = false;

function setSection2TxtVisible(){
    if(!executed) {
        $(".section-2-txt-1").fadeIn(1000);
        $("#flip").fadeIn(1500);
        executed = true;
    }
}