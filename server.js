const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: './config.env'});

// connect to database
const dbURL= process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
  .then((result)=> console.log('connected to db'))
  .catch((err) => console.log(err));



// Server
const port = process.env.port || 3000;
app.listen(port,() => {
  console.log(`App running on port ${port}`);
});
