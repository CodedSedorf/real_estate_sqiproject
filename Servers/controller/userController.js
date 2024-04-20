const prisma = require("../prisma/index");
const cookieToken = require("../util/cookies");

const signUp = async (req, res) => {
    try {
        const { name, email } = req.body;
        
        // Check if email already exists
        const userExists = await prisma.user.findUnique({
            where: { email: email }
        });

        if (userExists) {
            throw new Error("Email is already registered");
        }
        //Checking if input is empty
        if (!name || !email) {
            throw new Error("Input fields cannot be empty");
        }

        // Create the user
        const user = await prisma.user.create({
            data: { name, email }
        });
        // res.send({
        //     message: "User registered succesfully",
        //     data: {name, email}
        // })

        // Set the JWT token as a cookie and send response
        cookieToken(user, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = signUp;
