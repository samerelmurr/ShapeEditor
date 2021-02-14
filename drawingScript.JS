/**
 * ****************************************************************************
 * Name: Samer El-Murr*********************************************************
 * Date: 10/6/2020*************************************************************
 * Course: Computer Graphics***************************************************
 * Intructor: Dr Danni Nini****************************************************
 * Project: Drawing Shapes*****************************************************
 * ****************************************************************************
 * This project is to draw some shapes at the side and make a tool bar like**** 
 * in the application Paint and the user picks a shape and would draw it*******
 * in the supplied canvas.*****************************************************
 * ****************************************************************************
 */

var canvas = document.querySelector('#mainGame');

canvas.width = 600;
canvas.height = 500;
canvas.style = "position:absolute; left: 50%; margin-left: -300px;";

var context = canvas.getContext('2d');

//tool bar rectangle 
context.fillStyle='#87ceeb';
context.fillRect(0, 0, 80, 500);

//square
function square(x, y, s){
    context.fillStyle='grey';
    context.fillRect(x, y, s, s);
}

//rectangle
function rectangle(x, y, l, w){
    context.fillStyle='red';
    context.fillRect(x, y, l, w);
}

//circle
function circle(x, y, r){
    context.fillStyle='blue';
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}

//oval
function oval(x, y, l, w){
context.fillStyle='yellow';
context.beginPath();
context.ellipse(x, y, l, w, 0, 0, 2 * Math.PI);
context.fill();
context.stroke();
}

//function for finding the position of the mouse
function getMousePosition(canvas, e){

    let rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(e.clientX - rect.left),
        y: Math.floor(e.clientY - rect.top)
    };
}

//These if/else statments are for detecting the shapes
canvas.onclick = function(e) {

    let x = e.pageX;     // Get the horizontal coordinate
    let y = e.pageY;     // Get the vertical coordinate

        //Square detection 
        if ( x >= 374 && x <= 422 && y >= 92 && y <= 141 ) {
            //For the user to know what was selected
            alert("Square");

            let C1; //Center 1 or Starting point 
            let EP; //End Point 
            let S; //Side
            let clicks = 0; //initiol declaration for number of clicks
            
            //when clicking down
            canvas.addEventListener("mousedown", function(e) {
                clicks++; // increments the number of clicks everytime it is pressed

                //if the number of clicks is 1 then take the first position
                if(clicks == 1) {
                //Taking fist position
                C1 = getMousePosition(canvas, e);

                } else if (clicks == 2) { //If it is two clicks then get the second position 
                        //Getting second possition 
                        EP = getMousePosition(canvas, e);

                        //Using distance formula to calculate distance
                        S = Math.sqrt((Math.pow(EP.x - C1.x, 2) + Math.pow(EP.y - C1.y, 2)));

                        square(C1.x, C1.y, S);
                    }  else {
                    //if it is zero then return nothing    
                    clicks = 0; 
                }
            });
            
        } 
        //rectangle detection 
        else if ( x >= 375 && x <= 423 && y >= 151 && y <= 230 ) {

            alert("Rectangle");
            let C1;
            let EP;
            let H;
            let W;
            let clicks = 0;
            
             //when clicking down
             canvas.addEventListener("mousedown", function(e) {
                clicks++;

                if(clicks == 1) {
                C1 = getMousePosition(canvas, e);
            

                } else if (clicks == 2) {

                        EP = getMousePosition(canvas, e);

                        //Finding the width using the distance formula 
                        W = Math.sqrt((Math.pow(EP.x - C1.x, 2) + Math.pow(EP.y - C1.y, 2)));
                        console.log(W);

                        //finding the hieght but multiplying it by two
                        H = W * 2;

                        rectangle(C1.x, C1.y, W, H);
                    }  else {
                    clicks = 0;
                }
            });

        } 
        //circle detection
        else if( x >= 374 && x <= 432 && y >= 237 && y <= 301 ) {

            alert("Circle");
            let C1;
            let EP;
            let R;
            let clicks = 0;
            
            //when clicking down
            canvas.addEventListener("mousedown", function(e) {
                clicks++;

                if(clicks == 1) {
                C1 = getMousePosition(canvas, e);
            

                } else if (clicks == 2) {

                        EP = getMousePosition(canvas, e);

                        //Finding the Radius using the distance formula
                        R = Math.sqrt((Math.pow(EP.x - C1.x, 2) + Math.pow(EP.y - C1.y, 2)));

                        circle(C1.x, C1.y, R);
                    }  else {
                    clicks = 0;
                }
            });

        } 
        //oval detecttion 
        else if ( x >= 374 && x <= 428 && y >= 390 && y <= 455 ){

            alert("Oval");
            let C1;
            let EP;
            let R;
            let clicks = 0;
            
            //when clicking down
            canvas.addEventListener("mousedown", function(e) {
                clicks++;

                if(clicks == 1) {
                C1 = getMousePosition(canvas, e);
            

                } else if (clicks == 2) {

                        EP = getMousePosition(canvas, e);

                        R = Math.sqrt((Math.pow(EP.x - C1.x, 2) + Math.pow(EP.y - C1.y, 2)));

                        oval(C1.x, C1.y, R, R + 10);
                        
                    }  else {
                    clicks = 0;
                }
            });

        } 
}


//Calling all the functions for drawing the tool bar
square(10, 10, 50);
rectangle(10, 70, 40, 80);
circle(40, 190, 30);
oval(30, 340, 20, 30);