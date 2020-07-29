/* 
Jay Pittenger
5-1-2020
CS290 - Project
*/

// Event listeners for carousel buttons
document.getElementById("left-button").addEventListener("click", leftPress);
document.getElementById("right-button").addEventListener("click", rightPress);

// call imageUpdateLoop to start carousel animation upon DOM load
document.addEventListener('DOMContentLoaded', imageUpdateLoop);
var timerID;

// timer loop
function imageUpdateLoop(){
    // every 5 seconds, update image in carousel
    timerID = setTimeout(imageForwardUpdate, 5000);
}

// performs image update to next image
function imageForwardUpdate(){
    var image = document.getElementsByTagName("IMG")[0];
    if(image.id == "carousel-image-1"){
        image.id = "carousel-image-2";
        image.src = "Content/images/oculus_image_2.jpg"
    } else if(image.id == "carousel-image-2"){
        image.id = "carousel-image-3";
        image.src = "Content/images/oculus_image_3.jpg"
    } else {
        image.id = "carousel-image-1";
        image.src = "Content/images/oculus_image_1.jpg"
    }
    // update dots to indicate progress in carousel
    dotUpdate();
    // call update loop to restart timer
    imageUpdateLoop();
}

function imageBackwardUpdate(){
    var image = document.getElementsByTagName("IMG")[0];
    if(image.id == "carousel-image-2"){
        image.id = "carousel-image-1";
        image.src = "Content/images/oculus_image_1.jpg"
    } else {
        image.id = "carousel-image-2";
        image.src = "Content/images/oculus_image_2.jpg"
    }
    // update dots to indicate progress in carousel
    dotUpdate();
    // call update loop to restart timer
    imageUpdateLoop();
}

// on left button press - override timer to perform image change
function leftPress(){
    var image = document.getElementsByTagName("IMG")[0];
    // if not at first image - left move is valid
    if(image.id != "carousel-image-1"){
        // clear current timer
        clearTimeout(timerID);
        imageBackwardUpdate();
    }
}

// on right button press - override timer to perform image change
function rightPress(){
    var image = document.getElementsByTagName("IMG")[0];
    //if not at last image - right move is valid
    if(image.id != "carousel-image-3"){
        // clear current timer
        clearTimeout(timerID);
        imageForwardUpdate();
    }
}

// function to update circle dot indicators for image progresion in carousel
function dotUpdate(){
    var image = document.getElementsByTagName("IMG")[0];
    var dot1 = document.getElementById("circle-1");
    var dot2 = document.getElementById("circle-2");
    var dot3 = document.getElementById("circle-3");
    var solidCircle = "fas fa-circle";
    var openCircle = "far fa-circle";
    // determine correct dot configuration based on new image
    if(image.id == "carousel-image-1"){
        dot1.className = solidCircle;
        dot2.className = openCircle;
        dot3.className = openCircle;
    } else if(image.id == "carousel-image-2"){
        dot1.className = openCircle;
        dot2.className = solidCircle;
        dot3.className = openCircle;
    } else {
        dot1.className = openCircle;
        dot2.className = openCircle;
        dot3.className = solidCircle;
    }
}