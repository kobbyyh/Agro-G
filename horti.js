
const imageArray = [  "./images/farmer2.jpg","./images/farmer3.jpg","./images/farmer4.jpg"];

let currentIndex = 0;

function changePicture() {
    document.getElementById("profileImage").src = imageArray[currentIndex];
    currentIndex = (currentIndex + 1) % imageArray.length;
}

const intervalId = setInterval(changePicture, 2000);

// Optional: Stop the interval after a certain number of cycles (e.g., 10 cycles)
const totalCycles = 10;
let currentCycle = 0;

function stopInterval() {
    clearInterval(intervalId);
}

// Uncomment the line below to stop the interval after a certain number of cycles
// setTimeout(stopInterval, totalCycles * 2000);
