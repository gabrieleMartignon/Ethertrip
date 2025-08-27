import ContentBox from "../contentbox/contentbox";
import BodyImg from "../bodyimgs/bodyimgs";
import Descr from "../descr/descr";

export default function MainSection() {
  return (
    <div
      id="main"
      className="flex justify-center lg:h-[100vh] h-[90vh] md:pt-[11vh] md:mb-[14vh] "
    >
      <div className="w-[83vw] xl:h-[70vh] flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md lg:h-[60vh]  h-[50vh] md:flex-row flex-col p-2 ">
        <ContentBox>
          <Descr />
        </ContentBox>
        <BodyImg />
      </div>
    </div>
  );
}
