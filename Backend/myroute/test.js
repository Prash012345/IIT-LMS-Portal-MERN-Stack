const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword() {
  try {
    const hasheddPassword = await bcrypt.hash("pass", saltRounds);
    console.log(hasheddPassword);
  } catch (error) {
    console.error(error);
  }
}

hashPassword();

let hashedPassword = "$2b$10$kJFan7K9kIdd2ztkzP/lw.Zjezw8IlW4nyuYnINvDSPTpb4i1S6Zy";


bcrypt.hash("pass", saltRounds)
  .then(hashedPassword => {
    // Store 'hashedPassword' in your database

    // Now, when checking if a password is valid (e.g., during login)
    const inputPassword = "passss"; // The password entered by the user

    bcrypt.compare(inputPassword, hashedPassword)
      .then(isMatch => {
        if (isMatch) {
          console.log("Password is valid!");
        } else {
          console.log("Password is not valid.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });