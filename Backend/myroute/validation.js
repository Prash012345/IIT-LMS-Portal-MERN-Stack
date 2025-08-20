const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require('../model/User_db'); // Update with the correct path
const Teacher = require('../model/Teacher_db'); // Update with the correct path
const Admin = require('../model/Admin_db'); // Update with the correct path



router.get('/test', async (req, res) => {
  res.json({ msg: "success" });

});


var semail='';

// router.post('/log', async (req, res) => {


//   let email = req.body.email;
//   semail = email;
//   let password = req.body.password;
//   let userType = req.body.userType;

  
  
//   if (userType === 'students') {
//     user = await Student.findOne({ email });
//   } else if (userType === 'teachers') {
//     user = await Teacher.findOne({ email });
//   } else if (userType === 'admin') {
//     user = await Admin.findOne({ email });
//   } else {
//     return res.status(400).json({ message: 'Invalid user type' });
//   }
  
//   const isPasswordValid = await bcrypt.compare(password, user.pass);


//   if (isPasswordValid) {
//     let redirectURL;
//     if (userType === 'students') {
//       redirectURL = 'http://localhost:3003/';
//     } else if (userType === 'teachers') {
//       redirectURL = 'http://localhost:3002/';
//     } else if (userType === 'admin') {
//       redirectURL = 'http://localhost:3001/';
//     } else {
//       res.status(400).send('Invalid user role');
//       return;
//     }

//     res.json({
//       success: true,
//       myurl: redirectURL,
//       myemail: email
//     });
//     console.log("Login Successful");
//     console.log(userType);
//     return;
//   }
//   else {
//     console.log("Login UnSuccessful");
//   }

// });


router.post('/log', async (req, res) => {
  try {
    let email = req.body.email;
    semail = email;
    let password = req.body.password;
    let userType = req.body.userType;

    let user;

    if (userType === 'students') {
      user = await Student.findOne({ email });
    } else if (userType === 'teachers') {
      user = await Teacher.findOne({ email });
    } else if (userType === 'admin') {
      user = await Admin.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    // Check if user is found
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.pass);

    if (isPasswordValid) {
      let redirectURL;

      if (userType === 'students') {
//        redirectURL = 'http://localhost:3003/';
        redirectURL = 'https://iit-mern-student.onrender.com/';
      } else if (userType === 'teachers') {
//        redirectURL = 'http://localhost:3002/';
        redirectURL = 'https://iit-mern-teacher.onrender.com/';
      } else if (userType === 'admin') {
//        redirectURL = 'http://localhost:3001/';
        redirectURL = 'https://iit-mern-admin.onrender.com/';
      } else {
        return res.status(400).send('Invalid user role');
      }

      res.json({
        success: true,
        myurl: redirectURL,
        myemail: email
      });

      console.log("Login Successful");
      console.log(userType);
    } else {
      res.status(401).json({ message: 'Invalid password' });
      console.log("Login Unsuccessful: Invalid password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Internal server error' });
    res.send('<script>window.location.reload()</script>');
  }
});


router.get("/profile",async (req, res) => {
  var query = { email: semail };
  var data=await Teacher.find(query);
  res.json({data});
});

router.get("/profile1",async (req, res) => {
  var query = { email: semail };
  var data=await Student.find(query);
  res.json({data});
});

router.get("/profile2",async (req, res) => {
  var query = { email: semail };
  var data=await Admin.find(query);
  res.json({data});
});



module.exports = router;
