import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "./Loader";
import Error from "./Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.get("/api/rooms/getallrooms")).data;
      setRooms(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <div className='row'>
      <div className='col-md-10'>
        <h1>Rooms</h1>
        {loading && <Loader />}

        <table className='table table-bordered table-dark'>
          <thead className='bs'>
            <tr>
            <th>Room Id</th>
              <th>Name</th>
              <th>Type</th>                           
               <th>Rent Per day</th>                          
                <th>Max Count</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          <tbody>                       
             {rooms.length && rooms.map((room) => {
            return (<tr>     
                 <td>{room._id}</td>
                <td>{room.name}</td>                           
                <td>{room.type}</td>                          
                 <td>{room.rentperday}</td>                  
                <td>{room.maxcount}</td>
                <td>{room.phonenumber}</td>
                </tr>
            )
          })}                  
          </tbody>

        </table>


      </div>
    </div>
)}

export default AdminRoomScreen;