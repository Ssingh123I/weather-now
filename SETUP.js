// =====================
// WEATHER API CONFIGURATION GUIDE
// =====================

// STEP 1: Get Your API Key
// =======================
// 1. Visit: https://openweathermap.org/api
// 2. Click "Sign Up" and create a free account
// 3. Go to API keys section
// 4. Copy the default API key (or create a new one)

// STEP 2: Configure the API Key
// =============================
// In script.js, replace the placeholder API key:
//
// BEFORE:
// const API_KEY = 'your_api_key_here';
//
// AFTER:
// const API_KEY = 'sk_live_abc123def456...';

// STEP 3: Verify Your Setup
// ==========================
// 1. Open the HTML file in a browser
// 2. Search for a city
// 3. If you see the weather data, you're all set!
// 4. If you see an error, check the browser console (F12)

// =====================
// API ENDPOINTS USED
// =====================

// Current Weather Endpoint:
// GET https://api.openweathermap.org/data/2.5/weather
// Parameters:
//   - q: City name (e.g., "London")
//   - units: "metric" for Celsius, "imperial" for Fahrenheit
//   - appid: Your API key

// Example:
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY

// Forecast Endpoint:
// GET https://api.openweathermap.org/data/2.5/forecast
// Parameters:
//   - lat: Latitude
//   - lon: Longitude
//   - units: "metric" for Celsius, "imperial" for Fahrenheit
//   - appid: Your API key

// Example:
// https://api.openweathermap.org/data/2.5/forecast?lat=51.5&lon=-0.1&units=metric&appid=YOUR_API_KEY

// =====================
// SAMPLE API RESPONSE
// =====================

// Current Weather Response:
// {
//   "coord": { "lon": -0.1257, "lat": 51.5085 },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "main": {
//     "temp": 15.5,
//     "feels_like": 14.8,
//     "temp_min": 14.2,
//     "temp_max": 16.8,
//     "pressure": 1013,
//     "humidity": 72
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 3.5,
//     "deg": 230
//   },
//   "clouds": {
//     "all": 10
//   },
//   "name": "London",
//   "sys": {
//     "country": "GB"
//   }
// }

// =====================
// TROUBLESHOOTING
// =====================

// Error: "Invalid API key"
// Solution: 
//   1. Check you copied the key correctly
//   2. Verify the key is active on OpenWeatherMap
//   3. Ensure there are no spaces before/after the key

// Error: "City not found"
// Solution:
//   1. Check the city name spelling
//   2. Try using country code (e.g., "London,GB")
//   3. Use official city names

// Error: "Unable to retrieve your location"
// Solution:
//   1. Enable location services in browser settings
//   2. Check browser console for permission denied error
//   3. HTTPS is required for geolocation in production

// Error: Nothing happens when searching
// Solution:
//   1. Check browser console (F12) for errors
//   2. Verify API key is configured
//   3. Check internet connection
//   4. Check that the API key is active

// =====================
// ENVIRONMENT SETUP
// =====================

// For Windows:
// 1. Extract the weather folder to Desktop
// 2. Open index.html in a web browser
// 3. OR open PowerShell in the folder and run:
//    python -m http.server 8000
//    Then visit: http://localhost:8000

// For macOS/Linux:
// 1. Extract the weather folder
// 2. Open index.html in a web browser
// 3. OR open terminal in the folder and run:
//    python3 -m http.server 8000
//    Then visit: http://localhost:8000

// Using Node.js (any OS):
// npm install -g http-server
// cd path/to/weather
// http-server
// Visit: http://localhost:8080

// =====================
// API RATE LIMITS (FREE TIER)
// =====================

// Free Plan Limits:
// - 1,000 calls/day
// - 60 calls/minute
// - 1 API key

// If you hit the limit:
// - Wait until the next day
// - Upgrade to a paid plan
// - Use multiple API keys (if needed)

// =====================
// UNIT CONVERSION
// =====================

// Temperature:
// Celsius to Fahrenheit: (C × 9/5) + 32
// Fahrenheit to Celsius: (F - 32) × 5/9

// Wind Speed:
// m/s to km/h: multiply by 3.6
// m/s to mph: multiply by 2.237

// Distance:
// meters to kilometers: divide by 1000
// kilometers to miles: multiply by 0.621371

// =====================
// WEATHER ICON CODES
// =====================

// 01d/01n - Clear sky (day/night)
// 02d/02n - Few clouds (day/night)
// 03d/03n - Scattered clouds (day/night)
// 04d/04n - Broken clouds (day/night)
// 09d/09n - Shower rain (day/night)
// 10d/10n - Rain (day/night)
// 11d/11n - Thunderstorm (day/night)
// 13d/13n - Snow (day/night)
// 50d/50n - Mist (day/night)

// =====================
// CORS AND PRODUCTION DEPLOYMENT
// =====================

// When deploying to production:

// 1. BACKEND PROXY APPROACH (Recommended):
//    - Store API key on your backend server
//    - Create an endpoint: /api/weather?city=London
//    - Forward requests to OpenWeatherMap from backend
//    - Prevents exposing API key

// 2. ENVIRONMENT VARIABLES:
//    - Use process.env for Node.js
//    - Use .env files with dotenv package
//    - Never commit .env to version control

// 3. HTTPS REQUIREMENT:
//    - Geolocation requires HTTPS
//    - APIs over HTTPS for security
//    - Use SSL certificates (Let's Encrypt is free)

// Example Backend Setup (Node.js/Express):
// app.get('/api/weather', async (req, res) => {
//   const { city } = req.query;
//   const apiKey = process.env.WEATHER_API_KEY;
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//   );
//   const data = await response.json();
//   res.json(data);
// });

// Then update JavaScript:
// const response = await fetch(`/api/weather?city=${city}`);

// =====================
// RESOURCES
// =====================

// Official Documentation:
// https://openweathermap.org/api

// API Keys:
// https://openweathermap.org/api/account/api_keys

// Weather Icons:
// https://openweathermap.org/weather-conditions

// Pricing:
// https://openweathermap.org/price

// Free API Alternatives:
// - Open-Meteo (openmeteo.com)
// - WeatherAPI (weatherapi.com)
// - Weather.gov (USA only)
// - wttr.in (Text-based)

// =====================
// SUPPORT
// =====================

// Questions or Issues?
// 1. Check the README.md file
// 2. Review OpenWeatherMap API docs
// 3. Check browser console (F12) for errors
// 4. Visit: https://openweathermap.org/faq
