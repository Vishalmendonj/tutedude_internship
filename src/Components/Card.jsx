import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-main">
      <div className="card">
        <div id="referral" className="cardinfo">
          Referral Earning
          <h1>₹2,500</h1>
        </div>
        <div id="total-referral" className="cardinfo">
          Total Referrals
          <h1>7</h1>
        </div>
        <div id="wallet" className="cardinfo">
          Wallet Balance
          <h1>₹500</h1>
        </div>
        <div className="btn">
            <button>Withdraw Balance</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
