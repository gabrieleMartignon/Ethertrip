export default function Descr() {
  return (
    <>
      <div className="font-montserrat h-[90%] w-[90%] flex flex-col  justify-around">
        <h1 className="text-gray-50 w-auto h-auto  text-3xl font-bold">
          Ethereum Accepted.
        </h1>
        <h1 className="text-gray-50 w-auto h-auto  text-6xl font-bold">
          Adventures Unlocked.
        </h1>
        <p className="text-gray-50">
          <i>
            Turn your crypto into borderless journeys. Secure bookings, instant
            payments, and unforgettable destinations, powered by Ethereum.
          </i>
        </p>
        <button
          className="font-montserrat font-bold cursor-pointer align-middle bg-center py-2 px-4 transition-all duration-300 rounded-lg mr-5 border-[#979695] text-white shadow-[0.3em_0.3em_0_#c96827] 
         hover:shadow-[-0.3em_-0.3em_0_#979695] bg-[#dba150]
         hover:bg-[#c96827] hover:border-[#c96827] hover:text-white w-[30%]"

        >
          <a href="#cardSection">
          Book now!</a>
        </button>
      </div>
    </>
  );
}
