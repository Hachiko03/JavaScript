const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

students.pop();

const newStudent = { id: 3, name: "Francesco", surname: "Verdi", age: 41 };
students.push(newStudent); 

console.log(students);