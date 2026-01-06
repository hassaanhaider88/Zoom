import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const BtnCSS =
    "cursor-pointer flex gap-2 justify-center items-center transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]";
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory, userData } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    console.log(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      {/* <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Apna Video Call</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
          >
            <RestoreIcon />
          </IconButton>
          <p>History</p>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div> */}

      <nav className="flex sm:flex-row flex-col items-center justify-between px-12 py-8">
        <div className="flex  items-center gap-12">
          <img src="./Logo.png" alt="logo" className="w-32 h-14 object-cover" />
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a
              href="https://hassaan-haider.netlify.app"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              Developer
            </a>
            <a
              href="https://chat.whatsapp.com/JhqCwKwV0B5LZrcPfWOSsM?mode=ac_t"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              community
            </a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/history">
            <button
              onClick={() => {
                navigate("/history");
              }}
              className={BtnCSS}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                class="copy-svg-injected"
              >
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.298 22 8.69525 21.5748 7.29229 20.8248L2 22L3.17629 16.7097C2.42562 15.3063 2 13.7028 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 13.3347 4.32563 14.6181 4.93987 15.7664L5.28952 16.4201L4.63445 19.3663L7.58189 18.7118L8.23518 19.061C9.38315 19.6747 10.6659 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 7V12H17V14H11V7H13Z"></path>
              </svg>{" "}
              History
            </button>
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            className="bg-red-950 flex gap-2 justify-center items-center text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 text-nowrap hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="copy-svg-injected"
            >
              <path d="M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"></path>
              <path d="M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"></path>
            </svg>
            <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Log Out
          </button>
        </div>
      </nav>

      <div className="w-full h-[80vh] flex px-20 gap-10 items-center md:flex-row flex-col justify-between">
        <div className="leftPanel  px-10">
          <div>
            <h2 className="text-5xl font-semibold ">
              Providing Quality Video Call Just Like Quality Education
            </h2>

            <div className="flex my-10 gap-5">
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 w-full focus:ring-blue-500"
                onChange={(e) => setMeetingCode(e.target.value)}
                placeholder="Enter Meeting Code"
                value={meetingCode}
              />
              <button
                onClick={() => {
                  if (meetingCode.trim() !== "") {
                    handleJoinVideoCall();
                  } else {
                    alert("Please enter a valid meeting code.");
                  }
                }}
                className={BtnCSS}
              >
                Join
              </button>
              {/* <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button> */}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full bg-cover rounded-3xl shadow-2xl"
            src="https://i.pinimg.com/originals/56/ac/f8/56acf82c8806d08f18c3775b4c48300f.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
