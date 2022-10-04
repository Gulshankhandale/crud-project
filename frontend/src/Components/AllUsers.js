import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllUsers() {

    const [user, setUser ] = useState([]);

    const url = "http://localhost:5000/"

    

    useEffect(()=>{

    axios.get(url)
    .then((res =>{
        setUser(res.data)

        console.log(res.data)

        
    }))
    }, [])





  return <>
  <div className='container'>
    <div className='h2 text-center mt-4'>All Users</div>
    <div className='text-center mb-3'>
    <Link to='/adduser'><button type="button" class="btn btn-info">Add User</button></Link>
    </div>
  <table class="table border">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
        { user.map((item)=>(
            <tr>
            <th scope="row" key={item._id}>{item._id}</th>
            <td>{item.name}</td>
            <td>{item.password}</td>
            <td><Link to=''><button type="button" class="btn btn-warning me-2">Update</button></Link>
            <Link to=''><button type="button" class="btn btn-danger">Delete</button></Link>
            </td>
            
          </tr>

        ))}
      
  </tbody>
</table>
</div>
  
  </>
}

export default AllUsers