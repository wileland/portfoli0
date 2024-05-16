import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected for seeding');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const seedUsers = [
  { username: 'user1', email: 'user1@example.com', password: 'password123' },
  { username: 'user2', email: 'user2@example.com', password: 'password123' },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  console.log('Database seeded');
};

seedDB().then(() => {
  mongoose.connection.close();
});
