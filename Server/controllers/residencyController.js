const asyncHandler = require("express-async-handler");
const prisma = require("../config/prismaConfig");


//Function for Creating residencies
const createResidency = asyncHandler(async (req, res) => {
  // console.log("Residency created successfully");
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const residency = await prisma.Residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        //Accessing the user's email that has been used in creating an account
        owner: {connect: {email: userEmail}},
      },
    });
    res.send({message: "Residency is created successfully"})
  } catch (err) {
    if (err.code === "p2002") {
      throw new Error("A residency with address already exists.");
    }
    throw new Error(err.message);
  }
});


//Function for Getting all residencies
const getAllResidencies = asyncHandler(async(req, res)=>{
    try {
        const residencies = await prisma.Residency.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        // res.send(residencies);
        res.status(200).json({
            success: true,
            data: residencies
        })
    } catch (error) {
        console.log("Error fetching residencies", error);
        res.status(500).json({
            success: false,
            message: "Error fetching residencies",
            error: error.message
        });
    }
});



// Function for Getting a Specific user (Getting by id)
const specificResident = asyncHandler(async(req, res)=>{
    const {id} = req.params;
    
    try {
        const residency = await prisma.Residency.findUnique({
            where: {id},
        });
        res.send(residency);
    } catch (error) {
        throw new Error(error.message)
        console.log(error);
    }
})







module.exports = {createResidency, getAllResidencies, specificResident};
