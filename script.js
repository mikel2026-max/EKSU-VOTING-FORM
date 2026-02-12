document.getElementById("submitBtn").addEventListener("click", function () {

    const categories = ["male", "female", "dressed", "entrepreneur", "influencer"];
    let results = {};
    let allAnswered = true;

    categories.forEach(category => {
        const selected = document.querySelector(`input[name="${category}"]:checked`);
        if (selected) {
            results[category] = selected.value;
        } else {
            allAnswered = false;
        }
    });

    const message = document.getElementById("message");

    if (!allAnswered) {
        message.style.color = "#ff4d4d";
        message.innerHTML = "⚠️ Please vote in all categories before submitting.";
        return;
    }

    message.style.color = "#00ffcc";
    message.innerHTML = "✅ Vote submitted successfully. Thank you!";

    console.log("Voting Results:", results);
});
