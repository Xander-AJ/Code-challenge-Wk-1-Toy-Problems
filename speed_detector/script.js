document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const speedInput = document.getElementById('speedInput').value;
    const speed = parseInt(speedInput);

    if (speed < 70) {
        document.getElementById('result').textContent = 'Ok';
        return; // Exit the function early if speed is below 70
    }

    let points = Math.floor((speed - 70) / 5);
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
const numbersContainer = document.createElement('div');
numbersContainer.classList.add('number-container');
document.getElementById('speedometer').appendChild(numbersContainer);

for (let i = 0; i <= 140; i += 10) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = i;
    number.style.transform = `rotate(${i + 135}deg)`;
    numbersContainer.appendChild(number);
}
