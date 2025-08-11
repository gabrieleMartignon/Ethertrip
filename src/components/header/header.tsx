import { AppKitButton } from "@reown/appkit/react";

export default function Header() {
  return (
    <>
      <div className="h-[11vh] bg-amber-100 flex flex-col ">
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
              <button className="font-montserrat font-bold cursor-pointer hover:bg-neutral-200 align-middle bg-center py-3 px-6 transition-all duration-300 rounded-lg">
                Travel Deals
              </button>
              <button className="font-montserrat font-bold cursor-pointer hover:bg-neutral-200 align-middle bg-center py-3 px-6 transition-all duration-300 rounded-lg mr-5">
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
