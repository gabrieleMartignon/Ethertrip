type cardProps = {
  id: number;
  city: string;
  country: string;
  hotelName: string;
  fromDate: string;
  toDate: string;
  ethPrice: number;
  imgSrc: string;
};

export default function Card(props: cardProps) {
  return (
    <div className="bg-blue-50 flex items-center  flex-col h-[100%] w-[23%] hover:scale-105 transition-transform duration-300">
      <div className=" h-[50%] w-[100%]">
        <img
          src={props.imgSrc}
          alt=""
          className="rounded-t-2xl h-[100%] w-[100%]"
        />
      </div>
      <div className="bg-blue-400 rounded-b-2xl h-[50%] w-[100%] font-montserrat font-bold text-white flex flex-col justify-around items-center text-xs p-2 text-shadow-md">
        <div className="flex  justify-center items-center w-[90%] text-lg hover:scale-105 transition-transform duration-300">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/marker--v1.png"
            alt="marker--v1"
          />
          <p>
            {props.city}, {props.country}{" "}
          </p>
        </div>
        <div className="flex items-center w-[90%] hover:scale-105 transition-transform duration-300">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/5-star-hotel--v2.png"
            alt="5-star-hotel--v2"
            className="mr-1"
          />
          <p> {props.hotelName}</p>
        </div>
        <div className="flex  items-center w-[90%] hover:scale-105 transition-transform duration-300">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/calendar--v1.png"
            alt="calendar--v1"
            className="mr-1"
          />
          <p>{props.fromDate + " --> " + props.toDate}</p>
        </div>
        <button
          className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-white shadow-[0.3em_0.3em_0_#c96827] 
         hover:shadow-[-0.3em_-0.3em_0_#979695] bg-[#dba150]
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white  flex justify-center items-center text-center text-shadow-md text-sm"
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
  );
}
