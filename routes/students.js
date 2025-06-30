const express = require('express');
const router = express.Router();
let students = require('../data/students');

// // GET all students
// router.get('/', (req, res) => {
//   let result = students;
//   const minGrade = parseInt(req.query.minGrade);
//   if (minGrade) {
//     result = result.filter(s => s.grade >= minGrade);
//   }
//   res.json(result);
// });

// GET all students (with optional filtering, sorting, and pagination)
router.get('/', (req, res) => {
  let result = [...students]; // create a copy of the data to avoid modifying the original array

  // FILTER: minGrade
  const minGrade = parseInt(req.query.minGrade);
  if (!isNaN(minGrade)) {
    result = result.filter(s => s.grade >= minGrade);
  }

  // SORTING: sort by 'name' or 'grade'
  const sort = req.query.sort;
  if (sort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'grade') {
    result.sort((a, b) => b.grade - a.grade);
  }

  // PAGINATION: page & limit
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || result.length;
  const startIndex = (page - 1) * limit;
  result = result.slice(startIndex, startIndex + limit);

  res.json(result);
});


// GET student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

// POST new student
router.post('/', (req, res) => {
  const { name, grade } = req.body;
  if (!name || grade == null) {
    return res.status(400).json({ message: 'Name and grade are required' });
  }
  const newStudent = {
    id: students.length + 1,
    name,
    grade
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });

  const { name, grade } = req.body;
  if (name) student.name = name;
  if (grade != null) student.grade = grade;

  res.json(student);
});

// DELETE student
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index === -1) return res.status(404).json({ message: 'Student not found' });

  students.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
