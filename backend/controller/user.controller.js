import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

export const Signup = async (req, res) => {
  const { username, password } = req.body;

  //check is entered username and password
  if (!username || !password) {
    return res.status(400).json({
      error: 'missing credentials',
    });
  }
  try {
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //check if username exists
    const exist = await User.findOne({ username });
    if (exist) {
      return res.status(409).json({
        error: 'Username is taken',
      });
    }

    //create user
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const Login = async (req, res) => {
  const { username, password } = req.body;

  //check is entered username and password
  if (!username || !password) {
    return res.status(400).json({
      error: 'missing credentials',
    });
  }

  try {
    //find user
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        error: 'Username not found',
      });
    }
    //verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        error: 'Invalid password',
      });
    }
    // generate a JWT and send it back to the client to be stored
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
