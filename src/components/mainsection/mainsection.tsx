import ContentBox from "../contentbox/contentbox";
import BodyImg from "../mainsectionimgs/mainsectionimgs";
import Descr from "../descr/descr";

export default function MainSection() {
  return (
    <div
      id="main"
      className="flex justify-center align-middle h-[100vh] pt-[11vh] mb-[17vh]"
    >
      <div className="w-[83vw] h-[70vh] flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md">
        <ContentBox>
          <Descr />
        </ContentBox>
        <BodyImg />
      </div>
    </div>
  );
}
