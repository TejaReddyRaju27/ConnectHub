import { Modal, useMantineTheme } from "@mantine/core";
import { Button } from "../Button/Button";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
          <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="@Username"
          />
          </div>

          {/* <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>  */}

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="number"
            className="infoInput"
            name="worksAT"
            placeholder="Enter your 10 digits Mobile number."
          />
        </div>

        {/* <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div> */}

        {/* <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Bio Status"
          />
        </div> */}
        <div>
          <input
            type="date"
            className="infoInput"
            placeholder="DOB"
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
        </div>

        <Button className="button infoButton" text='Update'>Update</Button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
