import { BrowserProvider, ethers } from "ethers";
import {
  useAppKitProvider,
  useAppKitAccount,
  useAppKit,
  useAppKitBalance,
} from "@reown/appkit/react";
import type { Eip1193Provider } from "ethers";
import { useEffect, useState, useRef } from "react";
import Alert from "../alert/alert";
import {useNavigate} from "react-router-dom"

export type cardProps = {
  id: number;
  city: string;
  country: string;
  hotelName: string;
  fromDate: string;
  toDate: string;
  ethPrice: string;
  imgSrc: string;
};

export default function Card (props: cardProps) {
  const { walletProvider } = useAppKitProvider("eip155");
  const { isConnected, status, address } = useAppKitAccount();
  const { open } = useAppKit();
  const [pendingPurchase, setPendingPurchase] = useState<boolean>(false);
  const { fetchBalance } = useAppKitBalance();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const alertRef = useRef<HTMLElement>(null);
  const navigate = useNavigate()
  

  async function purchaseTravel() {
    const provider = new BrowserProvider(walletProvider as Eip1193Provider);
    const signer = await provider.getSigner();
    const tx = await signer.sendTransaction({
      to: `0x8bb672761307d4f9F1257AD2AdD72a66147C934A`,
      value: ethers.parseEther(props.ethPrice),
    });
    console.log(tx.hash);
    navigate("/Bookings", {state: {
      address : address,
      hash : tx.hash,
      card :{
      id: props.id,
      city: props.city,
      country: props.country,
      hotelName: props.hotelName,
      fromDate: props.fromDate,
      toDate: props.toDate,
      ethPrice: props.ethPrice,
      imgSrc: props.imgSrc,

      }
    }})
   
  }

  useEffect(() => {
    if (status === "connected" && pendingPurchase) {
      purchaseTravel();
    }
    setPendingPurchase(false);
  }, [pendingPurchase, status]);

  useEffect(() => {
    if (showAlert && alertRef.current) {
      alertRef.current.classList.add("-translate-x-[110%]");
      setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.classList.remove("-translate-x-[110%]");
        }
      }, 4000);
    }
    setShowAlert(false);
  }, [showAlert]);

  return (
    <>
      <div className="bg-blue-50 flex items-center flex-col md:h-[100%] h-[80%] lg:w-[23%] sm:w-[30%] w-[60%] hover:scale-105 transition-transform duration-300 lg:scale-100 scale-90">
        <div className=" h-[50%] w-[100%]">
          <img
            src={props.imgSrc}
            alt=""
            className="rounded-t-2xl h-[100%] w-[100%]"
          />
        </div>
        <div className="bg-blue-400 rounded-b-2xl h-[50%] w-[100%] font-montserrat font-bold text-white flex flex-col justify-around items-center sm:text-xs p-2 text-shadow-md text-[7px]">
          <div className="flex justify-center items-center w-[90%] text-lg hover:scale-105 duration-300">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/marker--v1.png"
              alt="marker--v1"
            />
            <p className="lg:text-lg sm:text-[12px] text-[9px] w-[100%]">
              {props.city}, {props.country}
            </p>
          </div>
          <div className="flex items-center w-[90%] hover:scale-105 duration-300">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/5-star-hotel--v2.png"
              alt="5-star-hotel--v2"
              className="mr-1"
            />
            <p> {props.hotelName}</p>
          </div>
          <div className="flex items-center w-[90%] hover:scale-105 duration-300">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/calendar--v1.png"
              alt="calendar--v1"
              className="mr-1"
            />
            <p>{props.fromDate + " --> " + props.toDate}</p>
          </div>
          <button
            className="font-montserrat font-bold cursor-pointer align-middle bg-center py-1 px-3 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-white shadow-[0.3em_0.3em_0_#c96827] 
         hover:shadow-[-0.3em_-0.3em_0_#979695] bg-[#dba150]
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white flex justify-center items-center text-center text-shadow-md text-sm md:scale-100 scale-80 "
            onClick={async () => {
              if (isConnected) {
                const b = await fetchBalance();
                const currentBalance = b.data?.balance
                if (currentBalance !== undefined && props.ethPrice >= currentBalance) {
                  setShowAlert(true);
                } else {
                  setPendingPurchase(true);
                }
              } else {  
               open({ view: "Connect" })
                
              }
            }}
          >
            {props.ethPrice}{" "}
            <img
              src="https://img.icons8.com/?size=100&id=gfDkEex0xRtZ&format=png&color=000000"
              alt="Ethereum Symbol"
              height="25"
              width="25"
            />
          </button>
        </div>
      </div>
      <Alert
        ref={alertRef}
        error="Insufficient Funds"
        message="Your wallet does't have the necessary Eth to complete the transaction"
      />
    </>
  );
}
