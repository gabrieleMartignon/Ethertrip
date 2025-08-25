import { AppKitButton } from "@reown/appkit/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  function handleMenuClick () {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }

  return (
    <>
      <div className="h-[10vh] sm:w-[85vw] bg-[#f5e6d3] shadow-md z-10 top-[3vh] left-[50%] right-[50%] -translate-x-[50%] opacity-90 rounded-xl fixed w-[92vw]">
        <div className="h-1/1 w-1/1 flex justify-around items-center ">
          <div className="flex  justify-around items-center ">
            <img
              className="h-[75px]"
              src="https://bafybeibydkt5dvl5p7fllgasjm2c4z4bxmkcxryjvbgxkube7g7bspq2o4.ipfs.w3s.link/Logo_sito-removebg-preview%20(1).png"
              alt=""
            />
            <h1 className="font-montserrat text-3xl text-sky-600 font-bold xl:block lg:block md:block hidden">
              Ethertrip
            </h1>
          </div>
          <div className="flex justify-between items-center h-1/1 xl:w-1/2 md:w-[80%%] ">
            <div className="flex justify-end items-center w-1/1 text-md font-bold opacity-80 cursor-pointer ">
              <a href="#main">
                <button
                  className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827] 
            hover:shadow-[-0.3em_-0.3em_0_#979695] 
            hover:bg-[#c96827] hover:border-[#c96827] hover:text-white hidden lg:block xl:block"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </a>
              <a href="#cardSection">
                <button
                  className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827]  hover:shadow-[-0.3em_-0.3em_0_#979695] 
             hover:bg-[#c96827] hover:border-[#c96827] hover:text-white hidden lg:block xl:block
             "
                 onClick={() => navigate("/")}
                >
                  Travel Deals
                </button>
              </a>
              <button
                className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827] 
                  hover:shadow-[-0.3em_-0.3em_0_#979695] 
                       hover:bg-[#c96827] hover:border-[#c96827] hover:text-white hidden lg:block xl:block"
                onClick={() => navigate("/About")}
              >
                About
              </button>
              <div className="menu" data-placement="bottom">
                <button
                  onClick={handleMenuClick}
                  className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827] 
                  hover:shadow-[-0.3em_-0.3em_0_#979695] 
                       hover:bg-[#c96827] hover:border-[#c96827] hover:text-white lg:hidden xl:hidden scale-90"
                >
                  Menu
                </button>
               { toggleMenu ? 
                <div
                  className=" mt-2 border border-slate-200 rounded-lg shadow-xl absolute p-1 z-10 font-montserrat bg-[#f5e6d3] lg:hidden "
                  onClick={handleMenuClick}
                >
                  <a
                    onClick={() => navigate("/")}
                    className="block px-4 py-2 text-sm  rounded-md"
                  >
                    Home
                  </a>
                  <a
                    href="#cardSection"
                    onClick={() => navigate("/")}
                    className="block px-4 py-2 text-sm  rounded-md"
                  >
                  Travel Deals
                  </a>
                  <a
                    onClick={() => navigate("/About")}
                    className="block px-4 py-2 text-sm  rounded-md"
                  >
                    About
                  </a>
                </div>: " "}
              </div>
              <AppKitButton
                className="rounded-3xl mt-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-2xl min-w-[100px]"
                size="sm"
                namespace="eip155"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
