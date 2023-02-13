function pointClicked(pointID) {
    console.log("point was clicked.");

    
    let rightCol = document.getElementById("last-point-clicked");
    rightCol.innerHTML = "Last point clicked: " + pointID;


    let clickedDiv = document.getElementById(pointID);
    point.classList.toggle("clicked"); //This does not work.

}

function pointHovered(point) {
    point.classList.toggle("hovered");
}

function newPointSubmission() {
    let xVal = document.getElementById("select-x-coord").value;
    let yVal = document.getElementById("select-y-coord").value;

//unfinished.
    if(!x.equals("X-Coordinate") && !yVal.equals("Y-Coordinate")) {
        let canvas = document.getElementById('')
        const ctx = canvas.getContext('2d');
    }
}