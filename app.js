'use strict';

var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var images = [];
var currentImageIndices = [0, 1, 2];

// Looping through imagePaths array to create new Image object for each, which pushes to images array
for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i];
  new Image(null, name);
}
console.log(imagePaths, images);

// Create elements
var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage(0);
drawImage(1);
drawImage(2);

// Create clickHandler function for event 'click' which calls on drawImage function
function clickHandler(e) {
  console.log('Target clicked:', event.target);
  var matchPath = event.target.getAttribute('src');
  var arrayOfRandomIndices = randomIndices();
  console.log('Match path:', matchPath);

  for(var j = 0; j < currentImageIndices.length; j++) {
    var currentIndex = currentImageIndices[j];
    var displayedObject = images[currentIndex];
    displayedObject.views += 1;
  }
// Use event target to determine which image was clicked (loop through and compare paths of each)
function findObject() {
  for (var k = 0; k < images.length; k++) {
    var currentImageObject = images[k];
    console.log('Images:', k, currentImageObject);
    if (currentImageObject.path === matchPath) {
      console.log('Found it!', currentImageObject);
      currentImageObject.clicks += 1
    }
  }
}
currentImageIndices = arrayOfRandomIndices;

// Reset imageList;
  imageList.textContent = '';
  drawImage(arrayOfRandomIndices[0]);
  drawImage(arrayOfRandomIndices[1]);
  drawImage(arrayOfRandomIndices[2]);
}

function randomIndices() {
  var firstRandomIndex = Math.floor(Math.random() * images.length);
  var secondRandomIndex = Math.floor(Math.random() * images.length);
  while (firstRandomIndex === secondRandomIndex) {
    secondRandomIndex = Math.floor(Math.random() * images.length);
  }
  var thirdRandomIndex = Math.floor(Math.random() * images.length);
  while (thirdRandomIndex === firstRandomIndex || secondRandomIndex) {
    thirdRandomIndex = Math.floor(Math.random() * images.length);
  }
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}

function drawImage(index) {
// Use the image path for the src
// (image.path)
    var img = document.createElement('img');
    var li = document.createElement('li');
    var imageList = document.getElementById('images');
    var randomPath = images[index].path;

// Set src
    img.setAttribute('src', 'imgs/' + randomPath);

// Add to DOM
    li.appendChild(img);
    imageList.appendChild(li);
}

function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = path;

  images.push(this);
}
