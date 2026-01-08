import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import server from "../environment";

const LandingPage = () => {
  const { handleUserGetByToken, userData } = React.useContext(AuthContext);
  const [MCError, setMCError] = React.useState(false);
  const [MeetingCode, setMeetingCode] = React.useState("HMK");
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleUserGetByToken(token);
    }
  }, []);

  const handleJoinMeetingClick = async () => {
    const UserMeetingCode = prompt("Enter Meeting Code:");
    if (UserMeetingCode != null && UserMeetingCode.trim() !== "") {
      setMeetingCode(UserMeetingCode);
      console.log(UserMeetingCode);
      // check either meeting avaible or not
      const res = await fetch(`${server}/api/v1/meetings/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meetingId: UserMeetingCode }),
      });
      const data = await res.json();
      if (data.status === 200) {
        if (data.meetingExists.IsLiveNow == true) {
          navigate(`/${UserMeetingCode}`);
          console.log(data);
        } else {
          setMCError(true);
          console.log(data);
        }
      } else {
        console.log(data);
        setMCError(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Main Container / Browser Mockup */}
      <div className="w-full bg-[#F8F9FB] rounded-3xl shadow-2xl overflow-hidden border border-orange-100 relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-12 py-8">
          <div className="flex  items-center gap-12">
            <img
              src="./Logo.png"
              alt="logo"
              className="w-32 h-14 object-cover"
            />
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
            {userData.username != null ? (
              <Link to="/home">
                <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/auth">
                <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Register/Login
                </button>
              </Link>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 px-12 pb-20 pt-10">
          {/* Left Content */}
          <div className="z-10 max-w-lg">
            <h2 className="md:text-6xl text-4xl font-bold text-[#0A1D3C] leading-[1.15] mb-4xl font-extrabold text-[#0A1D3C] leading-[1.15] mb-6">
              Seamless Video
              <br />
              Communication,
              <br />
              Anytime,
              <span className="relative">
                Anywhere!
                {/* Hand-drawn circle effect using SVG */}
                <svg
                  className="absolute -left-2 -top-1 w-[110%] h-[120%] text-orange-400 opacity-70"
                  viewBox="0 0 200 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 30C5 15 50 5 100 5C150 5 195 15 195 30C195 45 150 55 100 55C50 55 5 45 5 30Z"
                    stroke="#670F0F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-sm">
              Stay connected like never before with high-quality video calls,
              crystal-clear audio, and effortless collaboration.
            </p>

            <div className="flex items-center gap-6 mb-12">
              {userData.username != null ? (
                <Link to="/home">
                  <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Free Trial
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/auth">
                    <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Start Free Trial
                    </button>
                  </Link>
                </>
              )}

              <button onClick={handleJoinMeetingClick} className="text-red-400">
                Have a Code Mee
              </button>
            </div>
            {MCError && (
              <p className="text-red-500 mb-5 -mt-10 font-medium">
                Invalid Meeting Code Or Meeting Not Exists!
              </p>
            )}

            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                High security
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                Fast and reliable
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image & Floating Cards */}
          <div className="relative flex justify-center items-center mt-12 lg:mt-0">
            {/* The Main Image */}
            <div className="relative z-0">
              <img
                src="/MenTyper.png"
                alt="User with phone"
                className="w-full max-w-md h-[500px] object-cover rounded-[3rem] object-top"
              />

              {/* Floating Card: Video Call */}
              <div className="absolute -left-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-gray-700">
                    Video call
                  </span>
                  {/* <Video size={16} className="text-gray-500" /> */}
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    +4
                  </div>
                </div>
              </div>

              {/* Floating Card: Audio/Waveform */}
              <div className="absolute -right-8 bottom-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/150?u=9"
                  alt="user"
                />
                <div className="flex gap-1 items-end h-6">
                  {[3, 6, 4, 8, 5, 7, 4, 6, 6, 4, 8, 5, 7, 4].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-orange-400 rounded-full"
                      style={{ height: `${h * 3}px` }}
                    ></div>
                  ))}
                </div>
                <div className="text-lg">🤣</div>
              </div>

              {/* Floating Card: Chat Message */}
              <div className="absolute -left-4 bottom-10 bg-orange-50/90 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-orange-100">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?u=12"
                  alt="user"
                />
                <div>
                  <div className="h-1.5 w-16 bg-[#0A1D3C] rounded-full mb-1.5"></div>
                  <p className="text-[10px] text-gray-500 font-medium italic">
                    i like him
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation for floating feel */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
