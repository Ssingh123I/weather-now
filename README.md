# WeatherNow - Real-Time Weather App

A responsive weather web application that shows current temperature and local weather details using WeatherAPI. Built with HTML, CSS, and vanilla JavaScript.

## 📋 Features

- **Current Weather Display**: Temperature, humidity, wind speed, visibility, pressure, and feels-like temperature
- **Location Search**: Search weather by city name worldwide
- **Geolocation Support**: Use your current location to get weather instantly
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Error Handling**: User-friendly messages for invalid locations or network issues
- **Asynchronous Requests**: Uses the Fetch API for smooth data loading
- **Weather Icons**: Displays current weather icons from WeatherAPI

## 🎨 Display Information

The application displays the following weather data:

### Current Weather
- **Temperature**: Current temperature in Celsius
- **Weather Description**: Detailed weather condition description
- **Humidity**: Percentage of moisture in the air
- **Wind Speed**: Speed of the wind in meters per second
- **Visibility**: Horizontal visibility distance
- **Pressure**: Atmospheric pressure in hPa
- **Feels Like**: Apparent temperature based on wind and humidity
- **Cloudiness**: Percentage of cloud coverage

### 5-Day Forecast
- **Daily Temperature**: High and low temperatures
- **Weather Icon**: Visual representation of weather condition
- **Description**: Weather condition description
- **Humidity**: Moisture percentage for each day

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- The WeatherAPI key is already configured using the provided API key

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If you have git
   git clone <repository-url>
   
   # Or download and extract the zip file
   ```

2. **Verify the API Key**
   - Open `script.js` in a text editor
   - Confirm the API key is set to your WeatherAPI key:
     ```javascript
     const API_KEY = '6a076553eb6f45f2961212446260306';
     ```
   - Save the file if you make changes

4. **Run the Application**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Visit `http://localhost:8000` in your browser

## 💻 How to Use

### Search by City
1. Type a city name in the search box
2. Press Enter or click the Search button
3. Weather data for that location will be displayed

### Use Your Current Location
1. Click the "Use My Location" button
2. Allow location access when prompted
3. Weather for your current location will be displayed

### View Forecast
- Scroll down to see the 5-day forecast cards
- Each card shows the date, temperature, weather condition, and humidity

## 📁 Project Structure

```
weather/
├── index.html          # Main HTML file with structure
├── style.css           # Complete styling and responsive design
├── script.js           # JavaScript with API integration
└── README.md          # Project documentation
```

## 🔧 Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Accessibility considerations (ARIA labels, semantic tags)
- Responsive meta viewport tag
- External icon library (Font Awesome)

### CSS Styling
- CSS Grid and Flexbox for layout
- CSS Variables for consistent theming
- Responsive design with media queries
- Smooth animations and transitions
- Gradient backgrounds for visual appeal

### JavaScript Features

#### Asynchronous Programming
- **Fetch API**: Modern alternative to XMLHttpRequest
- **Async/Await**: Clean error handling with try-catch blocks
- **Promise handling**: Proper error propagation

#### Error Handling
- API error detection (404, 401, network errors)
- User-friendly error messages
- Automatic error clearing
- Console logging for debugging
- Unhandled rejection detection

#### API Integration
- Weather data fetching by city name
- Forecast data fetching by coordinates
- Geolocation API integration
- Proper HTTP status code handling
- Retry-friendly architecture

## 🌐 API Reference

### WeatherAPI Current Weather API
```
GET /v1/current.json?key={apiKey}&q={location}&aqi=yes
```

- `{location}` can be a city name or geographic coordinates (`lat,lon`)
- Example: `https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London&aqi=yes`

## 🎯 Temperature Units

The application uses **Celsius** as the default unit. WeatherAPI current data is returned in Celsius by default.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚠️ Error Handling Examples

The application handles various error scenarios:

- **City Not Found**: "City 'xyz' not found. Please check the spelling and try again."
- **Network Error**: "Unable to fetch weather data. Please try again later."
- **Location Access Denied**: "Unable to retrieve your location. Please enable location services."

## 🔒 Security Considerations

⚠️ **Important**: The API key in this demo version is visible in the code. For production:

1. **Use a Backend Server**: Store the API key on the server, not in the client
2. **Use Environment Variables**: Never hardcode sensitive data
3. **Implement Authentication**: Add user authentication if needed
4. **Use HTTPS**: Always use HTTPS in production
5. **Add CORS Proxy**: Consider using a proxy server if needed

## 🌟 Key Features Explained

### Dynamic Weather Icons
- Weather icons update based on current conditions
- Uses WeatherAPI icons
- Responsive sizing for different devices

### Real-Time Data
- Fetches current data from WeatherAPI
- Updates on each search or location request
- No automatic refresh (user-triggered only)

### Smooth User Experience
- Loading spinner during API calls
- Fade-in animations for content
- Responsive layout adjustments
- Auto-dismissing error messages

## 📊 Data Flow

```
User Input (Search/Location)
    ↓
API Request (Fetch API)
    ↓
Error Handling (Try-Catch)
    ↓
Data Processing
    ↓
DOM Update (Display Weather)
    ↓
User Views Results
```

## 🚀 Future Enhancements

- Local storage for saved locations
- Multiple location comparison
- Hourly forecast view
- Weather alerts and warnings
- Dark/Light theme toggle
- Historical weather data
- Air quality index
- UV index information
- Rainfall predictions
- Weather radar integration

## 🐛 Troubleshooting

### Application Shows "API Key not configured"
- Ensure you've added your WeatherAPI key to `script.js`
- Check that the API key is valid and active
- Verify there are no typos in the API key

### Weather Data Not Loading
- Check your internet connection
- Verify the API key is correct
- Check the browser's developer console (F12) for errors
- Ensure you haven't exceeded the API rate limit

### Location Not Working
- Check browser location permissions
- Ensure HTTPS is used (required for geolocation in production)
- Some browsers may block location access

### Icons Not Displaying
- Check internet connection (icons are loaded from CDN)
- Verify Font Awesome CDN is accessible
- Check browser console for any loading errors

## 📄 License

This project is provided as-is for educational and personal use.

## 🙏 Attribution

- Weather data: [WeatherAPI](https://www.weatherapi.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- API documentation: [WeatherAPI Docs](https://www.weatherapi.com/docs/)

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the API documentation
3. Check browser console for error messages
4. Verify your API key is active

---

**Created**: 2026  
**Last Updated**: June 4, 2026  
**Version**: 1.0
