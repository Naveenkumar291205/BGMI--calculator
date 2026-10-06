# 💪 BMI Health Tracker

> A modern browser-based BMI calculator with metric/imperial support, health insights, visual BMI gauge, and local calculation history.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 📌 Overview

**BMI Health Tracker** is a lightweight frontend web application for calculating Body Mass Index (BMI) based on height and weight.

The application supports both **Metric** and **Imperial** units, classifies the calculated BMI into standard categories, displays health-oriented recommendations, and stores up to the latest **10 calculations** in the browser using `localStorage`.

Everything runs directly in the browser without a backend or database.

---

## ✨ Features

### 📏 Metric & Imperial Units

Users can switch between:

**Metric**

```text
Height → cm
Weight → kg
```

**Imperial**

```text
Height → in
Weight → lb
```

The application automatically converts imperial values into metric units before calculating BMI.

---

### 🧮 BMI Calculation

The application calculates BMI using:

```text
BMI = Weight (kg) / Height² (m)
```

For metric input:

```text
Height(m) = Height(cm) / 100
```

For imperial input, the application converts:

```text
1 inch = 2.54 cm
1 pound = 0.453592 kg
```

---

## 📊 BMI Categories

The application classifies BMI into four categories:

| BMI Range | Category |
|---:|---|
| `< 18.5` | Underweight |
| `18.5 – 24.99` | Normal Weight |
| `25 – 29.99` | Overweight |
| `≥ 30` | Obese |

Each category receives a different visual theme and set of health recommendations.

---

## 📈 Visual BMI Gauge

After calculation, the application displays a horizontal BMI gauge representing:

```text
Underweight → Normal → Overweight → Obese
```

The gauge position changes according to the calculated BMI value.

This gives the user an immediate visual representation of their result.

---

## 💡 Health Insights

The application provides category-specific health information.

Examples include recommendations related to:

- Nutrition
- Physical activity
- Strength training
- Hydration
- Sleep
- Portion control
- Professional medical guidance

The recommendations change automatically according to the BMI category.

> The displayed health content is general informational guidance and is not a substitute for professional medical advice.

---

## 🕒 Calculation History

The application stores previous BMI calculations using browser `localStorage`.

Each history entry includes:

```text
BMI
Category
Date
Time
```

The application keeps a maximum of **10 recent calculations**.

Example:

```text
23.45 - Normal Weight
Oct 6, 10:30 AM
```

---

## 🗑️ Clear History

Users can remove all saved calculation history through the:

```text
Clear History
```

button.

A confirmation dialog is displayed before the stored records are deleted.

---

## ✅ Input Validation

The application validates:

- Empty values
- Non-numeric values
- Zero values
- Negative values

Invalid inputs display an alert asking the user to enter valid height and weight values.

---

## 🎨 UI & Design

The interface uses a modern health-dashboard style with:

- Purple gradient background
- Animated background movement
- White rounded container
- Soft shadows
- Gradient buttons
- Category-specific result colors
- Animated result appearance
- Scrollable history section
- Responsive viewport configuration

The main application is centered inside a card-style interface.

---

## 🧠 Application Flow

```text
Open Application
       │
       ▼
Select Unit
Metric / Imperial
       │
       ▼
Enter Height & Weight
       │
       ▼
Validate Inputs
       │
       ▼
Convert Units if Required
       │
       ▼
Calculate BMI
       │
       ▼
Determine BMI Category
       │
       ▼
Display BMI Result
       │
       ├── BMI Category
       ├── Visual Gauge
       ├── Health Insight
       └── Recommendations
       │
       ▼
Save Calculation
       │
       ▼
Display History
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | Styling, layout, animation |
| **JavaScript** | BMI logic and interactions |
| **localStorage** | Browser-based history persistence |

No external backend is required.

---

## 📂 Project Structure

```text
BGMI--calculator/
│
├── index.html
├── style.css
├── script.js
└── TODO.md
```

---

## 📄 File Description

### `index.html`

Defines the application interface including:

- Application header
- Unit selector
- Height input
- Weight input
- Calculate button
- BMI result
- BMI gauge
- Health insights
- Recommendations
- Calculation history
- Clear history button

### `style.css`

Controls:

- Page layout
- Gradient background
- Animations
- Form styling
- Buttons
- BMI result themes
- Gauge
- Health insight cards
- History list

### `script.js`

Contains the application logic for:

- Unit switching
- Input validation
- Unit conversion
- BMI calculation
- BMI classification
- Gauge positioning
- Health recommendations
- History management
- `localStorage`
- History clearing

### `TODO.md`

Contains the project creation checklist and records that the initial HTML, CSS, JavaScript, and browser testing tasks were completed.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Naveenkumar291205/BGMI--calculator.git
```

