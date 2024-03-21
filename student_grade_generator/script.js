let studentsData = []; // Array to store student data

function addStudent() {
    const nameInput = document.getElementById('name');
    const marksInput = document.getElementById('marks');

    const name = nameInput.value.trim();
    const marks = parseInt(marksInput.value);

    if (name === '' || isNaN(marks) || marks < 0 || marks > 100) {
        alert('Please enter valid student name and marks (between 0 and 100).');
        return;
    }

    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    studentsData.push({ name, marks, grade }); // Add student data with grade to the array

    // Clear input fields
    nameInput.value = '';
    marksInput.value = '';

    displayStudents(); // Display updated student list
    updateAverageGrade(); // Update average grade immediately
}

function displayStudents() {
    const tableBody = document.querySelector('#students tbody');
    tableBody.innerHTML = ''; // Clear previous content

    studentsData.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = student.name;
        row.insertCell().textContent = student.marks;
        row.insertCell().textContent = student.grade; // Display grade in the table
    });
}

function updateAverageGrade() {
    const totalMarks = studentsData.reduce((acc, student) => acc + student.marks, 0);
    const averageMarks = totalMarks / studentsData.length;

    let averageGrade;
    if (averageMarks > 79) {
        averageGrade = "A";
    } else if (averageMarks >= 60 && averageMarks <= 79) {
        averageGrade = "B";
    } else if (averageMarks >= 50 && averageMarks <= 59) {
        averageGrade = "C";
    } else if (averageMarks >= 40 && averageMarks <= 49) {
        averageGrade = "D";
    } else {
        averageGrade = "E";
    }

    document.getElementById('averageGrade').textContent = `Average Grade: ${averageGrade}`;
}

// Event listener for form submission
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    addStudent();
});

// Event listener for "Calculate Grades" button
document.getElementById('calculator').addEventListener('click', updateAverageGrade);
