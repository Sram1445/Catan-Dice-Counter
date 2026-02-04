// Initial dice counts
const diceCounts = {
    2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
    7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0
};

// Chart setup
const ctx = document.getElementById("diceChart").getContext("2d");

const diceChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: Object.keys(diceCounts),
        datasets: [{
            label: "Roll Count",
            data: Object.values(diceCounts),
            backgroundColor: "#4CAF50"
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0
                }
            }
        }
    }
});

// Handle button clicks
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const number = button.dataset.number;
        diceCounts[number]++;

        // Update chart
        diceChart.data.datasets[0].data = Object.values(diceCounts);
        diceChart.update();
    });
});
