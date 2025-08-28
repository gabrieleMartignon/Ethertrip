import ContentBox from "../contentbox/contentbox";
import BodyImg from "../bodyimgs/bodyimgs";
import Descr from "../descr/descr";

export default function MainSection() {
  return (
    <div
      id="main"
      className=" flex justify-center lg:h-[100vh] h-[80vh] lg:mb-[14vh] lg:mt-[20px] mt-[50px] "
    >
      <div className=" min-h-[400px] w-[83vw] xl:h-[70vh] flex m-auto justify-around items-center bg-blue-50 rounded-2xl shadow-md lg:h-[60vh]  h-[50vh] md:h-[40vh] md:flex-row flex-col p-2 ">
        <ContentBox>
          <Descr />
        </ContentBox>
        <BodyImg />
      </div>
    </div>
  );
}
