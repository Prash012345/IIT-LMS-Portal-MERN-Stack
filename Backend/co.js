const bcrypt = require('bcrypt');
const User = require('../models/User_db');
const router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
    await client.connect();
}
run();


router.post('/login', async (req, res) => {
const loginUser = async (req, res) => {
  const { email, password, users } = req.body;

  if (email && password && users) {
    try {
      const user = await User.findOne({ email });

      if (user) {
        // Compare the user-provided hashed password with the hashed password from the database
        const isPasswordValid = await bcrypt.compare(password, user.pass);

        if (isPasswordValid) {
          // User authenticated successfully
          let redirectURL;
          if (users === 'students') {
            redirectURL = 'http://localhost:3000/';
          } else if (users === 'teachers') {
            redirectURL = 'http://localhost:3000/';
          } else if (users === 'admin') {
            redirectURL = 'http://localhost:3000/';
          } else {
            res.status(400).send('Invalid user role');
            return;
          }

          // Redirect the user to the appropriate URL
          res.redirect(redirectURL);
        } else {
          res.status(401).send('Invalid username or password');
        }
      } else {
        res.status(401).send('Invalid username or password');
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).send('Error during login');
    }
  } else {
    res.status(400).send('All fields are required');
  }
};



module.exports = router;

