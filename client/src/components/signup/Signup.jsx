import React from 'react';
import './Signup.css';
import styled from 'styled-components'; 

export default function Signup() {
    return (
        <>
          <Mainbox>
              <Header></Header>
              <Details>
                 <Detail>Name:  <input type="text" placeholder="Your Name" name="" id="" /></Detail>
                 <Detail>Email: <input type="email" placeholder="Your Email" name="" id="" /></Detail>
                 <Detail>Contact: <input type="number" placeholder="Your Contact Number" name="" id="" /></Detail>
                 <Detail>Address: <input type="text" placeholder="Your Address" name="" id="" /></Detail>
                 <Detail>Password: <input type="password" placeholder="Your Password" name="" id="" /></Detail>
                 <Detail>Password: <input type="password" placeholder="Confirm Password" name="" id="" /></Detail>
              </Details>
          </Mainbox>
        </>
    )
}


const Mainbox=styled.div`
  border:3px solid black;
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
 border:2px solid green;
 height:50px;
 width:95%;
`;
const Details=styled.div`
 border:1px solid red;
 height:350px;
 width:95%;
 display:flex;
 flex-direction:column;
 justify-content:space-evenly;
 align-items:center;
`;
const Detail=styled.div`
 border:3px solid yellow;
`
