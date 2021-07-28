function calculateAverageByAssignment(mockGrades) {
  let assignmentAverages = {}
  let newArray = []

  mockGrades.forEach(mockGrade => {
    if (assignmentAverages[mockGrade.assignment]) {
      assignmentAverages[mockGrade.assignment].push(mockGrade.score)
    } else {
      assignmentAverages[mockGrade.assignment] = [mockGrade.score]
    }
  })

  for (const [assignment, score] of Object.entries(assignmentAverages)) {
    let ave = average(score)

    newArray.push({
      name: assignment, average: ave
    })
  }

  return newArray
}

const average = (array) => array.reduce((a, b) => a + b) / array.length

module.exports = calculateAverageByAssignment
