import ContentBox from "../contentbox/contentbox"
import BodyImg from "../bodyimg/bodyimg"

export default function BodyContent () {

    return (
        <div className="flex justify-center align-middle h-[89vh]">
        <div className="w-[83vw] h-[70vh]  flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md">
        <ContentBox/>
        <BodyImg/>
        </div>
        </div>
    )
}