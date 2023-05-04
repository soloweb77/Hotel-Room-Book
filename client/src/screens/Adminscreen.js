import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'
import AdminRoomScreen from "../components/Adminroomscreen"
import AdminUserScreen from '../components/Adminuserscreen';
import Adminaddroomscreen from '../components/Adminaddroomscreen';
import AdminBookingScreen from '../components/Adminbookingscreen';

const { TabPane } = Tabs;

function Adminscreen() {

    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
      if (!user || user.isAdmin == false) {
        window.location.href = "/home";
      }
    }, []);
    
    return (
        <div className='mt-300 ml-3 mr-3 bs'>
            <h2 className='text-center' style={{ fontsize: '30px' }}><b>Admin Panel</b></h2>
            <Tabs defaultActiveKey="2" >
                <TabPane tab="Bookings" key="1">
                    <AdminBookingScreen/>
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <AdminRoomScreen/>
                </TabPane>
                <TabPane tab="Add Room" key="3">
                    <Adminaddroomscreen/>
                </TabPane>
                <TabPane tab="Users" key="4">
                   <AdminUserScreen/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Adminscreen








// export function Addroom(){
//     const[name,setname]=useState()
//     const[rentperday,setrentperday]=useState()
//     const[maxcount,setmaxcount]=useState()
//     const[description,setdescription]=useState()
//     const[phonenumber,setphonenumber]=useState()
//     const[type,settype]=useState()
//     const[imageurl1,setimageurl1]=useState()
//     const[imageurl2,setimageurl2]=useState()
//     const[imageurl3,setimageurl3]=useState()

//    async function addRoom(){
//         const newroom={
//             name,
//             rentperday,
//             maxcount,
//             description,
//             phonenumber,
//             type,
//             imageurls:[imageurl1,imageurl2,imageurl3]

//         }
//         try {
//             const result=(await axios.post('/api/rooms/addroom',newroom)).data
//             console.log(result)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return(
//         <div className="row">
//             <div className="col-md-5 ">
//                 <input type='text' className='form-control' placeholder='room name'
//                 value={name} onChange={(e)=>{setname(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='rent per day'
//                 value={rentperday} onChange={(e)=>{setrentperday(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='max count'
//                 value={maxcount} onChange={(e)=>{setmaxcount(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='description'
//                 value={description} onChange={(e)=>{setdescription(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='phone number'
//                 value={phonenumber} onChange={(e)=>{setphonenumber(e.targt.value)}}/>
//             </div>
//             <div className='col-md-5 '>

//             <input type='text' className='form-control' placeholder='type'
//             value={type} onChange={(e)=>{settype(e.targt.value)}}
//             />
//                 <input type='text' className='form-control' placeholder='image url 1'
//                 value={imageurl1} onChange={(e)=>{setimageurl1(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='image url 2'
//                 value={imageurl2} onChange={(e)=>{setimageurl2(e.targt.value)}}
//                 />
//                 <input type='text' className='form-control' placeholder='image url 3'
//                 value={imageurl3} onChange={(e)=>{setimageurl3(e.targt.value)}}
//                 />


//             <div className='text-right'>

//                 <button className='btn btn-primary mt-2' onClick={addRoom}>Add Room</button>
//             </div>
//             </div>

//         </div>
//     )
// }




