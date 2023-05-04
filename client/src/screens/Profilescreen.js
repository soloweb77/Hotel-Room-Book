import React, { useState, useEffect } from 'react'
import { Tag } from "antd";
import { Tabs } from 'antd';
import MyBookingScreen from '../components/Mybooking';
const { TabPane } = Tabs;


function Profilescreen() {

    const user = JSON.parse(localStorage.getItem("currentUser")).data
    useEffect(() => {

        if (!user) {
            window.location.href = '/login'
        }

    }, [])
    return (
        <div className="ml-3 mt-3">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Profile" key="1">
            <div className="row">
              <div className="col-xs-12 ml-5 mb-5">
                <div className="bs">
                  <p>My Profile</p>
                  <p>Name : {user.name}</p>
                  <p>Email : {user.email}</p>
                  <p>
                    IsAdmin :{" "}
                    {user.isAdmin ? (
                      <Tag color="green">YES</Tag>
                    ) : (
                      <Tag color="red">NO</Tag>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Booking" key="2">
            <MyBookingScreen></MyBookingScreen>
          </TabPane>
        </Tabs>
      </div>
    );
  }


export default Profilescreen





// export function MyBookings() {
//     const user = JSON.parse(localStorage.getItem("currentUser")).data
//     const[bookings,setbookings]=useState([])
//     const [loading, setloading] = useState(false)
//     const [error, seterror] = useState()

//     useEffect(async() => {

//         try {
//             setloading(true)
//             const data = await (await axios.post('/api/bookings/getbookingsbyuserid', { userid : user._id })).data
//             console.log(data)
//             setbookings(data)
//             setloading(false)
//         } catch (error) {
//             console.log(error)
//             setloading(false)
//             seterror(error)
//         }

//     }, [])

//     return (
//         <div>
//            <div className='row'>
//                <div className='col-md-6'>
                    
//                     {loading && (<Loader/>)}
//                     {bookings && (bookings.map(booking =>{

//                         return<div className='bs'>
//                             <h1>{booking.room}</h1>
//                             <p><b>BookingId </b> : {booking._id}</p>
//                             <p><b>Check In </b> : {booking.fromdate}</p>
//                             <p><b>Check Out </b> : {booking.todate}</p>
//                             <p><b>Amount</b> : {booking.totalamount}</p>
//                             <p><b>Status</b> : {booking.status == 'booked' ? 'CONFIRMED' : 'CANCELLED'}</p>


//                             <div className='text-right'>

//                             <button class='btn btn-primary'>CANCEL BUTTON</button>    
//                             </div>

//                         </div>
//                     }))}
//                </div>
//            </div>
//         </div>
//     )
// }


