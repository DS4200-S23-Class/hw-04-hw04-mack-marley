// Select all circles in the svg and bind your data to the selection
var circles = svg.selectAll('circle')

// Determine what's new to the screen using ``.enter()`` and for each new element, append a circle
// Then, use the data provided to set the desired attributes
circles.enter()
    .append('circle')
    .attr(100, function(d) { return d.cx})
    .attr(100, function(d) { return d.cy})
    .attr(10, function(d){return d.r})