let data; // Global variable for the data
let allDates = []; // Store all unique dates
let cityData = {}; // Store data grouped by city
let dateSlider; // Slider to select date
let currentDayIndex = 0; // Track selected day
let oscillators = {}; // Store oscillators for each city and date
let selectedCity = null; // Track selected city
let cityTimelineInterval; // Store the interval for the city timeline
let stopButton; // Button to stop the music

function preload() {
  let url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVf4UUyBFa8M4espW0WoUm914L21XGJu7mFyxLYA4U9-uJBoXuykUaAJImFe2wnXQD1ZBECsjeVC81/pub?gid=399669869&single=true&output=csv";
  data = loadTable(url, "csv", "header");
}

function setup() {
  createCanvas(1000, 800);

  // Group data by city and extract unique dates
  let rows = data.getRows();
  rows.forEach((row) => {
    let city = row.get("City");
    let date = row.get("Date");
    let aqi = row.getNum("AQI");

    if (!cityData[city]) cityData[city] = [];
    cityData[city].push({ date, aqi });

    if (!allDates.includes(date)) allDates.push(date);
  });

  allDates.sort(); // Sort dates

  // Create a slider to select the date
  dateSlider = createSlider(0, allDates.length - 1, 0, 1);
  dateSlider.position(20, height - 40);
  dateSlider.style("width", "300px");
  dateSlider.input(() => {
    currentDayIndex = dateSlider.value(); // Update the current day
    redraw(); // Redraw with the new date
  });

  // Create city buttons
  createCityButtons();

  // Create Stop Music button
  stopButton = createButton("Stop Music");
  stopButton.position(20, height - 100);
  stopButton.id("stop-button");
  stopButton.mousePressed(stopMusic);

  noLoop(); // Only draw when slider changes
}

function draw() {
  background(255);
  textSize(16);
  textAlign(LEFT);
  fill(0);

  // Format the date as "Oct 23, 2024"
  let selectedDate = allDates[currentDayIndex];
  let formattedDate = formatDate(selectedDate);

  text(`Date: ${formattedDate}`, 20, height - 60);

  let cities = Object.keys(cityData).slice(0, 6); // Limit to 6 cities for a 3x2 grid
  let cols = 3; // Fixed columns
  let rows = 2; // Fixed rows
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  cities.forEach((city, index) => {
    let col = index % cols;
    let row = floor(index / cols);
    let x = col * cellWidth + cellWidth / 2; // Center of the cell
    let y = row * cellHeight + cellHeight / 2;

    drawConcentricCircle(city, selectedDate, x, y, min(cellWidth, cellHeight) / 2 - 20); // Adjust size to fit

    // Highlight selected city with a transparent light grey rectangle
    if (selectedCity === city) {
      noStroke(); // No border
      fill(200, 200, 200, 50); // Very light grey with transparency
      rectMode(CENTER);
      let maxRadius = min(cellWidth, cellHeight) / 2 - 20;
      let boxSize = maxRadius * 2;
      rect(x, y, boxSize, boxSize);
    }
  });
}

// Function to format the date as "Oct 23, 2024"
function formatDate(dateString) {
  let dateParts = dateString.split('-'); // Split the date by the dash
  let year = dateParts[0];
  let monthIndex = parseInt(dateParts[1], 10) - 1; // Month index (0-based)
  let day = dateParts[2];

  // Array of month names
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Format the date as "Oct 23, 2024"
  let formattedDate = `${monthNames[monthIndex]} ${parseInt(day)}, ${year}`;
  return formattedDate;
}

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
    if (!oscillators[city]) oscillators[city] = {};
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
    drawingContext.setLineDash([5, 5]);
    ellipse(centerX, centerY, radius * 2, radius * 2);

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

  textAlign(CENTER);
  fill(0);
  textSize(14);
  text(`${city}\nAQI: ${aqi}`, centerX, centerY + maxRadius + 20);
}

function stopMusic() {
  Object.keys(oscillators).forEach((city) => {
    Object.keys(oscillators[city]).forEach((date) => {
      let oscillator = oscillators[city][date];
      if (oscillator) {
        oscillator.amp(0, 0.5);
        oscillator.stop();
        delete oscillators[city][date];
      }
    });
  });

  if (cityTimelineInterval) {
    clearInterval(cityTimelineInterval);
    cityTimelineInterval = null;
  }

  selectedCity = null;
}

function createCityButtons() {
  let cities = Object.keys(cityData);
  cities.forEach((city, index) => {
    let button = createButton(city);
    button.position(20 + index * 100, 20);
    button.mousePressed(() => {
      if (cityTimelineInterval) {
        clearInterval(cityTimelineInterval);
      }

      selectedCity = city;
      cityTimelineInterval = setInterval(() => {
        currentDayIndex = (currentDayIndex + 1) % allDates.length;
        dateSlider.value(currentDayIndex);
        redraw();
      }, 1000);
    });
    button.addClass("city-button");
  });
}
