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
              <Header>
                Sign Up
                <Login>Already have an account! <a href="/login">Login here</a> </Login>
              </Header>
              <Details className="form">
                 <Detail><input type="text" placeholder="Your Name" name="name" id="" value={user.name} onChange={handleinput}/></Detail>
                 <Detail><input type="email" placeholder="Your Email" name="email" id="" value={user.email} onChange={handleinput} /></Detail>
                 <Detail><input type="number" placeholder="Your Contact Number" name="contact" id="" value={user.contact} onChange={handleinput}/></Detail>
                 <Detail><input type="text" placeholder="Your Address" name="address" id="" value={user.address}onChange={handleinput}/></Detail>
                 {/* <Detail>
                   <CountrySelector/>
                 </Detail> */}
                 <Detail><input type="password" placeholder="Your Password" name="password" id="" value={user.password}onChange={handleinput}/></Detail>
                 <Detail><input type="password" placeholder="Confirm Password" name="confirm" id=""value={user.confirm} onChange={handleinput}/></Detail>
              </Details>
              <Submit onClick={submituser}>Join Now</Submit>
          </Mainbox>
        </>
    )
}


const Mainbox=styled.div`
  background-color:black;
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
 color:white;
 height:100px;
 width:95%;
 font-size:30px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 Font-weight:800;
`;
const Details=styled.div`
 //border:1px solid red;
 color:white;
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

const Login=styled.div`
 font-size:15px;
`
