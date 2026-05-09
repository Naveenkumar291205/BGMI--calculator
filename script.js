let isMetric = true;
let calculationHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];

const healthTips = {
  underweight: {
    tip: "💭 You are underweight. Focus on nutritious, calorie-dense foods and strength training.",
    recommendations: [
      "🥜 Eat more nutrient-rich foods (nuts, avocado, whole grains)",
      "💪 Include protein-rich foods in every meal",
      "🏋️ Start a regular exercise routine with strength training",
      "👨‍⚕️ Consult a healthcare provider for personalized guidance",
    ],
  },
  normal: {
    tip: "🎉 Great! Your BMI is in the normal range. Keep up your healthy lifestyle!",
    recommendations: [
      "🏃 Maintain regular physical activity (150 min/week)",
      "🥗 Continue a balanced diet rich in fruits and vegetables",
      "💧 Stay hydrated with plenty of water",
      "😴 Get 7-9 hours of quality sleep",
    ],
  },
  overweight: {
    tip: "⚠️ You are overweight. Consider making lifestyle changes to reach a healthy weight.",
    recommendations: [
      "🚶 Increase daily physical activity gradually",
      "🥗 Reduce calorie intake with whole foods",
      "🚫 Limit sugary drinks and processed foods",
      "👨‍⚕️ Consider consulting a nutritionist or doctor",
    ],
  },
  obese: {
    tip: "🚨 Your BMI indicates obesity. Take action for your health and well-being.",
    recommendations: [
      "👨‍⚕️ Consult with a healthcare professional",
      "🏃 Start with light exercises and gradually increase intensity",
      "🥗 Focus on whole foods and portion control",
      "📊 Track your progress regularly and celebrate small wins",
    ],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmi-form");
  const resultDiv = document.getElementById("result");
  const bmiValueSpan = document.getElementById("bmi-value");
  const bmiCategoryP = document.getElementById("bmi-category");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const heightUnit = document.getElementById("height-unit");
  const weightUnit = document.getElementById("weight-unit");
  const metricBtn = document.getElementById("metric-btn");
  const imperialBtn = document.getElementById("imperial-btn");
  const historyDiv = document.getElementById("history");
  const clearHistoryBtn = document.getElementById("clear-history");
  const healthTipP = document.getElementById("health-tip");
  const recommendationsDiv = document.getElementById("recommendations");
  const gaugeFill = document.getElementById("gauge-fill");

  // Unit toggle functionality
  metricBtn.addEventListener("click", () => toggleUnit(true));
  imperialBtn.addEventListener("click", () => toggleUnit(false));

  function toggleUnit(metric) {
    isMetric = metric;
    if (metric) {
      heightUnit.textContent = "(cm)";
      weightUnit.textContent = "(kg)";
      heightInput.placeholder = "e.g., 170";
      weightInput.placeholder = "e.g., 70";
      metricBtn.classList.add("active");
      imperialBtn.classList.remove("active");
    } else {
      heightUnit.textContent = "(in)";
      weightUnit.textContent = "(lb)";
      heightInput.placeholder = "e.g., 67";
      weightInput.placeholder = "e.g., 154";
      metricBtn.classList.remove("active");
      imperialBtn.classList.add("active");
    }
    heightInput.value = "";
    weightInput.value = "";
    resultDiv.classList.add("hidden");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // Validation
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values.");
      return;
    }

    // Convert to metric if imperial
    if (!isMetric) {
      height = height * 2.54; // inches to cm
      weight = weight * 0.453592; // pounds to kg
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    // Determine category
    let category = "";
    let categoryClass = "";
    let categoryKey = "";

    if (bmi < 18.5) {
      category = "Underweight";
      categoryClass = "underweight";
      categoryKey = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      categoryClass = "normal";
      categoryKey = "normal";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      categoryClass = "overweight";
      categoryKey = "overweight";
    } else {
      category = "Obese";
      categoryClass = "obese";
      categoryKey = "obese";
    }

    // Display result
    bmiValueSpan.textContent = bmi.toFixed(2);
    bmiCategoryP.textContent = category;
    resultDiv.className = `result ${categoryClass}`;
    resultDiv.classList.remove("hidden");

    // Update gauge position
    let gaugePosition = 0;
    if (bmi < 18.5) gaugePosition = (bmi / 18.5) * 25;
    else if (bmi < 25) gaugePosition = 25 + ((bmi - 18.5) / 6.5) * 25;
    else if (bmi < 30) gaugePosition = 50 + ((bmi - 25) / 5) * 25;
    else gaugePosition = 75 + Math.min((bmi - 30) / 10, 1) * 25;

    gaugeFill.style.width = gaugePosition + "%";

    // Display health tips
    const tips = healthTips[categoryKey];
    healthTipP.textContent = tips.tip;
    recommendationsDiv.innerHTML = tips.recommendations
      .map((rec) => `<div class="recommendation-item">${rec}</div>`)
      .join("");

    // Add to history
    addToHistory(bmi, category, height, weight);
  });

  function addToHistory(bmi, category, height, weight) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateStr = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const entry = {
      bmi: bmi.toFixed(2),
      category: category,
      height: height.toFixed(1),
      weight: weight.toFixed(1),
      timestamp: `${dateStr} ${timeStr}`,
    };

    calculationHistory.unshift(entry);
    if (calculationHistory.length > 10) calculationHistory.pop();
    localStorage.setItem("bmiHistory", JSON.stringify(calculationHistory));

    displayHistory();
  }

  function displayHistory() {
    if (calculationHistory.length === 0) {
      historyDiv.innerHTML =
        '<p style="color: #999; font-size: 14px;">No calculations yet</p>';
      return;
    }

    historyDiv.innerHTML = calculationHistory
      .map(
        (entry) => `
                <div class="history-item">
                    <div>
                        <strong>${entry.bmi}</strong> - ${entry.category}
                        <div class="date">${entry.timestamp}</div>
                    </div>
                </div>
            `
      )
      .join("");
  }

  clearHistoryBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all calculation history?")) {
      calculationHistory = [];
      localStorage.removeItem("bmiHistory");
      displayHistory();
    }
  });

  // Initialize history display
  displayHistory();
});
