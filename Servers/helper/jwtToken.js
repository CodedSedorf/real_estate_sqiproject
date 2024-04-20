const jwt = require("jsonwebtoken");







const getJwtToken = (userId) =>{
  return jwt.sign(
    {userId: userId},
    process.env.JWT_TOKEN,
    {expiresIn: "3 days"}
  )
}


module.exports = getJwtToken;











// // Import the jsonwebtoken library for working with JWTs
// const jwt = require("jsonwebtoken");

// // Define a function called getJwtToken that takes a userId as input
// const getJwtToken = (userId) => {
//   // Create a JWT using the jsonwebtoken library's sign method
//   return jwt.sign(
//     // Set the payload of the JWT to an object containing the userId
//     { userId: userId },
//     // Use a secret key stored securely in the environment variable JWT_SECRET
//     process.env.JWT_SECRET,
//     // Set the expiration time of the JWT to 5 hours
//     { expiresIn: "5hrs" }
//   );
// };

// // Export the getJwtToken function so it can be used in other parts of the application
// module.exports = getJwtToken;
