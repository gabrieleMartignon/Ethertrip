import Card from "../card/card";
import { useState } from "react";

export default function TravelCardSection() {
  const [cardIndex, setCardIndex] = useState<number>(0);
  const visibleCard = 3;
  const cardProperties = [
    {
      id: 1,
      city: "Paris",
      country: "France",
      hotelName: "Four Seasons Hotel George V",
      fromDate: "1 September",
      toDate: "7 September",
      ethPrice: "0.01",
      imgSrc:
        "https://bafybeidqu7novp2oine3zx2b3qvttnwpr7mi3dffhrclpaajcddo7pzuje.ipfs.w3s.link/?filename=anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg",
    },
    {
      id: 2,
      city: "Rome",
      country: "Italy",
      hotelName: "Villa Agrippina Gran Meolià",
      fromDate: "8 September",
      toDate: "14 September",
      ethPrice:"0.12",
      imgSrc:
        "https://bafybeicmze5lavwth6mxh5a5e2it2x2hqe22fvoqjrtrqcvaxhnlty5rnq.ipfs.w3s.link/?filename=david-kohler-VFRTXGw1VjU-unsplash.jpg",
    },
    {
      id: 3,
      city: "Barcelona",
      country: "Spain",
      hotelName: "Hotel Astoria",
      fromDate: "25 August",
      toDate: "31 August",
      ethPrice: "0.52",
      imgSrc:
        "https://bafybeibp46mppsuwqmoa5fmind7ir2jkcqsrykkwvahatii7n2txqqavkm.ipfs.w3s.link/?filename=biel-morro-d0xjEv-WJQk-unsplash.jpg",
    },
    {
      id: 4,
      city: "Berlin",
      country: "Germany",
      hotelName: "Hotel sly Berlin",
      fromDate: "22 September",
      toDate: "28 September",
      ethPrice: "0.30",
      imgSrc:
        "https://bafybeicwfaytgxqmljkwpqvqn2x5nyqawaevcrd5vxoc4ayjma6v2zrwv4.ipfs.w3s.link/?filename=florian-wehde-1uWanmgkd5g-unsplash.jpg",
    },
    {
      id: 5,
      city: "NY",
      country: "USA",
      hotelName: "Hotel Marriot Marquis",
      fromDate: "1 September",
      toDate: "7 September",
      ethPrice: "1.2",
      imgSrc:
        "https://bafybeihjwjox3rmfxvhwhsip6hljnz7duxwpbnrjdkwznlfods4uzmt7fy.ipfs.w3s.link/?filename=luca-bravo-TaCk3NspYe0-unsplash.jpg",
    },
    {
      id: 6,
      city: "Warsaw",
      country: "Poland",
      hotelName: "Focus Hotel Premium Warszawa",
      fromDate: "25 August",
      toDate: "31 August",
      ethPrice: "0.97",
      imgSrc:
        "https://bafybeibr5dh4knayfrwwtqubmzxtcqtbtvemuuagvqp3xwbj7k2dr2z5re.ipfs.w3s.link/?filename=lasma-artmane-p6gxHYb43v0-unsplash.jpg",
    },
  ];

  const prevCard = () => {
    setCardIndex((i) => Math.max(i - 1, 0));
    
  };

  const nextCard = () => {
    setCardIndex((i) => Math.min(i + 1, cardProperties.length - visibleCard));
  
  };

  return (
    <>
      <div
        className="md:w-[75vw] w-[95vw] min-h-[500px] md:h-[70vh] lg:h-[80vh] h-[70vh] bg-blue-50 rounded-2xl shadow-2xl flex items-center m-auto flex-col md:p-3 p-1 sm:mt-[170px] mb-[50px]"
        id="cardSection"
      >
        <div className="h-[25%] md:w-[40%] w-[60%]">
          <h1 className="font-montserrat font-bold text-white lg:text-4xl text-2xl bg-blue-400 rounded-xl p-2 flex justify-center items-center text-center text-shadow-md flex-col">
           <i>  Your next adventure <br />
            awaits you</i>
          </h1>
        </div>
        <div className="h-[75%] w-[100%] flex justify-around items-center transition-all duration-300 md:p-5 p-1 rounded-2xl ">
          <button
            type="button"
            onClick={prevCard}
            className="h-[30px] w-[30px] rounded-4xl cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-2"
          >
            <img
              src="https://img.icons8.com/?size=100&id=39944&format=png&color=000000"
              alt=""
            />
          </button>
          {cardProperties
            .slice(cardIndex, cardIndex + visibleCard)
            .map((cardProp) => {
              return <Card {...cardProp} key={cardProp.id}/>;
            })}

          <button
            type="button"
            onClick={nextCard}
            className="h-[30px] w-[30px] rounded-4xl cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-2"
          >
            <img
              src="https://img.icons8.com/?size=100&id=39969&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}
