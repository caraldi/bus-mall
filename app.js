'use strict';

var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var images = [];

// Looping through imagePaths array to create new Image object for each, which pushes to images array
for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i];
  new Image(null, name);
}
console.log(imagePaths, images);

// Create elements
var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage();
drawImage();
drawImage();

// Create clickHandler function for event 'click' which calls on drawImage function
function clickHandler(e) {
// Clear list
  console.log(e.target);
// Use event target to determine which image was clicked (loop through and compare paths of each)
// Add to the views of all images displayed
// Add to clicks of just the clicked image
  imageList.textContent = '';
  drawImage();
  drawImage();
  drawImage();
}

// Needs to eventually draw out all three
function drawImage() {
// Use the image path for the src
// (image.path)
    var img = document.createElement('img');
    var li = document.createElement('li');
    var imageList = document.getElementById('images');
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    var randomPath = imagePaths[randomIndex];

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
