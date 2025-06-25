// Function to track cycle & show recommendations
function trackCycle() {
    let cycleDate = document.getElementById("cycle-date").value;
    if (cycleDate) {
        localStorage.setItem("lastCycle", cycleDate);
        getRecommendations();
        document.getElementById("cycle-message").innerText = 
            "Your cycle start date is saved: " + cycleDate;
    } else {
        alert("Please select a date.");
    }
}

// Function to get personalized wellness tips based on menstrual phase
function getRecommendations() {
    let cycleDate = localStorage.getItem("lastCycle");
    if (!cycleDate) {
        document.getElementById("recommendations").innerText = 
            "Track your cycle to get personalized recommendations!";
        return;
    }

    let cycleStart = new Date(cycleDate);
    let today = new Date();
    let dayDiff = Math.floor((today - cycleStart) / (1000 * 60 * 60 * 24));
    let phase = "";
    let advice = "";
    let exercises = "";
    let supplements = "";
    let emotions = "";

    if (dayDiff >= 0 && dayDiff <= 5) {
        phase = "Menstrual Phase";
        advice = "🌿 **Menstruation:** The uterus lining sheds, so focus on rest. \n" +
                 "🔹 **Iron-rich foods:** Spinach, dates, lentils. \n" +
                 "🔹 Stay **hydrated** & avoid caffeine.";
        exercises = "🧘 Gentle yoga, meditation, and light stretching.";
        supplements = "🌱 Take **iron & vitamin C** to replenish energy.";
        emotions = "💆 Mood swings may occur. Prioritize **self-care & relaxation**.";
    } 
    else if (dayDiff > 5 && dayDiff < 14) {
        phase = "Follicular Phase";
        advice = "🌱 **Follicular Phase:** Your body is preparing for ovulation. \n" +
                 "🔹 Eat **protein-rich foods** (eggs, nuts, lean meats). \n" +
                 "🔹 Energy levels are rising!";
        exercises = "🏃 High-intensity workouts like cardio & strength training.";
        supplements = "💊 **Omega-3 & vitamin D** for hormone balance.";
        emotions = "😃 You may feel more **motivated & energized**.";
    } 
    else if (dayDiff > 14 && dayDiff <= 21) {
        phase = "Ovulation Phase";
        advice = "🍎 **Ovulation:** The egg is released, fertility is highest. \n" +
                 "🔹 Eat **antioxidant-rich foods** (berries, avocado, dark chocolate). \n" +
                 "🔹 Keep stress low.";
        exercises = "🏋️ Moderate-intensity workouts like pilates or cycling.";
        supplements = "🌿 **Zinc & magnesium** for hormone support.";
        emotions = "💞 Confidence & libido may be at their peak!";
    } 
    else if (dayDiff > 21 && dayDiff <= 28) {
        phase = "Luteal Phase";
        advice = "🌿 **Luteal Phase:** PMS symptoms may appear. \n" +
                 "🔹 Eat **magnesium-rich foods** (dark chocolate, bananas). \n" +
                 "🔹 Avoid processed sugar & caffeine.";
        exercises = "🧘 Light yoga, walking, or swimming.";
        supplements = "🌸 Take **evening primrose oil** to ease cramps.";
        emotions = "😔 You may feel **irritable or fatigued**—practice self-care.";
    } 
    else {
        phase = "Irregular Cycle Detected";
        advice = "❗ Your cycle length has exceeded **30 days**, which may indicate irregular periods. \n" +
                 "🔹 Possible Causes: Stress, hormonal imbalance, weight fluctuations, PCOD. \n" +
                 "🔹 **Natural Remedies:**\n" +
                 "   - Drink **ginger & turmeric tea** to regulate hormones. \n" +
                 "   - Manage stress with **yoga & meditation**. \n" +
                 "   - Eat **balanced, whole foods** for cycle regulation.";
        exercises = "🚶 Focus on **light movement** & stress reduction techniques.";
        supplements = "🌱 Consider **adaptogenic herbs** like ashwagandha.";
        emotions = "😞 Monitor mood changes & seek support if needed.";
    }

    document.getElementById("recommendations").innerHTML = 
        `<strong>Current Phase:</strong> ${phase}<br><br>
        <strong>Tips:</strong><br>${advice.replace(/\n/g, "<br>")}<br><br>
        <strong>Exercise:</strong><br>${exercises}<br><br>
        <strong>Recommended Supplements:</strong><br>${supplements}<br><br>
        <strong>Mood & Emotional Well-being:</strong><br>${emotions}`;
}

// Load recommendations on page load
window.onload = function() {
    getRecommendations();
};
