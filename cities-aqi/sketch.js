let data;
let allDates = [];
let cityData = {};
let dateSlider;
let currentDayIndex = 0;
let oscillators = {};
let selectedCity = null;
let cityTimelineInterval;
let citiesSorted = [];
let cityButtons = [];
let isMusicPlaying = false;
let stopButton;

function preload() {
  let url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVf4UUyBFa8M4espW0WoUm914L21XGJu7mFyxLYA4U9-uJBoXuykUaAJImFe2wnXQD1ZBECsjeVC81/pub?gid=399669869&single=true&output=csv";
  data = loadTable(url, "csv", "header");
}


function setup() {
  clear();
  createCanvas(1000, 800);
  canvas.style.border = 'none';
  

  let rows = data.getRows();
  rows.forEach((row) => {
    let city = row.get("City");
    let date = row.get("Date");
    let aqi = row.getNum("AQI");

    if (!cityData[city]) cityData[city] = [];
    cityData[city].push({ date, aqi });

    if (!allDates.includes(date)) allDates.push(date);
  });

  allDates.sort();
  citiesSorted = Object.keys(cityData).sort();

  dateSlider = createSlider(0, allDates.length - 1, 0, 1);
  dateSlider.style("width", "300px");
  dateSlider.input(() => {
    currentDayIndex = dateSlider.value();
    redraw();
  });

  noLoop();

  createCityButtons();

  stopButton = createButton("Stop");
  stopButton.position(width / 2 - 50, height / 2 + 90); // Position below slider
  stopButton.mousePressed(stopMusicAndAnimation);
}

function draw() {
  clear();
  noStroke();  // Disable borders for all elements
  textSize(16);
  textAlign(LEFT);
  fill(0); // Set text color to black

  let selectedDate = allDates[currentDayIndex];
  let formattedDate = formatDate(selectedDate);

  if (selectedCity) {
    drawCentralVisualization(selectedCity, selectedDate);
  }

  if (selectedCity) {
    let sliderX = width / 2 - dateSlider.width / 2;
    let sliderY = height / 2 + 50;
    dateSlider.position(sliderX, sliderY);

    // Display the date in plain black text
    textAlign(CENTER);
    fill(0); // Ensure the text is black
    text(`${formattedDate}`, sliderX + dateSlider.width / 2, sliderY - 10); // Date as plain text
  }

  drawSmallMultiplesGrid(selectedDate);
}

