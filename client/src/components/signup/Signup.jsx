import React,{useState} from 'react';
import './Signup.css';
import styled from 'styled-components'; 
// import CountrySelector from '../Country-Selector/CountrySelector';
// import { Button } from '@material-ui/core';
// import IndianState from '../Country-Selector/IndianState';

export default function Signup() {
  const [user, setuser] = useState({
    name:"",email:"",contact:"",address:"",password:"",confirm:""
  })

  const handleinput=(event)=>{
    const {name,value}=event.target;
    setuser({...user,[name]:value});
  }

  const submituser=()=>{
    setuser({name:"",email:"",contact:"",address:"",password:"",confirm:""});
  }

    return (
        <>
          <Mainbox>
              <Header>Sign Up</Header>
              <Details className="form">
                 <Detail>Name:  <input type="text" placeholder="Your Name" name="name" id="" value={user.name} onChange={handleinput}/></Detail>
                 <Detail>Email: <input type="email" placeholder="Your Email" name="email" id="" value={user.email} onChange={handleinput} /></Detail>
                 <Detail>Contact: <input type="number" placeholder="Your Contact Number" name="contact" id="" value={user.contact} onChange={handleinput}/></Detail>
                 <Detail>Address: <input type="text" placeholder="Your Address" name="address" id="" value={user.address}onChange={handleinput}/></Detail>
                 {/* <Detail>
                   <CountrySelector/>
                 </Detail> */}
                 <Detail>Password: <input type="password" placeholder="Your Password" name="password" id="" value={user.password}onChange={handleinput}/></Detail>
                 <Detail>Password: <input type="password" placeholder="Confirm Password" name="confirm" id=""value={user.confirm} onChange={handleinput}/></Detail>
              </Details>
              <Submit onClick={submituser}>Join Now</Submit>
          </Mainbox>
        </>
    )
}


const Mainbox=styled.div`
  border:3px solid rgb(239, 243, 10);
  height:400px;
  width:400px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:auto auto;
  margin-top:25px;
`;
const Header=styled.div`
 height:50px;
 width:95%;
 font-size:30px;
 display:flex;
 align-items:center;
 justify-content:center;
 Font-weight:800;
`;
const Details=styled.div`
 //border:1px solid red;
 height:350px;
 width:95%;
 display:flex;
 flex-direction:column;
 justify-content:space-evenly;
 align-items:center;
`;
const Detail=styled.div`
 display:flex;
`;
const Submit=styled.button`
 margin:10px;
 font-size:25px;
 border:none;
 background-color:rgb(239, 243, 10);
 cursor:pointer;
 :hover{
   background-color:white;
   color:black;
 }
 padding:5px;
`;
