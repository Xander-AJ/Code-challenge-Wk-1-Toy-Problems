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

// Function to calculate payee (tax) based on basic salary
function calculatePayee(basicSalary) {
    if (basicSalary <= 24000) {
        return 0;
    } else if (basicSalary <= 32333) {
        return (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 41905) {
        return (basicSalary - 32333) * 0.15 + 832;
    } else if (basicSalary <= 53208) {
        return (basicSalary - 41905) * 0.2 + 2662;
    } else {
        return (basicSalary - 53208) * 0.25 + 5282;
    }
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    if (basicSalary <= 5999) {
        return 150;
    } else if (basicSalary <= 7999) {
        return 300;
    } else if (basicSalary <= 11999) {
        return 400;
    } else if (basicSalary <= 14999) {
        return 500;
    } else if (basicSalary <= 19999) {
        return 600;
    } else if (basicSalary <= 24999) {
        return 750;
    } else if (basicSalary <= 29999) {
        return 850;
    } else if (basicSalary <= 34999) {
        return 900;
    } else if (basicSalary <= 39999) {
        return 950;
    } else if (basicSalary <= 44999) {
        return 1000;
    } else if (basicSalary <= 49999) {
        return 1100;
    } else if (basicSalary <= 59999) {
        return 1200;
    } else if (basicSalary <= 69999) {
        return 1300;
    } else if (basicSalary <= 79999) {
        return 1400;
    } else if (basicSalary <= 89999) {
        return 1500;
    } else if (basicSalary <= 99999) {
        return 1600;
    } else if (basicSalary <= 109999) {
        return 1700;
    } else if (basicSalary <= 119999) {
        return 1800;
    } else if (basicSalary <= 129999) {
        return 1900;
    } else if (basicSalary <= 139999) {
        return 2000;
    } else {
        return 2100;
    }
}

// Function to calculate NSSF deductions based on basic salary
function calculateNSSF(basicSalary) {
    return basicSalary * 0.06;
}
