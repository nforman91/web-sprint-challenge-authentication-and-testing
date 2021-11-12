const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restrict = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', restrict, jokesRouter); // only logged-in users should have access!

const Users = require('./jokes/jokes-model')

// server.get("/", (req, res) => {
//   res.status(200).json({ api: "up" });
// });

// server.get("/users", (req, res) => {
//   Users.getAll()
//     .then(users => {
//       res.status(200).json(users);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

server.get("/users/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

server.post("/users", async (req, res) => {
  Users.add(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
