function pointClicked(pointID) {
    console.log("point was clicked.");

    
    let rightCol = document.getElementById("last-point-clicked");
    rightCol.innerHTML = "Last point clicked: " + pointID;


    let clickedDiv = document.getElementById(pointID);
    clickedDiv.classList.toggle("clicked"); //This does not work.

}

function pointHovered(point) {
    let currPoint = document.getElementById(point);
    currPoint.classList.toggle("hovered");
}

function newPointSubmission() {
    let xVal = Number(document.getElementById("select-x-coord").value) * 50;
    let yVal = Number(document.getElementById("select-y-coord").value) * 50;
    let pointId = "'(" + xVal + ", " + yVal + ")'"

    if(x !== "X-Coordinate" && yVal !== "Y-Coordinate") {
        let scatterplot = document.getElementById("scatterplot");
        scatterplot.innerHTML("<circle id=" + pointID +
            " class='point ' cx=" + xVal + " cy=" + yVal + 
            " r='10' onclick='pointClicked(" + pointID + ")/>");


    }
}