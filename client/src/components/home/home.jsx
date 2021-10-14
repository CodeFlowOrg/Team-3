import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-title">Place where you fall in love with food</h1>
          <p className="home-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            earum inventore iusto soluta beatae laboriosam neque voluptatibus?
            Dicta consequuntur
          </p>
          <div className="home-input">
            <input type="text" placeholder="Enter Your Delivery Location" />
            <button>Search</button>
          </div>
        </div>
        <div className="home-right">
          {/* <img
            src={require("../../assets/images/photo-6.png").default}
            alt=""
          /> */}
        </div>
      </div>
    );
  }
}

export default Home;
