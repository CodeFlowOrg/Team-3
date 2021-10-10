import React from "react";
import styled from "styled-components";
import Chicken from "../../Assets/Chicken.jpg";
import './order.css';

export default function Order() {
  return (
    <>
      <Background>
        <Left>
          <Content>
            <Header>
              <img src={Chicken} height="108" width="108" alt="" />
              <Text>
                <h1>BK Mess</h1>
                <h2>Ram Nagar</h2>
              </Text>
            </Header>
            <ItemList>
              <h2>Tandori Chicken</h2>
              <Box1>
                <Add>
                  <Quan>&nbsp;&nbsp;-&nbsp;&nbsp;</Quan>Add<Quan>&nbsp;&nbsp;+&nbsp;&nbsp;</Quan>
                </Add>
              </Box1>
            </ItemList>
            <End>Any Suggestions!!!!</End>
          </Content>
        </Left>
        <Right>
          <Content>
            <h2><u>Bill Details</u></h2>
            <br />
            <br />
            <h3>Items Total &nbsp;&nbsp;: &nbsp;&nbsp;320</h3>
            <h3>Delivery Charge&nbsp;:&nbsp;10</h3>
            <h4>__________________________</h4>
            <h3>To Pay&nbsp;&nbsp; :&nbsp;&nbsp; 330</h3>
          </Content>
        </Right>
      </Background>
    </>
  );
}
const Background = styled.div`
  color: white;
  min-height: 501px;
  width: 90%;
  display: flex;
  margin: auto auto;
  background-color: black;
  margin-top: 30px;
  justify-content:space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 451px;
  }
`;
const Right = styled.div`
  width: 45%;
  min-height: 450px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin:auto auto;
`;
const Left = styled.div`
  width: 45%;
  min-height: 450px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin:auto auto;
`;
const Content = styled.div`
 margin-top:20px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Text = styled.div`
  margin-left: 30px;
  font-size: 30px;
`;
const ItemList = styled.div`
  height:30px;
  margin: 59px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding-left: 50px;
`;
const End = styled.div`
  color: white;
`;
const Box1 = styled.div`
  display:flex;
  margin-left:30px;
  border:2px solid white;
  padding;2px;
`;
const Add=styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:none;
`
const Quan = styled.div`
 margin:00px;
 padding:00px;
 border:1px solid white;
 cursor:pointer;
`;
