import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import { Button } from "../Button/Button";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <h1 className="User-name">Teja Reddy</h1>

      <div className="info">
        <span>
          <b>@Username: </b>
        </span>
        <span>Teja@2727</span>
      </div>

      {/* <div className="info">
        <span>
          <b>Bio: </b>
        </span>
        <span>Hi this teja's account</span>
      </div> */}

      <div className="info">
        <span>
          <b>DOB: </b>
        </span>
        <span>01/07/2002</span>
      </div>

      <Button className="button logout-button" text='LogOut'>Logout</Button>
    </div>
  );
};

export default InfoCard;
