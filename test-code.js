// Dealing with display of data in chart
var chartButton = document.getElementById('show_chart');
chartButton.addEventListener('click', chartClickHandler);

// Create function for chart click handler
// Needs to be placed in event handler function
function chartClickHandler() {

// Create two arrays to add image names as labels to chart and to track clicks as bar data
var imageNames = [];
var imageClicks = [];

for (i = 0; i < images.length; i++) {
  imageNames.push(images[i].name);
  imageClicks.push(images[i].clicks);
  }
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