function formatDate(dateString) {
  let dateParts = dateString.split("-");
  let year = dateParts[0];
  let monthIndex = parseInt(dateParts[1], 10) - 1;
  let day = dateParts[2];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[monthIndex]} ${parseInt(day)}, ${year}`;
}

function drawCentralVisualization(city, date) {
  let maxRadius = 200;
  let centerX = width / 2;
  let centerY = height / 3 - 50;
  drawConcentricCircle(city, date, centerX, centerY, maxRadius);
}

function drawSmallMultiplesGrid(date) {
  let cols = 3; // Number of columns
  let cellWidth = width / cols;
  let cellHeight = height / (ceil(citiesSorted.length / cols) + 4);
  let startY = height / 2 + 150;

  citiesSorted.forEach((city, index) => {
    let col = index % cols;
    let row = floor(index / cols);
    let x = col * cellWidth + cellWidth / 2; // Center X of the cell
    let y = startY + row * cellHeight + cellHeight / 2; // Center Y of the cell

    drawConcentricCircle(city, date, x, y, min(cellWidth, cellHeight) / 2 - 20);

    if (cityButtons[index]) {
      let buttonWidth = 80; // Approximate button width for centering
      cityButtons[index].position(
        x - buttonWidth / 2, // Center the button below the circle
        y + min(cellWidth, cellHeight) / 2 + 10 // Position below the circle with spacing
      );
    }

    if (selectedCity === city) {
      noStroke();
      fill(200, 200, 200, 50);
      rectMode(CENTER);
      let boxSize = min(cellWidth, cellHeight) - 20;
      rect(x, y, boxSize, boxSize);
    }
  });
}
// function drawSmallMultiplesGrid(date) {
//   let cols = 3;
//   let cellWidth = width / cols;
//   let cellHeight = height / (ceil(citiesSorted.length / cols) + 4);
//   let startY = height / 2 + 150;

//   citiesSorted.forEach((city, index) => {
//     let col = index % cols;
//     let row = floor(index / cols);
//     let x = col * cellWidth + cellWidth / 2;
//     let y = startY + row * cellHeight + cellHeight / 2;

//     drawConcentricCircle(city, date, x, y, min(cellWidth, cellHeight) / 2 - 20);

//     if (cityButtons[index]) {
//       cityButtons[index].position(x - 40, y + min(cellWidth, cellHeight) / 2);
//     }

//     if (selectedCity === city) {
//       noStroke();
//       fill(200, 200, 200, 50);
//       rectMode(CENTER);
//       let boxSize = min(cellWidth, cellHeight) - 20;
//       rect(x, y, boxSize, boxSize);
//     }
//   });
// }

function drawConcentricCircle(city, date, centerX, centerY, maxRadius) {
  let categories = [
    { range: [1, 50], color: color(0, 255, 0) },
    { range: [51, 100], color: color(255, 255, 0) },
    { range: [101, 150], color: color(255, 165, 0) },
    { range: [151, 200], color: color(255, 0, 0) },
    { range: [201, 300], color: color(128, 0, 128) },
    { range: [301, 500], color: color(139, 69, 19) },
    { range: [501, 1000], color: color(105, 105, 105) },
  ];

  let cityAQIData = cityData[city].find((d) => d.date === date);
  if (!cityAQIData) return;
  let aqi = cityAQIData.aqi;

  let baseRadius = maxRadius / categories.length;
  let residualAQI = aqi;

  if (selectedCity === city) {
    if (!oscillators[city]) {
      oscillators[city] = {};
    }
    if (!oscillators[city][date]) {
      oscillators[city][date] = new p5.Oscillator("sine");
      oscillators[city][date].start();
    }

    let oscillator = oscillators[city][date];
    let frequency = map(aqi, 0, 2000, 50, 1000);
    let volume = map(aqi, 0, 2000, 0.1, 0.5);

    oscillator.freq(frequency);
    oscillator.amp(volume, 0.9);
  }

  categories.forEach((category, index) => {
    let radius = baseRadius * (index + 1);
    noFill();
    stroke(200);
    strokeWeight(1);
    drawingContext.setLineDash([5, 5]); // Dashed line for concentric circles
    ellipse(centerX, centerY, radius * 2, radius * 2);
    drawingContext.setLineDash([]); // Reset to solid line for other elements

    let lower = category.range[0];
    let upper = category.range[1];
    let numDots = 0;

    if (index === 0) {
      numDots = min(50, residualAQI);
      residualAQI -= numDots;
    } else if (residualAQI > 0) {
      numDots = min(residualAQI, upper - lower + 1);
      residualAQI -= numDots;
    }

    for (let i = 0; i < numDots; i++) {
      let angle = random(TWO_PI);
      let distance = random(radius - baseRadius, radius);
      let x = centerX + distance * cos(angle);
      let y = centerY + distance * sin(angle);

      noStroke();
      fill(category.color);
      ellipse(x, y, 5, 5);
    }
  });
}

function createCityButtons() {
  citiesSorted.forEach((city, index) => {
    let button = createButton(city);
    button.mousePressed(() => selectCity(city));
    button.addClass("city-button");
    cityButtons.push(button);
  });
}

function selectCity(city) {
  selectedCity = city;
  currentDayIndex = 0;
  dateSlider.value(currentDayIndex);
  redraw();

  if (cityTimelineInterval) clearInterval(cityTimelineInterval);
  cityTimelineInterval = setInterval(() => {
    currentDayIndex = (currentDayIndex + 1) % allDates.length;
    dateSlider.value(currentDayIndex);
    redraw();
  }, 1000); // Speed up by reducing the interval to 1 second
}

function stopMusicAndAnimation() {
  clearInterval(cityTimelineInterval);
  for (let city in oscillators) {
    for (let date in oscillators[city]) {
      let oscillator = oscillators[city][date];
      oscillator.stop();
    }
  }
  isMusicPlaying = false;
  selectedCity = null;
  redraw();
}
