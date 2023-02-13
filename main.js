function pointClicked(pointID) {
    console.log("point was clicked.");

    
    let rightCol = document.getElementById("right-column");
    rightCol.innerHTML = "Last point clicked: " + pointID;

    let clickedDiv = document.getElementById(pointID);
    clickedDiv.style.color = "blueviolet";

}

// var allPoints = $("svg > *");

// allPoints.clicked("click", function()) {
//     allPoints.removeClass("clicked");
//     $(this).addClass("clicked");
// }