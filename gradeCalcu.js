function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    let grade;
    if (score >= 80) grade = "A+";
    else if (score >= 70) grade = "A";
    else if (score >= 60) grade = "B";
    else if (score >= 50) grade = "C";
    else grade = "F";

    return `Your score is ${score}. Grade: ${grade}`;
}

console.log(calculateGrade(78));
