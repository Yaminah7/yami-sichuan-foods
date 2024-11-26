// JavaScript for form submission
document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate email input
    const email = document.getElementById("email").value;
    if (email && validateEmail(email)) {
        alert("Thank you for subscribing!");
    } else {
        alert("Please enter a valid email address.");
    }
});

// Basic email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
