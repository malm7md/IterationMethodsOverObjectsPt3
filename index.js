const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

function getStudentName(student) {
  return student.name;
}

console.log(getStudentName(students[0]));

function getCourse(student, courseIndex) {
  return student.courses[courseIndex];
}

console.log(getCourse(students[4], 2));

function addCourseToStudent(student, course) {
  student.courses.push(course);
  return student;
}

console.log(addCourseToStudent(students[7], "Physics"));

function countCourses(student) {
  return student.courses.length;
}

console.log(countCourses(students[1]));

//5

function listAllCourses(students) {}

console.log(listAllCourses(students));

function removeCourseFromStudent(student, course) {
  let index = student.courses.indexOf(course);
  student.courses.splice(index, 1);
  return student;
}

//{ id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
/**********/

console.log(removeCourseFromStudent(students[6], "Science"));

/**********
  Question 7:
  findStudentById(studentId, students):
  - recieves a student id (number)
  - recieves an array of student objects
  - returns the student object with the matching id
  ===
  ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
  **********/

// [aya, ali, dawood, aziz, nouf,abdullah] -> filter -> return an array -> [aziz]

function findStudentById(studentId, students) {
  let result = students.filter((student) => {
    if (studentId === student.id) {
      return student;
    }
  });

  return result[0];
}

console.log(findStudentById(10, students));
