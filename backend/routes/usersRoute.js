const express = require("express");
const asynHandler = require("express-async-handler");
const authMiddleware = require("../middlewares/authMiddleware");

const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const usersRoute = express.Router();

//register
usersRoute.post(
  "/register",
  asynHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User Exist");
    }
    const userCreated = await User.create({ email, name, password });
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      password: userCreated.password,
      token: generateToken(userCreated._id),
    });
  })
);

//login
usersRoute.post(
  "/login",
  asynHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("invalid credentials");
    }
  })
);

//update user


//delete
usersRoute.delete("/:id", (req, res) => {
  res.send("deleted here");
});

//fetch list


//profile route
usersRoute.get(
  "/profile",
  authMiddleware,
  asynHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user._id).populate("projects");
      if (!user) throw new Error("you dont have profile");
      res.status(200);
      res.send(user);
    } catch (error) {
      res.status(500);
      throw new Error("Server");
    }
  })
);


//UPDATE PROFILE

usersRoute.put(
  '/profile/update/',
  authMiddleware,
  asynHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      //This will encrypt automatically in our model
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        password: updateUser.password,
        email: updateUser.email,
   
      });
    } else {
      res.status(401);
      throw new Error('User Not found');
    }
  })
);


//Fetch all Users

usersRoute.get(
  '/',
  asynHandler(async (req, res) => {
    try {
      const users = await User.find().populate('projects');
      res.status(200);
      res.json(users);
    } catch (error) {}
  })
);

module.exports = usersRoute;
