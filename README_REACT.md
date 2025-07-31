# SDSU Nutritional Health Assessment - React App

A professional React application for SDSU staff to assess student nutritional health patterns as part of attrition risk analysis.

## 🚀 Features

- **Professional Interface**: Clean, SDSU-branded design with #D41736 color scheme
- **Nutritional Health Inputs**:
  - Eat at an on-campus eatery (Food trucks, restaurants, food court)
  - Eat with friends
  - Eat alone
  - Prepared a meal on my own
- **Real-time Analysis**: Calculates Social Dining Score, Independence Index, Campus Engagement, and Weekly Meals Total

## 📁 Project Structure

```
/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # All styling
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
└── README_REACT.md        # This file
```

## 🛠️ Setup & Installation

1. **Install Node.js and npm** (if not already installed):
   ```bash
   # On Amazon Linux/CentOS
   sudo yum install nodejs npm
   
   # Or download from https://nodejs.org/
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Usage

1. Open the application in your browser (usually http://localhost:3000)
2. Enter the weekly frequency for each dining behavior
3. Click "Analyze Nutritional Patterns"
4. View the calculated metrics in the results section

## 🔧 Development

The app uses React hooks for state management:
- `useState` for form data and results
- Event handlers for form submission and input changes
- Professional loading states and animations

## 📊 Ready for Backend Integration

This frontend is ready to connect to your lambda function and StarRez data pipeline for the actual attrition risk prediction model.