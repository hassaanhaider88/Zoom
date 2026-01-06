// import React from "react";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// export default function LandingPage() {
//   const router = useNavigate();

//   const { handleUserGetByToken, userData, handleLogin } =
//     React.useContext(AuthContext);
//   React.useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       handleUserGetByToken(token);
//     }
//     console.log(userData);
//   }, []);

//   console.log(userData);

//   return (
//     // <div className="landingPageContainer md:px-10 px-4">
//     //   <nav>
//     //     <div className="navHeader">
//     //       <h2>CallMe</h2>
//     //     </div>
//     //     {userData.username == null ? (
//     //       <div className="navlist">
//     //         <p
//     //           onClick={() => {
//     //             router("/guest");
//     //           }}
//     //         >
//     //           Join as Guest
//     //         </p>
//     //         <p
//     //           onClick={() => {
//     //             router("/auth");
//     //           }}
//     //         >
//     //           Register
//     //         </p>
//     //         <div
//     //           onClick={() => {
//     //             router("/auth");
//     //           }}
//     //           role="button"
//     //         >
//     //           <p>Login</p>
//     //         </div>
//     //       </div>
//     //     ) : (
//     //       <div className="navlist">
//     //         <Link to="/home">
//     //           <svg
//     //             stroke="currentColor"
//     //             fill="currentColor"
//     //             stroke-width="0"
//     //             viewBox="0 0 496 512"
//     //             height="40px"
//     //             width="40px"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             class="copy-svg-injected"
//     //           >
//     //             <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
//     //           </svg>
//     //         </Link>
//     //       </div>
//     //     )}
//     //   </nav>

//     //   <div className="landingMainContainer px-10">
//     //     <div>
//     //       <h1>
//     //         <span style={{ color: "#FF9839" }}>Connect</span> with your loved
//     //         Ones
//     //       </h1>

//     //       <p>
//     //         Cover a distance by <span style={{ color: "#FF9839" }}>CallMe</span>
//     //       </p>
//     //       <div>
//     //         <Link
//     //           className="py-2 px-5 bg-[#FF9839] mt-3 block w-fit rounded-3xl "
//     //           to={userData.username == null ? "/auth" : "/home"}
//     //         >
//     //           Get Started
//     //         </Link>
//     //       </div>
//     //     </div>
//     //     <div>
//     //       <img src="/mobile.png" alt="" />
//     //     </div>
//     //   </div>
//     // </div>
//     <>
//       <header className="bg-white">
//         <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
//           <div className="text-2xl font-bold text-gray-900">Lumeo</div>

//           <div className="flex items-center gap-8">
//             <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//               Products
//             </a>
//             <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//               We're Hiring!
//             </a>
//             <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//               community
//             </a>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">
//               Sign Up
//             </button>
//             <button className="bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-950">
//               Sign In
//             </button>
//           </div>
//         </nav>
//       </header>
//       <div className="space-y-8">
//         <div className="space-y-4">
//           <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//             Seamless Video Communication, Anytime,{" "}
//             <span className="relative">
//               Anywhere!
//               <span className="absolute bottom-2 left-0 right-0 bg-orange-200 h-4 -z-10 rounded-sm"></span>
//             </span>
//           </h1>

//           <p className="text-gray-600 text-base leading-relaxed max-w-md">
//             Stay connected like never before with high-quality video calls,
//             crystal-clear audio, and effortless collaboration.
//           </p>
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-950 transition">
//             Start Free Trial
//           </button>
//           <a
//             href="#"
//             className="text-gray-700 hover:text-gray-900 text-sm font-medium underline"
//           >
//             Get a live demo
//           </a>
//         </div>

//         <div className="flex items-center gap-6 text-sm text-gray-700">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//             High security
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//             Fast and reliable
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LandingPage = () => {
  const router = useNavigate();

  const { handleUserGetByToken, userData } =
    React.useContext(AuthContext);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleUserGetByToken(token);
    }
    console.log(userData);
  }, []);

  console.log(userData);
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
            <h2 className="text-6xl font-extrabold text-[#0A1D3C] leading-[1.15] mb-6">
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
                <Link to="/auth">
                  <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Start Free Trial
                  </button>
                </Link>
              )}
            </div>

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
