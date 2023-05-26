import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import ReferralCode from "./Components/ReferralCode";
import Procedure from "./Components/Procedure";

const App = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      {/* <div  className='para'>
        <p>UI/UX refer & earn</p>
      </div> */}
      <div className="balance">
        <Card />
        <ReferralCode />
      </div>
      <div className="procedure-content">
        <h3 style={{ color: "purple" }}>How does it work?</h3>
        <div className="procedure-info">
          <Procedure img="src\assets\3people.png" heading="Invite your friends" details="Share the link tutedude.com withyour friends"/>
          <Procedure img="src\assets\tag.png" heading="Friend purchases any course" details="Using your REFERRAL CODE in the payments page"/>
          <Procedure img="src\assets\₹.png" heading="You get ₹ 200 as referral money" details="On total purchase the friend makes, into your wallet"/>
          <Procedure img="src\assets\percent.png" heading="Your Friend gets ₹ 200 Off " details="On his overall fee on successful purchase using your referral code "/>
          <Procedure img="src\assets\wallet.png" heading="Transfer money from wallet" details="When the wallet balance reaches
₹200 or more, you can withdraw it"/>
          
        </div>
      </div>
      <div className="other-info">
        <h5>Friends who enrolled</h5>
        <h5>Terms & conditions</h5>
      </div>
    </div>
  );
};

export default App;
