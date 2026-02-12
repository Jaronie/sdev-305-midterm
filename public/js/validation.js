console.log("validation.js loaded");

document.getElementById("vacation-form").onsubmit = () => {
    const dest = document.getElementById("destination");
    const destErr = document.getElementById("dest-err");
    const travel = document.getElementById("travelers");
    const travelErr = document.getElementById("travel-err");

    clearErrors();
    
    let isValid = true;

    if (dest.value === "none") {
        destErr.style.display = "block";
        isValid = false;
    }

    if (travel.value <= 0) {
        travelErr.style.display = "block";
        isValid = false;
    }

    return isValid;
}
function clearErrors() {
    let errMessage = document.getElementsByClassName("err");

    for(let i=0;i<errMessage.length;i++){
        errMessage[i].style.display = "none";
    }
}