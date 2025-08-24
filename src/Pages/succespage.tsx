import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import { useLocation } from "react-router-dom"

export default function SuccessPage () {
 const location = useLocation()
 const hash = location.state.hash
 const card = location.state.card
 console.log(hash)


    return (
        <>
       <Header/>
       <div className="w-[83vw] h-[65vh] flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md mt-[17vh] font-montserrat text-justify font-semibold flex-col ">
        <div className=" p-3 flex justify-center items-center bg-blue-400 rounded-xl text-white text-3xl text-shadow-md">
            <h1>Your Booking</h1>
        </div>
        <div className="w-[100%]  flex justify-evenly items-center p-10 ">
        <div className="h-[100%]">
            <img src={card.imgSrc} alt="Booking img" className="w-[300px] h-[300px] rounded-xl"  />
        </div>
        <div className="h-[100%]  p-3 rounded-xl text-lg ">
            <h1>{card.city + ", " + card.country}</h1>
            <h1>You will stay in {card.hotelName}</h1>
            <h1>From {card.fromDate + " to " + card.toDate}</h1>
            <h1><a href={"https://sepolia.ethplorer.io/tx/"+hash} className="underline hover:" target="_blank">Check the transaction here!</a></h1>
            
        </div>
        </div>
        </div>
       <Footer/>
        </>
    )
}