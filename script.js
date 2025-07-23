document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("modeToggle");
    const body = document.body;

    // Load theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggle.checked = true;
    }

    // Toggle handler
    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });

    // GPA calculation
    document.getElementById("gpaForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let grade1 = parseFloat(document.getElementById("grade1").value);
        let grade2 = parseFloat(document.getElementById("grade2").value);
        let grade3 = parseFloat(document.getElementById("grade3").value);
        let grade4 = parseFloat(document.getElementById("grade4").value);
        let grade5 = parseFloat(document.getElementById("grade5").value);
        let grade6 = parseFloat(document.getElementById("grade6").value);
        let grade7 = parseFloat(document.getElementById("grade7").value);
        let grade8 = parseFloat(document.getElementById("grade8").value);
        let grade9 = parseFloat(document.getElementById("grade9").value);

        const grades = [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8, grade9];
        const weights = [13, 3, 3, 3, 3, 3, 3, 3, 3];

        let total = 0;
        let weight = 0;

        for (let i = 0; i < grades.length; i++) {
            if (!isNaN(grades[i])) {
                total += grades[i] * weights[i];
                weight += weights[i];
            }
        }

        const result = document.getElementById("result");
        if (weight === 0) {
            result.textContent = "Please enter at least one grade.";
        } else {
            const CGPA = total / weight;
            result.textContent = "Your cGPA is: " + CGPA.toFixed(2);
        }
    });
});
