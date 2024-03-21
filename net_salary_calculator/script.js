document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const basicSalaryInput = document.getElementById('basicSalary').value;
    const benefitsInput = document.getElementById('benefits').value;

    // Validate input values
    if (isNaN(parseFloat(basicSalaryInput)) || isNaN(parseFloat(benefitsInput))) {
        alert('Please enter valid numeric values for Basic Salary and Benefits.');
        return;
    }

    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(basicSalary);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    document.getElementById('result').textContent = `Net Salary: KES ${netSalary.toFixed(2)}`;
});

// Functions for calculating payee, NHIF, and NSSF as per your previous code
function calculatePayee(basicSalary) {
    // Implementation of calculatePayee function
}

function calculateNHIF(basicSalary) {
    // Implementation of calculateNHIF function
}

function calculateNSSF(basicSalary) {
    // Implementation of calculateNSSF function
}
