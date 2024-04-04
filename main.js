// Set the date we're counting down to
const countdownDate = new Date("April 20, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Hacer visible el contador cuando se cargue completamente
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});