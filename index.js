function goToNewPAge(){
    let url = document.getElementById("pageSelection").value;
    if (url != "none"){
        window.location = url;
    }
}

function playRadio(){
    let radio = document.getElementById("freeCodeCampRadio");
    let indicator = document.getElementById("radioPlayerIndicator");
    if (radio.paused){
        radio.play();
        indicator.style.display = "block";
    }
    else{
        radio.pause();
        indicator.style.display = "none";
    }
}
