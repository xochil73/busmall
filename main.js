'use strict'

//global variables
var busmallImageLeft = document.getElementById('left');
var busmallImageMiddle = document.getElementById('middle');
var busmallImageRight = document.getElementById('right');
var busmallContainer = document.getElementById('busmall-container');
var leftImageText = document.getElementById('picture-left-text');
var middleImageText = document.getElementById('picture-middle-text');
var rightImageText =  document.getElementById('picture-right-text');
var currentLeftArrayIndex = 9;
var currentMiddleArrayIndex = 3;
var currentRightArrayIndex = 1;
var allBusmallImageArray =[];
var clickCount = 0; //tracking clicks

//Collect all document element reference we need ie ctx

//variable to render list
//making our ul and li
  
  



//Constructor: Bus Mall Images
var BusmallImage = function (src, name){
    this.src = src
    this.name = name
    this.likes = 0
    this.appeared = 0
    allBusmallImageArray.push(this);
}
console.log(allBusmallImageArray);
//BusMall Image Prototypes
BusmallImage.prototype.renderImage = function () {
    busmallImageLeft.src = this.src;
    busmallImageMiddle.src = this.src;
    busmallImageRight.src = this.src;

}

//Event Listeners and Handlers

var imageClickHandler = function(event) {
    //Make sure click is only counted if an IMAGE is clicked
    if(event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right')
    
    
   
    // Use Random Number 
    do{
        var randomNumberLeft = Math.floor(Math.random() * allBusmallImageArray.length)
    }
    while(randomNumberLeft === currentLeftArrayIndex || randomNumberLeft === currentMiddleArrayIndex || randomNumberLeft === currentRightArrayIndex );
    do{
        var randomNumberMiddle = Math.floor(Math.random() * allBusmallImageArray.length)
    }
    while(randomNumberMiddle === currentLeftArrayIndex || randomNumberMiddle === currentMiddleArrayIndex || randomNumberMiddle === currentRightArrayIndex ||randomNumberMiddle === randomNumberLeft);
    do{
        var randomNumberRight = Math.floor(Math.random() * allBusmallImageArray.length)
    }
    while(randomNumberRight === currentLeftArrayIndex || randomNumberRight === currentMiddleArrayIndex || randomNumberRight === currentRightArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === randomNumberMiddle);



//increment the clicked on images
if(event.target.id ==='left'){
    allBusmallImageArray[currentLeftArrayIndex].likes++;
    console.log('left image clicked');
    
} else if(event.target.id === 'middle'){
    allBusmallImageArray[currentMiddleArrayIndex].likes++;
    console.log('middle image clicked');
} else if(event.target.id  === 'right') {
    allBusmallImageArray[currentRightArrayIndex].likes++;
    console.log('right image clicked');
}

allBusmallImageArray[currentLeftArrayIndex].appeared++;
allBusmallImageArray[currentMiddleArrayIndex].appeared++;
allBusmallImageArray[currentRightArrayIndex].appeared++;


//Reassign the variable randomly
currentLeftArrayIndex = randomNumberLeft;
currentMiddleArrayIndex = randomNumberMiddle;
currentRightArrayIndex = randomNumberRight;

//event target
busmallImageLeft.src = allBusmallImageArray[randomNumberLeft].src;
busmallImageMiddle.src = allBusmallImageArray[randomNumberMiddle].src;
busmallImageRight.src = allBusmallImageArray[randomNumberRight].src;
leftImageText.textContent = allBusmallImageArray[randomNumberLeft].name;
middleImageText.textContent = allBusmallImageArray[randomNumberMiddle].name;
rightImageText.textContent = allBusmallImageArray[randomNumberRight].name;

clickCount++;
    if(clickCount === 25){
        renderList();
        busmallImageLeft.removeEventListener('click', imageClickHandler);
        busmallImageMiddle.removeEventListener('click', imageClickHandler);
        busmallImageRight.removeEventListener('click', imageClickHandler);
    }
};
//busmallContainer.addEventListener('click', imageClickHandler);
busmallImageLeft.addEventListener('click', imageClickHandler);
busmallImageMiddle.addEventListener('click', imageClickHandler);
busmallImageRight.addEventListener('click', imageClickHandler);
//imageClickHandler();

var renderList = function(){ 
    
    var target = document.getElementById('final-results');
    var h2El = document.createElement('h2');
    h2El.textContent = 'Results';
    target.appendChild(h2El);


  //Creates my un-ordered list
  for (var i = 0; i < allBusmallImageArray.length; i++) { 
    var listResults = document.createElement('li');
    listResults.textContent = 'Name:     ' + allBusmallImageArray[i].name + '     Total likes:     ' + allBusmallImageArray[i].likes;
    target.appendChild(listResults);
  }

}




    //builds images
     //container for all images
    

        //choose 3 new random images that don't repeat from the current images of eachother
        //change the source
    
//Images

new BusmallImage('./img/bag.jpg', 'R2D2 Rolling Suitcase');
new BusmallImage('./img/banana.jpg', 'Banana Slicer');
new BusmallImage('./img/bathroom.jpg', 'Bathroom Tablet Holder');
new BusmallImage('./img/boots.jpg', 'Pedicure Rainboots');
new BusmallImage('./img/breakfast.jpg', 'All-In-One Breakfast Maker');
new BusmallImage('./img/bubblegum.jpg', 'Meatball Gum');
new BusmallImage('./img/chair.jpg', 'Bumpy Chair');
new BusmallImage('./img/cthulhu.jpg', 'Snugly Cthulhu');
new BusmallImage('./img/dog-duck.jpg', 'Canine Duck-Face');
new BusmallImage('./img/dragon.jpg', 'Free-Range Dragon Meat');
new BusmallImage('./img/pen.jpg', 'Write While You Eat');
new BusmallImage('./img/pet-sweep.jpg', 'Pet Sweep');
new BusmallImage('./img/scissors.jpg', 'Pizza Scissors');
new BusmallImage('./img/shark.jpg', 'Soft Shark Sleeping Bag');
new BusmallImage('./img/sweep.png', 'Baby Sweeper');
new BusmallImage('./img/tauntaun.jpg', 'Soft Tauntaun Sleeping Bag');
new BusmallImage('./img/unicorn.jpg', 'Premium Unicorn Meat');
new BusmallImage('./img/usb.gif', 'Reptile USB');
new BusmallImage('./img/water-can.jpg', 'Useless Watering Can');
new BusmallImage('./img/wine-glass.jpg', 'Impossible Wine Glass');


    //check to make sure we click on the correct image;

//increment the correct image's likes

//increment all current images appearred count

//call choose new image function ()

//test if we have clicked 25 times
//shut the listener off
//make chart appear






//instatiate new images
//busmalContainer.addEventListener('clieck', handleBusmalClick);

// =============================================
//Charts
//==============================================

//function to render the chart
//var rederChart = function() {
    // chartsjs need ctx

//===============================
//collect all data
//we need labels, data values, colors

//create a data object that gets passed all our other arrays based off the examples from chartjs

//=============================
    //call a new chart and pass in ctx and our data
