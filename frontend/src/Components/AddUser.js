
import React from 'react'

import { useState, useEffect } from 'react'

import axios from 'axios'

function AddUser() {


    const [user, setUser] = useState({
        name:"",
        password:"",
    });

   function handleChange(event){
    const value = event.target.value;

    setUser({
        ...user,
        [event.target.name]:value,

    })
   }

   function handleSubmit(event){

    event.preventDefault();

    const userdata = {
        name: user.name,
        password:user.password,
    }

    

    axios.post("http://localhost:5000/useradd", userdata)
    .then(res =>{
        console.log(res);
        console.log(res.data)
    })

    


   }

   console.log(user)

    // const postData = () =>{

    //     axios.post()
    // }
  return <>

  <div className='container'>
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control" name="name" value={user.name} onChange={handleChange} aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" class="form-control" value={user.password} name="password" onChange={handleChange}/>
  </div>
  
  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
  </div>
  

  
  
  </>
}

export default AddUser