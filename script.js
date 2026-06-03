// WeatherAPI configuration
const API_KEY = '';
const BASE_URL = 'https://api.weatherapi.com/v1';

// =====================
// DOM ELEMENTS
// =====================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastSection = document.getElementById('forecastSection');
const welcomeSection = document.getElementById('welcomeSection');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const forecastContainer = document.getElementById('forecastContainer');

// =====================
// EVENT LISTENERS
// =====================
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
locationBtn.addEventListener('click', handleLocationClick);

// =====================
// MAIN FUNCTIONS
// =====================

/**
 * Handle search button click
 */
function handleSearch() {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeatherByCity(city);
        searchInput.value = '';
    } else {
        showError('Please enter a city name');
    }
}

/**
 * Handle geolocation request
 */
function handleLocationClick() {
    if (navigator.geolocation) {
        showLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoordinates(latitude, longitude);
            },
            (error) => {
                showLoading(false);
                showError('Unable to retrieve your location. Please enable location services.');
                console.error('Geolocation error:', error);
            }
        );
    } else {
        showError('Geolocation is not supported by your browser');
    }
}

/**
 * Fetch weather data by city name
 * @param {string} city - City name
 */
async function fetchWeatherByCity(city) {
    try {
        showLoading(true);
        hideError();

        const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;
        const res = await fetch(url);
        if (!res.ok) {
            if (res.status === 400) {
                throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
            }
            throw new Error('Unable to fetch weather data. Please try again later.');
        }

        const data = await res.json();
        displayCurrentWeather(data);
        forecastSection.classList.add('hidden');
        hideWelcome();

        showLoading(false);
    } catch (error) {
        showLoading(false);
        showError(error.message);
        console.error('Weather fetch error:', error);
    }
}

/**
 * Fetch weather data by coordinates
 * @param {number} latitude - Latitude
 * @param {number} longitude - Longitude
 */
async function fetchWeatherByCoordinates(latitude, longitude) {
    try {
        showLoading(true);
        hideError();

        const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=yes`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Unable to fetch weather data for your location.');
        }

        const data = await res.json();
        displayCurrentWeather(data);
        forecastSection.classList.add('hidden');
        hideWelcome();

        showLoading(false);
    } catch (error) {
        showLoading(false);
        showError(error.message);
        console.error('Coordinates weather fetch error:', error);
    }
}

/**
 * Display current weather data from WeatherAPI
 * @param {object} data - Weather data from API
 */
function displayCurrentWeather(data) {
    try {
        const { location, current } = data;
        const cityName = location.name ? `${location.name}, ${location.country}` : 'Unknown Location';

        document.getElementById('cityName').textContent = cityName;
        document.getElementById('currentDate').textContent = formatDate(new Date(location.localtime_epoch * 1000));
        document.getElementById('weatherIcon').src = current.condition.icon;
        document.getElementById('weatherIcon').alt = current.condition.text;
        document.getElementById('weatherDescription').textContent = current.condition.text;
        document.getElementById('temperature').textContent = `${current.temp_c}°C`;
        document.getElementById('humidity').textContent = `${current.humidity}%`;
        document.getElementById('windSpeed').textContent = `${current.wind_kph} km/h`;
        document.getElementById('visibility').textContent = `${current.vis_km} km`;
        document.getElementById('pressure').textContent = `${current.pressure_mb} hPa`;
        document.getElementById('feelsLike').textContent = `${current.feels_like_c}°C`;
        document.getElementById('cloudiness').textContent = `${current.cloud}%`;

        currentWeatherSection.classList.remove('hidden');
    } catch (error) {
        console.error('Error displaying current weather:', error);
        showError('Error displaying weather data');
    }
}

// =====================
// UI HELPER FUNCTIONS
// =====================

/**
 * Show loading spinner
 * @param {boolean} show - Show or hide
 */
function showLoading(show) {
    if (show) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

/**
 * Show error message
 * @param {string} message - Error message
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(hideError, 5000);
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.add('hidden');
}

/**
 * Hide welcome section
 */
function hideWelcome() {
    welcomeSection.classList.add('hidden');
}

/**
 * Show welcome section
 */
function showWelcome() {
    welcomeSection.classList.remove('hidden');
}

// =====================
// UTILITY FUNCTIONS
// =====================

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Format date to short string
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDateShort(date) {
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// =====================
// INITIALIZATION
// =====================

window.addEventListener('DOMContentLoaded', () => {
    showWelcome();
});

// =====================
// ERROR HANDLING
// =====================

/**
 * Global error handler
 */
window.addEventListener('error', (error) => {
    console.error('Unhandled error:', error);
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
/**
 * Hide welcome section
 */
function hideWelcome() {
    welcomeSection.classList.add('hidden');
}

/**
 * Show welcome section
 */
function showWelcome() {
    welcomeSection.classList.remove('hidden');
}

// =====================
// UTILITY FUNCTIONS
// =====================

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Format date to short string
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDateShort(date) {
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// =====================
// INITIALIZATION
// =====================

window.addEventListener('DOMContentLoaded', () => {
    showWelcome();
});

// =====================
// ERROR HANDLING
// =====================

/**
 * Global error handler
 */
window.addEventListener('error', (error) => {
    console.error('Unhandled error:', error);
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
