# 🎓 Student Management API

This is a simple RESTful API built with **Express.js** for managing student data.  
It supports full CRUD operations, filtering, sorting, and pagination.

---

## 🚀 Features

- View all students
- View student by ID
- Add new student
- Update student info
- Delete student
- Filter by minimum grade
- Sort by name or grade
- Pagination support

---

## 📁 Project Structure
student-api/
├── app.js
├── bin/
│ └── www
├── data/
│ └── students.js
├── middleware/
│ └── logger.js (optional, if not using morgan)
├── routes/
│ └── students.js
└── package.json

---

## 📦 Installation

1. Clone this repository or download the source code
2. Install dependencies:

```bash
npm install

3. Start the server:
npm start
This API will run at: http://localhost:3000

Endpoints
*Get all students
GET /students

*Optional Query Parameters:
minGrade: Minimum grade filter (e.g., ?minGrade=80)
sort: Sort by name or grade (e.g., ?sort=grade)
page: Page number for pagination
limit: Number of results per page

Example:
/students?minGrade=85&sort=name&page=1&limit=2

*Get student by ID
GET /students/:id

*Add new student
POST /students

Body (JSON):
{
  "name": "Alice",
  "grade": 90
}

*Update student
PUT /students/:id

Body (JSON):
{
  "name": "Alicia",
  "grade": 95
}

*Delete student
DELETE /students/:id

*Testing : You can test the API using Postman or curl. Make sure the server is running using npm start.

*Bonus Features
# Sorting by name or grade: ?sort=name or ?sort=grade
# Pagination using ?page=1&limit=2
# Filtering by minimum grade: ?minGrade=85
# Custom logger middleware or morgan package

*Author
# Created by [Vania Dea Wibowo]

