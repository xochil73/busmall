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
var clickCount = localStorage.clickCount || 0; 
// ^^ This line checks if clickCount exists in localstorage, if it
//  does not the value will start back at zero... 
// Also, I would reset the information in localstorage when 25 clicks is acheived....

var ctx = document.getElementById("busMallChart").getContext('2d');
var likes = [];
var names = [];
var appearances = [];


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
    
    
    if(event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right')
    //Make sure click is only counted if an IMAGE is clicked
    clickCount++;
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


var saveImages = function(clickCount){
    console.log('hitting save images!');
    localStorage.setItem('clickCount',JSON.stringify(clickCount));
    console.log('localStorage... should be sent to click count', localStorage);
}
    saveImages(clickCount);
    console.log(clickCount, 'click Count');
    // I would keep everything in the same spot before you hit 25 clicks...
    // with this you only have saving clickCount, but apply the same process to the image information.





    if(clickCount === 25){
        for(var i=0 ; i < allBusmallImageArray.length ; i++){
            names.push(allBusmallImageArray[i].name);
            likes.push(allBusmallImageArray[i].likes);
            appearances.push(allBusmallImageArray[i].appeared);
        }
        (clickCount, 'click Count');
       
        
        
        //renderList();
        
        busmallImageLeft.removeEventListener('click', imageClickHandler);
        busmallImageMiddle.removeEventListener('click', imageClickHandler);
        busmallImageRight.removeEventListener('click', imageClickHandler);
        busmallContainer.parentNode.removeChild(busmallContainer);
        renderChart();
        
        
         
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


    
// =============================================
//Charts
//==============================================
 var chartData =  {
    labels: names,
    datasets: [{
        label: '# of Likes',
        data: likes,
        backgroundColor: '#ffbd00',
        borderColor: '#ffbd00',
        borderWidth: 9
    },
    {
        label: '# of appearances',
        data: appearances,
        backgroundColor: '28afc8',
        borderColor: '#28afc8',
        borderWidth: 9
    }]
 };

var chartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    
};

var likesChart = {
    type: 'horizontalBar',
    responsive: true,
    data: chartData,
    options: chartOptions,
    defaultFontSize: 25,
};
//render the chart

var renderChart = function(){
    var myChart = new Chart(ctx, likesChart); 
};
