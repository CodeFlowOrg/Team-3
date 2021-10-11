import React from "react";
import styled from "styled-components";
import Signup from "../signup/Signup";

export default function Login() {
  return (
    <>
      <Mainpage>
        <Log>
          <Header>
            Login Here
            <Sign>
              New here! <a href="/signin">Sign up</a>{" "}
            </Sign>
          </Header>
          <Form>
            <Details> <input type="email" placeholder="Enter Your Email" /> </Details>
            <Details> <input type="password" placeholder="Enter Your Password" /> </Details>
          </Form>
          <Submit >Log In</Submit>
        </Log>
      </Mainpage>
    </>
  );
}
const Mainpage = styled.div`
  background-color: black;
  border: 3px solid rgb(239, 243, 10);
  height: 270px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  margin-top: 125px;
`;
const Log = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;
const Header = styled.div`
  color: white;
  height: 100px;
  //width:95%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`;
const Sign = styled.div`
 font-size:15px;
 font-weight:400;
`;
const Form = styled.div`
color: white;
height: 100px;
width: 95%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;
const Details = styled.div`

`;

const Submit=styled.button`
margin:10px;
height:37px;
font-size:25px;
border:none;
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(239, 243, 10);
cursor:pointer;
:hover{
  background-color:white;
  color:black;
}
padding:5px;
`
