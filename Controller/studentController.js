const Student = require('../Model/studentModel');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    
    console.log('Fetched students:', students);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    console.log('Fetched students:', student);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log('Fetched students:', student);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
