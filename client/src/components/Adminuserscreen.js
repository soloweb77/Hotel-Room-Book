import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminUserScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.get("/api/users/getallusers")).data;
      setUsers(data);
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
            <div className='col-md-12'>
                <h1>Users</h1>
                <table className='table table-dark table-bordered'>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users && (users.map((user)=>{
                            return<tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'YES':'NO'}</td>
                            </tr>
                        }))}
                    </tbody>

                </table>
            </div>
        </div>
        
  );
}

export default AdminUserScreen;