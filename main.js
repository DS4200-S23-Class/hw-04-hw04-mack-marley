function pointClicked(pointID) {
    console.log("point was clicked.");

    
    let rightCol = document.getElementById("right-column");
    rightCol.innerHTML = "Last point clicked: " + pointID;

    let clickedDiv = document.getElementById(pointID);
    clickedDiv.style.color = "blueviolet";

}

function newPointSubmission() {
    let xVal = document.getElementById("select-x-coord").value;
    let yVal = document.getElementById("select-y-coord").value;

    if(!x.equals("X-Coordinate") && !yVal.equals("Y-Coordinate")) {
        
    }
}