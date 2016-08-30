'use strict';

var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var images = [];
var currentImageIndices = [0, 1, 2];

// Looping through imagePaths array to create new Image object for each, which pushes to images array
for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i];
  new Image(null, name);
}

// Create image li elements
var imageList = document.getElementById('images');

// Add event listener clickHandler for event 'click'
imageList.addEventListener('click', clickHandler);

// Use drawImage function to render an imageList (pass argument of currentImageIndices to ensure three different images are presented)
drawImage(0);
drawImage(1);
drawImage(2);

// Create clickHandler function for event 'click' which calls on drawImage function

function clickHandler(event) {
  console.log('Event target:', event.target);
  var matchPath = event.target.getAttribute('src');
  console.log('Match path:', matchPath);
  var arrayOfRandomIndices = randomIndices();
  console.log('Array of random indices:', arrayOfRandomIndices);

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
      console.log('Found it!', currentImageObject);
      currentImageObject.clicks += 1
    }
  }
  currentImageIndices = arrayOfRandomIndices;
// Reset imageList;
    imageList.textContent = '';
    drawImage(arrayOfRandomIndices[0]);
    drawImage(arrayOfRandomIndices[1]);
    drawImage(arrayOfRandomIndices[2]);
}

// Create function to randomize image list by accessing three random indices of images array (if equal, generates new random number)
function randomIndices() {
  var firstRandomIndex = Math.floor(Math.random() * images.length);
  var secondRandomIndex = Math.floor(Math.random() * images.length);

  while (firstRandomIndex === secondRandomIndex) {
    secondRandomIndex = Math.floor(Math.random() * images.length);
  }

  var thirdRandomIndex = Math.floor(Math.random() * images.length);

  while (thirdRandomIndex === firstRandomIndex || thirdRandomIndex === secondRandomIndex) {
    thirdRandomIndex = Math.floor(Math.random() * images.length);
  }
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}

// Create function to draw images based on object path
function drawImage(index) {
// Use the image path for the src
// (image.path)
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

function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = 'imgs/' + path;

  images.push(this);
}

// Create chart using charjs library
var ctx = document.getElementById('chart_canvas');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [images[0].path, images[1].path, images[2].path],
    datasets: [
      {
      data: [images[0].clicks, images[1].clicks, images[2].clicks]
    }
    ]
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
