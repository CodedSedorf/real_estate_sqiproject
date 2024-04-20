const asyncHandler = require("express-async-handler");
const prisma = require("../config/prismaConfig");

const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");
  const { name, email } = req.body;
  console.log(email, name);
  //Checking whether a user exists
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.send({
      message: "User created succesfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already exist" });
});



// function book a visit to the residence
const bookVisit = asyncHandler(async(req, res)=>{
  const {email, date} = req.body;
  const {id} = req.params

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisits: true}
    })
    //If the user has booked the same residence
    if (alreadyBooked.bookedVisits.some((visit)=> visit.id === id)) {
      res.status(400).json({message: "This residence is already booked by you"})
    }
    else{
      // If the resident hasn't been booked before by the user
      await prisma.user.update({
        where: {email: email},
        data: {
          bookedVisits: {push: {id, date}}
        }
      })
      res.send("Your visit has been booked successfully")
    }
  } catch (err) {
    throw new Error(err.message)
  }
})



//Function to get all bookings by users
// const getAllBookings = asyncHandler(async(req, res)=>{
  
// })

module.exports = {createUser, bookVisit};
