let grade = getGrade()
console.log("Grade:",grade )

function getGrade() {
    let marks = prompt("Enter the student marks (between 0 and 100)")
    marks = parseInt(marks)
  
    if (marks >= 80) {
      return "A"
    } else if (marks >= 60 && marks <= 79) {
      return "B"
    } else if (marks >= 50 && marks <= 59) {
      return "C"
    } else if (marks >= 40 && marks <= 49) {
      return "D"
    } else {
      return "E"
    }
  }

  
  
  