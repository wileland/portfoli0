import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js'; 

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

export default router;
