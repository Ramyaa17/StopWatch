let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let display = document.getElementById('display');

let startTime, timer, isRunning = false;

startBtn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = 'Start';
    } else {
        startTime = new Date();
        timer = setInterval(updateTime, 1000);
        startBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer);
    display.textContent = '00:00:00';
    startBtn.textContent = 'Start';
    isRunning = false;
});

function updateTime() {
    let elapsed = new Date(new Date() - startTime);
    display.textContent = elapsed.toISOString().substr(11, 8);
}
