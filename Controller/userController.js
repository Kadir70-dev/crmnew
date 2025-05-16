const User = require('../Model/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(`Registering user with emails: ${email}`);
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Creating new user');
    const user = await User.create({ name, email, password, role });
    console.log(`User created: ${user._id}`);
    console.log(`Database Name: ${user.db.databaseName}`);
    console.log(`Collection Name: ${user.collection.collectionName}`);
    
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(`Logging in user with email: ${email}`);
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      console.log(`Login successful for user: ${user._id}`);
      console.log(`Database Name: ${user.db.databaseName}`);
      console.log(`Collection Name: ${user.collection.collectionName}`);
      
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      console.log('Invalid email or password');
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get User Profile
exports.getUserProfile = async (req, res) => {
  console.log(`Getting profile for user ID: ${req.user.id}`);
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(`User profile retrieved: ${user._id}`);
    console.log(`Database Name: ${user.db.databaseName}`);
    console.log(`Collection Name: ${user.collection.collectionName}`);
    
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user profile:', error.message);
    res.status(500).json({ error: error.message });
  }
};
