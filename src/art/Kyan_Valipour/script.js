var path = new Path.Rectangle(new Point(950, 350), new Size(500, 500));
path.style = {
	fillColor: 'green',
	strokeColor: 'red'
};

// Create a copy of the path and set its stroke color to red:
var copy = path.clone();
copy.strokeColor = 'green';

function onFrame(event) {
	// Each frame, rotate the copy by 1 degree:
	copy.rotate(1);
}

copy.position = new Point(1200, 600);
project.activeLayer.children[0].fillColor = 'red';

view.onResize = function(event) {
    // Whenever the view is resized, move the path to its center:
    path.position = view.center;
	copy.position = view.center;
}