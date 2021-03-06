
// We don't use this type of element to prepare a canvas for HTML5 because some browsers (IE) doesn't support it
//context = document.getElementById('canvasDiv').getContext("2d");

var canvas;

var canvasWidth = 500;
var canvasHeight = 250;

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var timeD = new Array();
var numReg = 0;
var paint = false;
var startTime;
var endTime;


function prepareCanvas() {

	var canvasDiv = document.getElementById('canvasDiv');

	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);

	if(typeof G_vmlCanvasManager != 'undefined') {
	
		canvas = G_vmlCanvasManager.initElement(canvas);
	
	}

	context  = canvas.getContext("2d");


	// This funciont allow us to record the position of the mouse in an array (addClick function). We set then the boolean paint to true 
	// and finally we update the canvas with the redraw() function

	$('#canvas').mousedown(function (e) {
	
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		paint  = true;
		
		startTime = new Date();
		
		addClick(mouseX, mouseY, false);
		
		redraw();
	
	});


	// Mouse move event allow us to know if the user is pressing down and we do this with the boolean variable "paint". If it's true
	// we record the value and update.

	$('#canvas').mousemove(function(e) {
	
		if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);	
			
			timeD.push(new Date());
			numReg++;
					
			redraw();
						
		}
	
	});



	// The mouse is off the paper

	$('#canvas').mouseup(function(e){
	
	
		paint = false;
		redraw();
	
		endTime = new Date();
		console.log(endTime.getSeconds() , endTime.getMilliseconds());
		console.log(startTime.getSeconds() , startTime.getMilliseconds());
		var timeSpent = (endTime - startTime);
		console.log(timeSpent);		
			
	});


	$('#clear_canv').mousedown(function(e){
		
		clickX= new Array();
		clickY= new Array();
		clickDrag = new Array();
		
		timeD = new Array();
		outputD = " ";
		
		clearCanvas();
		
	})


	// If the mouse goes out of the paper the paint variable is set on false

	$('#canvas').mouseleave(function(e){
		
		paint = false;
						
/*		
		Quando sono fuori calcolo comunque il tempo che passa?
		
		redraw();
						
		endTime = new Date();
		console.log(endTime.getSeconds() , endTime.getMilliseconds());
		console.log(startTime.getSeconds() , startTime.getMilliseconds());
		var timeSpent = (endTime - startTime);
		console.log(timeSpent);
*/						
	});
}

// This function save the click position

function addClick(x, y, dragging){
	
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}


// Clear the canvas

function clearCanvas(){
	
	context.fillStyle = '#ffffff';
	context.fillRect(0, 0, canvasWidth, canvasHeight);
	
	canvas.width = canvas.width;
	
	
}

function redraw(){
	
	clearCanvas();
	
	context.strokeStyle = "blue";
	context.lineJoin = "round";
	context.lineWidth = 5;
		
	for (var i = 0; i < clickX.length; i++){
		
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		
	
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.stroke();
		
		
	}
	
/*

	prende il corretto numero di timestamp!
	
	for (var i = 0; i < timeD.length; i++){
		
		outputD = outputD + "Tempo " + i + timeD[i] + " N reg = " + numReg + "\n ";
		
	}
*/	
}
