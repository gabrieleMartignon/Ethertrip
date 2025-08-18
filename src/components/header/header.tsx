import { AppKitButton } from "@reown/appkit/react";

export default function Header() {
  return (
    <>
      <div className="h-[10vh] w-[85vw] bg-[#f5e6d3] shadow-md z-10   top-[3vh] left-[50%] right-[50%] -translate-x-[50%] opacity-90 rounded-xl fixed">
        <div className="h-1/1 w-1/1 flex justify-around items-center ">
          <div className="flex  justify-around items-center">
            <img
              className="h-[75px]"
              src="https://bafybeibydkt5dvl5p7fllgasjm2c4z4bxmkcxryjvbgxkube7g7bspq2o4.ipfs.w3s.link/Logo_sito-removebg-preview%20(1).png"
              alt=""
            />
            <h1 className="font-montserrat text-3xl text-sky-600 font-bold ">
              Ethertrip
            </h1>
          </div>
          <div className="flex justify-between items-center h-1/1 w-1/2 ">
            <div className="flex justify-end items-center w-1/1 text-md font-bold opacity-80 cursor-pointer ">
             <a href="#cardSection"><button
                className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827]  hover:shadow-[-0.3em_-0.3em_0_#979695] 
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white"
              >
                
         Travel Deals
                
              </button></a>
              <button
                className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-black shadow-[0.3em_0.3em_0_#c96827] 
         hover:shadow-[-0.3em_-0.3em_0_#979695] 
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white"
              >
                About
              </button>
              <AppKitButton className="rounded-3xl bg-gradient-to-r from-blue-400 to-blue-800 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
