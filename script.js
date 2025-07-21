document.getElementById("gpaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //get input
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let grade4 = parseFloat(document.getElementById("grade4").value);
    let grade5 = parseFloat(document.getElementById("grade5").value);
    let grade6 = parseFloat(document.getElementById("grade6").value);
    let grade7 = parseFloat(document.getElementById("grade7").value);
    let grade8 = parseFloat(document.getElementById("grade8").value);
    let grade9 = parseFloat(document.getElementById("grade9").value);
    
    //display gpa
    let CGPA = ((grade1*13) + (grade2*3) + (grade3*3) + (grade4*3) + (grade5*3) + (grade6*3) + (grade7*3) + (grade8*3) + (grade9*3))/37;
    document.getElementById("result").textContent = "Your cGPA is: " + CGPA.toFixed(2);
});
