'use strict';

// Begin code dealing with Image objects display

var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var images = [];
var currentImageIndices = [0, 1, 2];
var totalClicks = 0;

// Create Image objects to be pushed to images array
function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = 'imgs/' + path;

  images.push(this);
}

// Loop through imagePaths array to create new Image object for each image
for (var i = 0; i < imagePaths.length; i++) {

// Use split to remove path for name variable
  var name = imagePaths[i].split('.')[0];
  var path = imagePaths[i];

  new Image(name, path);
}

// Create function to draw images based on object path
function drawImage(index) {

// Use the image path for the src
    var img = document.createElement('img');
    var li = document.createElement('li');
    var imageList = document.getElementById('images');
    var randomPath = images[index].path;

// Set src
    img.setAttribute('src', randomPath);

// Add to DOM
    li.appendChild(img);
    imageList.appendChild(li);
}

// Create ul of images
var imageList = document.getElementById('images');

// Add event listener clickHandler for event 'click' on imageList
imageList.addEventListener('click', clickHandler);

// Use drawImage function to render an imageList (hard code argument of currentImageIndices to ensure three different images are presented)
drawImage(0);
drawImage(1);
drawImage(2);

// Create clickHandler function for event 'click' which calls on drawImage function
function clickHandler(event) {
  var matchPath = event.target.getAttribute('src');
  var arrayOfRandomIndices = randomIndices();

  for(var j = 0; j < currentImageIndices.length; j++) {
    var currentIndex = currentImageIndices[j];
    var displayedObject = images[currentIndex];
    displayedObject.views += 1;
  }

// Use event target to determine which image was clicked (loop through and compare paths of each)
  for (var k = 0; k < images.length; k++) {
    var currentImageObject = images[k];
    console.log('Images:', k, currentImageObject);
    if (currentImageObject.path === matchPath) {
      currentImageObject.clicks += 1
    }
  }
  currentImageIndices = arrayOfRandomIndices;

// Reset imageList;
    imageList.textContent = '';
    drawImage(arrayOfRandomIndices[0]);
    drawImage(arrayOfRandomIndices[1]);
    drawImage(arrayOfRandomIndices[2]);

// End of code dealing with Image objects display

// Begin code dealing with display of data in chart
var chartButton = document.getElementById('show_chart');
chartButton.addEventListener('click', chartClickHandler);

// Create two arrays to add image names as labels to chart and tracked clicks as bar data
var imageNames = [];
var imageClicks = [];

// Push names and clicks to imageNames and imageClicks arrays
    for (i = 0; i < images.length; i++) {
      imageNames.push(images[i].name);
      imageClicks.push(images[i].clicks);
      }

    // Create chartClickHandler function to display imageClicks as votes
    // Needs to be placed in event handler function
    function chartClickHandler() {

    }

    // Create chart using charjs library
    var ctx = document.getElementById('chart_canvas');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: imageNames,
        datasets: [{
          data: imageClicks
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
}

// Create function to create randomized index
function randomIndex() {
  return Math.floor(Math.random() * images.length);
}

// Create function to randomize image list by accessing three random indices of images array (if equal, generates new random number)
function randomIndices() {
  var firstRandomIndex = randomIndex();
  var secondRandomIndex = randomIndex();
  var thirdRandomIndex = randomIndex();

  while (currentImageIndices.indexOf(firstRandomIndex) !== -1) {
    firstRandomIndex = randomIndex();
  }
  while (firstRandomIndex === secondRandomIndex || currentImageIndices.indexOf(secondRandomIndex) !== -1) {
    secondRandomIndex = randomIndex();
  }
  while (thirdRandomIndex === firstRandomIndex || thirdRandomIndex === secondRandomIndex || currentImageIndices.indexOf(thirdRandomIndex) !== -1) {
    thirdRandomIndex = randomIndex();
  }
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}
