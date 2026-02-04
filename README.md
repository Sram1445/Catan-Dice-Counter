# 🎲 Catan Dice Counter

A simple, interactive web app for tracking and visualizing dice rolls in the board game **Catan**. Keep track of which numbers are rolled most frequently during your games and watch the statistics unfold in real-time with a dynamic bar chart.

**Live Demo:** [https://catan-dice-counter.netlify.app](https://catan-dice-counter.netlify.app)

## Features

✨ **Interactive Dice Buttons** - Click buttons 2–12 to record each die roll  
📊 **Real-Time Chart** - Visualize roll frequency with an interactive bar chart  
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
⚡ **Lightweight** - No backend required, everything runs in your browser  
🎨 **Clean UI** - Simple and intuitive interface designed for gameplay  

## How to Use

1. **Open the app** - Visit the [live demo](https://catanddicecounter.netlify.app) or run locally
2. **Click dice numbers** - For each roll of the two dice in Catan, click the corresponding number (2–12)
3. **Track statistics** - Watch the bar chart update in real-time to show roll frequency
4. **Analyze patterns** - Use the data to understand probability trends during gameplay

## Installation (Local Development)

If you want to run this locally:

```bash
# Clone or download the repository
git clone <repo-url>
cd "Catan Dice Counter"

# Open in your browser
open index.html
# or simply double-click index.html
```

No dependencies or build process needed—just open `index.html` in your browser!

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript** - Event handling and chart updates
- **Chart.js** - Beautiful, interactive bar chart visualization

## Project Structure

```
├── index.html       # Main HTML file with dice buttons
├── script.js        # JavaScript logic for tracking and chart updates
├── style.css        # Styling and layout
└── README.md        # This file
```

## Features in Action

- **Dice Grid**: 11 buttons arranged in a 6-column grid for numbers 2–12
- **Live Updates**: Each click increments the roll count and updates the chart instantly
- **Visual Feedback**: Hover and active states for better interactivity

## Why Catan?

In Catan, the combination of two six-sided dice determines which resources are produced. The possible sums range from 2 to 12, with a probability distribution favoring middle numbers (7 being most common). This tool helps players:
- Track which numbers are rolled most frequently
- Identify patterns over multiple games
- Have fun with game statistics!

## Deployment

This project is hosted on **Netlify** for easy, free hosting with automatic deployments from Git.

## Future Enhancements

Potential ideas for expanding this project:
- 📥 **Export Data** - Download roll statistics as CSV
- 🔄 **Reset Button** - Clear all counts and start fresh
- 💾 **Local Storage** - Persist data across sessions
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📊 **Statistical Analysis** - Show mean, median, and probability comparisons

## License

This project is open source and free to use!

## Contributing

Found a bug or have an idea? Feel free to open an issue or submit a pull request.

---

**Happy gaming!** 🎲🎮
