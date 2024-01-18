import { useRecoilValue } from "recoil";
import { detailsSelector } from "../../States/Project1States";

export function ShowCard() {
  const details = useRecoilValue(detailsSelector);
  return (
    <div className=" min-w-screen min-h-screen flex flex-col align-middle justify-center items-center">
      <div className="bg-slate-100 flex flex-col justify-center align-middle items-center w-[400px] h-full rounded-xl text-center">
        <div className="bg-slate-700 w-full h-[140px] rounded-t-xl"></div>
        <div className="rounded-full h-[150px] w-[150px] overflow-hidden shadow-2xl relative top-[-75px]">
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${details.img})` }}
          ></div>
        </div>
        <div className="relative top-[-50px] w-full flex flex-col align-center items-center justify-center">
          <div className=" flex  h-[30px]   ">
            <h2 className="items-center text-2xl font-extrabold pr-3">
              {details.name}
            </h2>
            <p className="items-center text-xl text-gray-700 mt-[3px]">
              {details.age}
            </p>
          </div>{" "}
          <p className="text-gray-700 mt-2">{details.location}</p>
        </div>
        <hr className="relative top-[-20px] w-[300px] border-1 border-slate-700" />
        <div className="h-[80px] w-full text-black flex items-center justify-around px-6">
          <div>
            <p className="font-extrabold">{details.followers}K</p>
            <p className="text-gray-800 text-[11px]">Followers</p>
          </div>
          <div>
            <p className="font-extrabold">{details.likes}K</p>
            <p className="text-gray-800 text-[11px]">Likes</p>
          </div>
          <div>
            <p className="font-extrabold">{details.photos}</p>
            <p className="text-gray-800 text-[11px]">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
