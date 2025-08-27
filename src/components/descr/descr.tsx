export default function Descr() {
  return (
    <>
      <div className="font-montserrat h-[90%] w-[90%] flex flex-col md:justify-around xl:scale-100 justify-between sm:scale-100 scale-90">
        <h1 className="text-gray-50 w-auto h-auto  xl:text-3xl  lg:text-2xl text-xl font-bold">
          Ethereum Accepted.
        </h1>
        <h1 className="text-gray-50 w-auto h-auto  xl:text-6xl lg:text-5xl text-4xl font-bold 
        ">
          Adventures Unlocked.
        </h1>
        <p className="text-gray-50 text-md ">
          <i>
            Turn your crypto into borderless journeys. Secure bookings, instant
            payments, and unforgettable destinations, powered by Ethereum.
          </i>
        </p>
        <button
          className="font-montserrat font-bold cursor-pointerbg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-white shadow-[0.3em_0.3em_0_#c96827] 
         hover:shadow-[-0.3em_-0.3em_0_#979695] bg-[#dba150]
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white w-[150px]"

        >
          <a href="#cardSection">
          Book now!</a>
        </button>
      </div>
    </>
  );
}
