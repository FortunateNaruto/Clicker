var time = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
	time++;
}

function mousePressed() {
	time++;
}


function draw() {
	background(51);
	fill(255);
	textSize(50);
	text(time, width/2, height/2)

	if(time >= 20 && time <= 29) {
		text("Scrub", width/2 - 50, height/2 + 50);
	}
	if(time >= 30 && time <= 39) {
		text("Not Scrub", width/2 - 50, height/2 + 50);
	}
	if(time >= 40 && time <= 49) {
		text("Cool Person", width/2 - 50, height/2 + 50);
	}
	/*if(time >= 50 && time <= 59) {
		text("", width/2 - 50, height/2 + 50);
	}
	*/
}	
