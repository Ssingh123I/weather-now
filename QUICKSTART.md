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
4. **5-day forecast** loads automatically below

---

## 📱 Responsive Design

- **Desktop**: Full-size interface with all info visible
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with smaller fonts

---

## 🔐 Security Note

⚠️ Your API key is visible in the code (demo only)  
For production, store the API key on a backend server instead.

---

## 🆘 Need Help?

1. **Check error message** - It usually tells you what's wrong
2. **Read README.md** - Full documentation there
3. **Check SETUP.js** - Configuration tips and examples
4. **Browser Console** - Press F12, look at the Console tab
5. **OpenWeatherMap API Docs** - https://openweathermap.org/api

---

## ✨ Tips & Tricks

💡 **Search Tips:**
- Use exact city names: "London" not "lndn"
- Add country code for clarity: "London,GB" or "Paris,FR"
- Try state code: "New York,US"

💡 **Forecast:**
- Shows one forecast per day at noon
- Includes high/low temps
- Shows humidity percentage

💡 **Location:**
- First time may ask for permission
- Allow browser to access your location
- Works best with GPS or WiFi

---

## 🎯 What to Try First

1. Search for: **London**
2. Search for: **New York**
3. Search for: **Tokyo,JP**
4. Click: **Use My Location**

---

## 📊 Example Cities to Test

- London, GB
- Paris, FR
- Tokyo, JP
- New York, US
- Sydney, AU
- Mumbai, IN
- Dubai, AE

---

## 🚀 You're All Set!

The app is ready to use. Just add your API key and start exploring weather worldwide! 🌍

---

**Version:** 1.0  
**Last Updated:** June 4, 2026  
**Status:** ✅ Production Ready
