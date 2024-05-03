// Q15-Write a JavaScript program to create a clock.

function displayClock() {
    const now = new Date(); // current time
   
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // HH:MM:SS format
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);
