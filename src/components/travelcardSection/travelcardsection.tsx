import Card from "../card/card";

export default function TravelCardSection() {
  return (
    <>
      <div className="w-[75vw] h-[80vh] bg-blue-50 rounded-2xl shadow-2xl flex items-center m-auto flex-col p-3 ">
        <div className="h-[25%] w-[40%]">
          <h1 className="font-montserrat font-bold text-white text-4xl bg-blue-400 rounded-xl p-2 flex justify-center items-center text-center text-shadow-md ">
            Your next adventure <br />
            awaits you
          </h1>
        </div>
        <div className="h-[75%] w-[100%] flex justify-around">
          <Card
            city="Paris"
            country="France"
            hotelName="Four Seasons Hotel George V"
            fromDate="1 September"
            toDate="7 September"
            ethPrice={0.76}
          ></Card>
          <Card
            city="Rome"
            country="Italy"
            hotelName="Villa Agrippina Gran Meolià"
            fromDate="8 September"
            toDate="14 September"
            ethPrice={0.82}
          ></Card>
          <Card
            city="Barcelona"
            country="Spain"
            hotelName="Hotel Astoria"
            fromDate="25 August"
            toDate="31 August"
            ethPrice={0.64}
          ></Card>
        </div>
      </div>
    </>
  );
}
