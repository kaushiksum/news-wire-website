const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

  require('dotenv').config();

mongoose.connect(process.env.MONG)

.then(() => console.log('db connect')).catch((error) => console.log(error));


const app = express();


app.use(express.json())
app.use(cors());


app.get('/' , (req, res) => {

  res.send('working')
  

});




const newsRoutes = require('./routes/news')
app.use(newsRoutes);


app.listen(process.env.PORT, () => {

  console.log('server started')

});






























// const express = require('express');

//  const mongoose = require('mongoose');
 

//        require('dotenv').config();

//   // const dotenv = require('dotenv');

//   // dotenv.config();

// const app = express();

// //  mongoose.connect(process.env.MONGODB_URI)

// //   .then(() => console.log('Connected!')).catch((error)=> console.log(error));

// //  app.get('*' , (req, res) => {

// //      res.send('working');

// //  });


 
// mongoose.connect(process.env.MONGODB_URI).then(()=>{
//   console.log("db Connected");
// })
// .catch((error)=>{
//   console.log(error);
// })


// const newsRoutes = require('./routes/news')
// app.use(newsRoutes);


// app.listen(process.env.PORT, () => {

//      console.log('server started');
// });



// // mongoose.connect(process.env.MONGODB_URI).then(()=>{
// //   console.log("db Connected");
// // })
// // .catch((error)=>{
// //   console.log(error);
// // })