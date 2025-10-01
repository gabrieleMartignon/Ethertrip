import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { cardProps } from "../components/card/card";
import { useAppKitAccount } from "@reown/appkit/react";

type bookingType = {
  hash: string | null;
  card: cardProps | null;
  address: string | null;
};

export default function Bookings() {
  const [bookings, setBookings] = useState<bookingType[]>([]);
  let location = useLocation();
  const { address } = useAppKitAccount();

  const newBooking: bookingType | null = location.state
    ? {
        hash: location.state?.hash ?? null,
        card: location.state?.card ?? null,
        address: location.state?.address ?? null,
      }
    : null;

  // 1. when address change load bookings form localStorage
  useEffect(() => {
    if (address) {
      const stored = localStorage.getItem(address);
      if (stored) {
        setBookings(JSON.parse(stored));
      } else {
        setBookings([]);
      }
    }
  }, [address]);

  // 2. if new booking occur, add and save on localStorag
  useEffect(() => {
    if (address && newBooking) {
      setBookings((prev) => {
        const updated = [...prev, newBooking];
        localStorage.setItem(address, JSON.stringify(updated));
        location.state = null;
        return updated;
      });
    }
    if (address === null || address === undefined) {
      setBookings([]);
    }
  }, [address]);

  return (
    <>
      <Header />
      <div className="w-[83vw] h-[auto] min-h-[63vh] flex m-auto items-center bg-blue-50 rounded-2xl shadow-md mt-[17vh] font-montserrat text-justify font-semibold flex-col ">
        <div className="p-3 flex justify-center items-center bg-blue-400 rounded-xl text-white text-3xl text-shadow-md mt-[5vh] mb-[2vh] ">
          <h1>Your Bookings</h1>
        </div>
        {bookings.length === 0 ? (
          <p className="text-gray-500">No booking recorded</p>
        ) : (
          <>
            <h1 className="text-xs text-center">
              Bookings for address: {address}
            </h1>
          </>
        )}
        <div className="w-[100%] flex md:flex-row flex-col h-[100%] gap-4 p-5 text-sm justify-center flex-wrap">
          {bookings.map((booking, i) => (
            <div
              key={i}
              className="flex md:h-[45%] md:w-[50%] rounded-xl p-2 "
            >
              <div className=" text-[10px] md:text-xs flex flex-col w-[100%] justify-around border-3 border-white shadow-2xl rounded-2xl  text-gray-700 p-2 ">
                <h1 className="flex mb-1">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/ios/50/marker--v1.png"
                    alt="marker--v1"
                  />
                  {booking.card?.city}
                </h1>
                <h1 className="flex mb-1">
                  
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/ios/50/calendar--v1.png"
                    alt="calendar--v1"
                  />
                  From {booking.card?.fromDate} to {booking.card?.toDate}
                </h1>
                <h1 className="flex mb-1">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/ios/50/5-star-hotel--v2.png"
                    alt="5-star-hotel--v2"
                  />
                  {booking.card?.hotelName}
                </h1>
                <h1 className="flex"><img width="18" height="18" src="https://img.icons8.com/ios/50/ethereum.png" alt="ethereum"/>
                  <a
                    href={
                      booking.hash
                        ? `https://etherscan.io/tx/${booking.hash}`
                        : "#"
                    }
                    className="underline hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to check the transaction!
                  </a>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
