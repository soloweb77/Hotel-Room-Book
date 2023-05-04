const express =require('express')
const router=express.Router()
const Booking=require("../models/booking")
const moment=require('moment')
const Room=require('../models/room')
const { v4: uuidv4 } = require('uuid');
require("dotenv").config()
const stripe=require('stripe')(process.env.APITOKEN)


router.post("/bookroom",async(req,res)=>{

    try {
        const {
            room,
            userid,
          fromdate,
          todate,
          totalamount,
          totaldays,
          token
        }=req.body
    
        try {
            const customer=await stripe.customers.create({
                email :token.email,
                source:token.id
               
            })
    
            const payment=await stripe.charges.create(
                {
                 amount :totalamount*100,
                customer:customer.id,
                currency:'INR',
                receipt_email:token.email,
    
            },{
                idempotencyKey :uuidv4(),
            })
            if(payment){
                
                    const newbooking=new Booking({
                        room:room.name,
                        roomid:room._id,
                        userid,
                        fromdate :moment(fromdate).format('DD-MM-YYYY'),
                        todate :moment(todate).format('DD-MM-YYYY'),
                        totalamount :totalamount,
                        totaldays,
                        transactionId:uuidv4(), 
                    })
                    const booking=await newbooking.save()
            
                    const roomtemp=await Room.findOne({_id:room._id})
            
                    roomtemp.currentbookings.push({
                        bookingid:booking._id,
                        fromdate :moment(fromdate).format('DD-MM-YYYY'),
                        todate :moment(todate).format('DD-MM-YYYY'),
                        userid:userid,
                    status:booking.status})
            
                   await roomtemp.save()
            
                    // res.send('Room booked Successfully')
                // } catch (error) {
                //     return res.status(400).json({error})
                // }
    
            }
            res.send('Payment Successfull , Your Room Is Booked')
           
        }catch (error) {
            return res.status(400).json({error})
            
        }
        
    } catch (error) {
        return res.status(400).json({ message: error });
    }


   
  
//  console.log(customer)




    // try {
    //     const newbooking=new Booking({
    //         room:room.name,
    //         roomid:room._id,
    //         userid,
    //         fromdate :moment(fromdate).format('DD-MM-YYYY'),
    //         todate :moment(todate).format('DD-MM-YYYY'),
    //         totalamount,
    //         totaldays,
    //         transactionId:'1234' 
    //     })
    //     const booking=await newbooking.save()

    //     const roomtemp=await Room.findOne({_id:room._id})

    //     roomtemp.currentbookings.push({
    //         bookingid:booking._id,
    //         fromdate :moment(fromdate).format('DD-MM-YYYY'),
    //         todate :moment(todate).format('DD-MM-YYYY'),
    //         userid:userid,
    //     status:booking.status})

    //    await roomtemp.save()

    //     res.send('Room booked Successfully')
    // } catch (error) {
    //     return res.status(400).json({error})
    // }
})



router.post("/getbookingbyuserid", async (req, res) => {
  const { userid } = req.body;
  try {
    const bookings = await Booking.find({ userid: userid });

    res.send(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/cancelbooking", async (req, res) => {
  const { bookingid, roomid } = req.body;
  try {
    const booking = await Booking.findOne({ _id: bookingid });

    booking.status = "cancelled";
    await booking.save();
    const room = await Room.findOne({ _id: roomid });
    const bookings = room.currentbookings;
    const temp = bookings.filter((x) => x.bookingid.toString() !== bookingid);
    room.currentbookings = temp;
    await room.save();

    res.send("Your booking cancelled successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});
module.exports=router