def calculate_gpa(grades):
    grade_points = {'A+': 12.0, 'A': 11.0, 'A-': 10.0, 'B+': 9.0, 'B': 8.0, 'B-': 7.0, 'C+': 6.0, 'C': 5.0, 'C-': 4.0, 'D+': 3.0, 'D': 2.0, 'D-': 1.0, 'F': 0.0}
    
    total_points = 0
    for grade in grades:
        total_points += grade_points.get(grade.strip().upper(), 0)
        
    cgpa = total_points / len(grades)
    return cgpa



grades = ['A+', 'A-', "B+"]
print("Your cumulative GPA for the year so far is: ", calculate_gpa(grades))
