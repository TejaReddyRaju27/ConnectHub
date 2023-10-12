import React, { useState } from "react";
import "./RightSide.css";
// import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";

import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import Chats from "../chats/Chats";
import {GrSettingsOption} from "react-icons/gr";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [chatpop,setChatPopup] = useState(false);
  const chatpopUp=()=>{
    setChatPopup(!chatpop)
  }
  const closeChats=()=>{
    setChatPopup(false)
  }
  const [settingPop, setSetting] = useState(false);
  const setPopup=(e)=>{
    e.preventDefault();
    setSetting(!settingPop)
  }
  const closeSetting=()=>{
    setSetting(false);
  }
  return (
    <div className="RightSide">
      <div className="navIcons">
        <button className="settingButton" onClick={setPopup}><GrSettingsOption size={30} className="grSetting"/></button>
        <div>
        {settingPop?
        <div className="mainsetting">
          <div className="settingpopup">
          <div className="settinghead">
            <h2>Settings</h2>
            <h1 className="closeSetting" onClick={closeSetting}>X</h1>
          </div>
          <div>
         <input type="checkbox" id="check"/>
         <label for='check'>Private</label>
         <input type="checkbox" id="check"/>
         <label for='check'>Public</label>
          </div>
          </div>
          </div>:''}
        </div>
        <button className="chatButton" onClick={chatpopUp}><img src={Comment} alt="" /></button>
        <div>
        {chatpop?
          <div className="mainchats">
            <div className="chatpopup">
            <div className="chatHeader">
              <h1>Chats</h1>
              <h1 className="closeChats" onClick={closeChats}>X</h1>
            </div>
            <div>
              <p><Chats/></p>
            </div>
            </div>
          </div>:''}
        </div>
        
      </div>

      <TrendCard />
      <div>
      </div>

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

    </div>
    
  );
};

export default RightSide;
