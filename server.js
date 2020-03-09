const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routers/projectRouter');

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());
server.use('/project', projectRouter);

server.use((err, req, res, next) => {
   console.log(err);
   res.status(500).json({
       message: 'Server error, please try again.'
   })
});

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`)
});
