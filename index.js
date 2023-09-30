function goToNewPAge(){
    let url = document.getElementById(pageSelection).value;
    if (url != "none"){
        window.location = url;
    }
}