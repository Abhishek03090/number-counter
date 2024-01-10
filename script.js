var subPlans = {
    "basic": {
        "starter": {
            "monthly": 2.80,
            "yearly": 2.80 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        },
        "standard": {
            "monthly": 4.20,
            "yearly": 4.20 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        },
        "supreme": {
            "monthly": 7.00,
            "yearly": 7.00 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        }
    },
    "premium": {
        "starter": {
            "monthly": 5.60,
            "yearly": 5.60 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        },
        "standard": {
            "monthly": 8.40,
            "yearly": 8.40 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        },
        "supreme": {
            "monthly": 14.00,
            "yearly": 14.00 * 12 * 0.9,
            "features": [
                "✓ 2GB SSD",
                "✓ 10GB Bandwidth",
                "✓ 15 Email Accounts",
                "✓ Unlimited Database",
                "✓ 4 Subdomains",
                "✓ 1 Parked Domain",
                "✓ 2 Websites",
                "✓ Free SSL",
                "✓ Softaculous",
            ]
        }
    }
};

// Function to update the sub-plan cards
function updateSubPlans() {
    var billingCycle = document.querySelector(".billing-button.selected").id;
    var mainPlan = document.querySelector(".plan-button.selected").id;
    var subPlanDiv = document.getElementById("sub-plans");
    subPlanDiv.innerHTML = "";  // Clear the existing sub-plan cards
    for (var subPlan in subPlans[mainPlan]) {
        var price = subPlans[mainPlan][subPlan][billingCycle];
        var features = subPlans[mainPlan][subPlan]["features"];
        var card = document.createElement("div");
        card.classList.add("sub-plan"); // Add the sub-plan class for styling
        card.innerHTML = '<h2>' + subPlan.charAt(0).toUpperCase() + subPlan.slice(1) + '</h2><p class="price">$' + price.toFixed(2) + '</p><button class="choose-btn">Choose this Plan</button><ul class="features">' + features.map(feature => '<li><span class="checkmark">✓</span>' + feature.slice(2) + '</li>').join('') + '</ul>';
        subPlanDiv.appendChild(card);
    }
}

// Add event listeners to the billing cycle buttons
var billingButtons = document.querySelectorAll(".billing-button");
billingButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        billingButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
        updateSubPlans();
    });
});

// Add event listener to the toggle button
document.getElementById("toggle-button").addEventListener("click", function() {
    var monthlyButton = document.getElementById("monthly");
    var yearlyButton = document.getElementById("yearly");

    monthlyButton.classList.toggle("selected");
    yearlyButton.classList.toggle("selected");

    updateSubPlans();
});

// Add event listeners to the main plan buttons
var planButtons = document.querySelectorAll(".plan-button");
planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        planButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
        updateSubPlans();
    });
});

// Update the sub-plan cards initially
updateSubPlans();