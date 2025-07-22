document.getElementById("gpaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get inputs
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
    const allBlank = grades.every(g => isNaN(g));

    if (allBlank) {
        document.getElementById("result").textContent = "Please enter at least one grade.";
        return;
    }

    let total = 0;
    let weight = 0;

    if (!isNaN(grade1)) { total += grade1 * 13; weight += 13; }
    if (!isNaN(grade2)) { total += grade2 * 3; weight += 3; }
    if (!isNaN(grade3)) { total += grade3 * 3; weight += 3; }
    if (!isNaN(grade4)) { total += grade4 * 3; weight += 3; }
    if (!isNaN(grade5)) { total += grade5 * 3; weight += 3; }
    if (!isNaN(grade6)) { total += grade6 * 3; weight += 3; }
    if (!isNaN(grade7)) { total += grade7 * 3; weight += 3; }
    if (!isNaN(grade8)) { total += grade8 * 3; weight += 3; }
    if (!isNaN(grade9)) { total += grade9 * 3; weight += 3; }

    let CGPA = total / weight;
    document.getElementById("result").textContent = "Your cGPA is: " + CGPA.toFixed(2);
});
