# ⚡ Quick Start Guide

## 30-Second Setup

### 1️⃣ Confirm API Key
- The WeatherAPI key is already set in `script.js`.
- If you want to change it, open `script.js` and update:
  `const API_KEY = '';`

### 2️⃣ Open & Use (30 seconds)
- Double-click `index.html` to open in browser
- Search for any city or use "Use My Location"
- Done! ✅

---

## 🎯 What You Get

✅ Current weather for any location  
✅ Temperature, humidity, wind speed, pressure, visibility  
✅ Beautiful, responsive design  
✅ Works on phone, tablet, desktop  

---

## 🔧 If Something Doesn't Work

| Problem | Solution |
|---------|----------|
| "API Key not configured" | Add your API key to script.js (line 3) |
| "City not found" | Check spelling or add country code (e.g., "London,GB") |
| "No location access" | Enable location in browser settings |
| Blank page | Check browser console (F12) for errors |
| Icons not showing | Check internet connection |

---

## 📋 File Overview

- **index.html** - Main page structure
- **style.css** - All styling and responsive design
- **script.js** - Weather API integration and logic
- **README.md** - Full documentation
- **SETUP.js** - Configuration guide and examples

---

## 🚀 Run with Local Server (Optional)

Instead of double-clicking, you can run a local server:

**Windows PowerShell:**
```powershell
cd C:\Users\[YourUsername]\OneDrive\Desktop\weather
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Mac/Linux Terminal:**
```bash
cd ~/Desktop/weather
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🎨 Features at a Glance

### Current Weather Displays:
- 🌡️ Temperature
- 💧 Humidity
- 💨 Wind Speed
- 👁️ Visibility
- 🔋 Pressure
- 🌤️ Feel Like Temperature
- ☁️ Cloud Coverage

### 5-Day Forecast Shows:
- Date and day
- High/Low temperature
- Weather condition
- Humidity

---

## 🌍 How It Works

1. **You enter a city name** or click "Use My Location"
2. **App fetches data** from OpenWeatherMap API
3. **Beautiful weather display** appears with all info
