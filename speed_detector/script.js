document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const speedInput = document.getElementById('speedInput').value;
    const speed = parseInt(speedInput);

    let points = 0;
    if (speed > 70) {
        points = Math.floor((speed - 70) / 5);
    }

    const resultDiv = document.getElementById('result');
    if (points > 12) {
        resultDiv.textContent = `Points: ${points}, License suspended`;
    } else {
        resultDiv.textContent = `Points: ${points}`;
    }

    // Update speedometer needle
    const needle = document.getElementById('needle');
    const angle = Math.min(180, (speed - 70) * 3);
    needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});

// Add numbers to the speedometer
const numbersContainer = document.getElementById('numbers');
for (let i = 0; i <= 140; i += 10) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.style.transform = `rotate(${i}deg)`;
    number.textContent = i;
    numbersContainer.appendChild(number);
}
