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



//Function to get all bookings by a user
const getAllBookings = asyncHandler(async(req, res)=>{
  const {email} = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisits: true}
    })
    res.status(200).send(bookings)
  } catch (error) {
    throw new Error(error.message)
  }
})



//function to cancel the booking
const cancelBooking = asyncHandler(async(req, res)=>{
  const {email} = req.body;
  const {id} = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {email: email},
      select: {bookedVisits: true}
    })
    const index = user.bookedVisits.findIndex((visit)=> visit.id === id);
    if (index === -1) {
      res.status(404).json({message: "Booking not found"})
    }else{
      user.bookedVisits.splice(index, 1)
      await prisma.user.update({
        where: {email},
        data: {
          bookedVisits: user.bookedVisits
        }
      })
      res.send("Booking is cancelled successfully")
    }
  } catch (error) {
    throw new Error(error.message)
  }
})



// Adding residency to favorite
const toFavorite = asyncHandler(async(req, res)=>{
  const {email} = req.body;
  //rid for residency id
  const {rid} = req.params;
  //Removing from favorites function
  try {
    //finding user
    const user = await prisma.user.findUnique({
      where: {email: email}
    })
    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: {email},
        data: {
          favResidenciesID :{
            set: user.favResidenciesID.filter((id)=> id !== rid)
          }
        }
      });
      res.send({message: "Remove from favorites", user: updateUser})
    }else{
      //Adding to favorites function
      const updateUser = await prisma.user.update({
        where: {email},
        data: {
          favResidenciesID: {
            push: rid
          }
        }
      })
      res.send({mesage: "Updated favorites", user: updateUser});
    }
  } catch (error) {
    throw new Error(error.message)
  }
})


//Function to get all favorites by a user
const getAllFav = asyncHandler(async(req, res)=>{
  const {email} = req.body;
  // const {id} = req.params;
  try {
    const favResidency = await prisma.user.findUnique({
      where: {email},
      select: {favResidenciesID: true}
    })
    res.status(200).send(favResidency);
  } catch (error) {
    throw new Error(error.message)
  }
})








module.exports = {createUser, bookVisit, getAllBookings, cancelBooking, toFavorite, getAllFav};