### 2. Enter the Project

```bash
cd BGMI--calculator
```

### 3. Open the Application

Open:

```text
index.html
```

directly in a modern browser.

You can also use VS Code with the **Live Server** extension.

---

## 💻 Run With VS Code

1. Open the project in VS Code.
2. Install **Live Server**.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.

The BMI Health Tracker will open in your browser.

---

## 🧪 Example Calculation

For:

```text
Height = 170 cm
Weight = 70 kg
```

The application calculates approximately:

```text
BMI = 24.22
```

and places the user in the:

```text
Normal Weight
```

category.

---

## 💾 Local Storage

Calculation history is stored using the browser's:

```javascript
localStorage
```

Storage key:

```text
bmiHistory
```

The application serializes calculation records as JSON and restores them when the page is loaded again.

This means the history remains available in the same browser/device until it is cleared.

---

## 🔒 Privacy

The application does not require an account, backend server, or external database.

Calculation history is stored locally in the user's browser.

The current implementation does not send BMI calculations to a remote server.

---

## 📱 Responsive Considerations

The HTML includes the standard viewport configuration:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

The application is designed around a constrained central card and flexible width.

For further mobile optimization, the UI can be expanded with additional responsive breakpoints.

---

## 📊 Project Status

| Component | Status |
|---|---|
| BMI Calculator | ✅ Complete |
| Metric Units | ✅ Complete |
| Imperial Units | ✅ Complete |
| Unit Conversion | ✅ Complete |
| BMI Classification | ✅ Complete |
| Visual BMI Gauge | ✅ Complete |
| Health Insights | ✅ Complete |
| Recommendations | ✅ Complete |
| Calculation History | ✅ Complete |
| LocalStorage | ✅ Complete |
| Clear History | ✅ Complete |
| Backend | ❌ Not Required |
| Database | ❌ Not Required |
| Authentication | ❌ Not Required |

---

## 📈 Future Improvements

Possible next-generation features include:

- BMI trend charts
- Weight tracking
- Height/profile persistence
- Age and gender-aware health context
- Goal tracking
- Weight-category progress
- Export history as CSV/PDF
- Dark/light theme switch
- Progressive Web App support
- Accessibility improvements
- Better medical-context disclaimers
- Automated tests
- Deployment with a live demo

---

## 🎓 Learning Outcomes

This project demonstrates practical knowledge of:

- DOM manipulation
- JavaScript event handling
- Form validation
- Mathematical calculations
- Conditional logic
- Unit conversion
- Dynamic HTML rendering
- CSS animations
- CSS gradients
- Browser `localStorage`
- Client-side state management

---

## 🧩 Key JavaScript Concepts

The project uses several useful JavaScript patterns.

### Event Handling

```javascript
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
```

### Unit Conversion

```javascript
height = height * 2.54;
weight = weight * 0.453592;
```

### BMI Calculation

```javascript
const heightM = height / 100;
const bmi = weight / (heightM * heightM);
```

### Persistent Browser Storage

```javascript
localStorage.setItem(
    "bmiHistory",
    JSON.stringify(calculationHistory)
);
```

### Dynamic Recommendations

Recommendations are selected using the calculated BMI category and rendered dynamically into the page.

---

## 🎯 Project Goal

The goal of this project is to provide a simple and visually engaging BMI calculator while demonstrating core frontend development skills such as **JavaScript logic, DOM manipulation, data persistence, and responsive UI design**.

---

## 👨‍💻 Author

**Naveen Kumar M**

GitHub:  
https://github.com/Naveenkumar291205

---

## 🔗 Repository

https://github.com/Naveenkumar291205/BGMI--calculator

---

## 📄 License

No explicit license file is currently included in the repository.
