import {useRecoilValue, useSetRecoilState } from "recoil";
import { ageAtom, detailsSelector, followersAtom, imgAtom, likesAtom, locationAtom, nameAtom, photosAtom } from "../../States/Project1States";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export function Project1() {
  const navigate = useNavigate();
  const setName = useSetRecoilState(nameAtom);
  const setImage = useSetRecoilState(imgAtom);
  const setLocation = useSetRecoilState(locationAtom);
  const setAge = useSetRecoilState(ageAtom);
  const setFollowers = useSetRecoilState(followersAtom);
  const setLikes = useSetRecoilState(likesAtom);
  const setPhotos = useSetRecoilState(photosAtom);
  const details = useRecoilValue(detailsSelector);

  useEffect(()=>{
    setName('')
    setImage('')
    setLocation('')
    setAge(0)
    setFollowers(0)
    setPhotos(0)
    setLikes(0)
  },[])

  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  const handleNavigate = () => {
    if (
      details.name !== "" ||
      details.img !== "" ||
      details.location !== "" ||
      details.age !== 0 ||
      details.followers !== 0 ||
      details.likes !== 0 ||
      details.photos !== 0
    ){
      navigate("/ShowCard")
    }else {
      // Display a message indicating that input fields are required
      setShowRequiredMessage(true);
    }
  };
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center">
      {showRequiredMessage && (
        <div className="bg-inherit  border-red-500 p-5 text-red-500">
          Input fields are required. Please fill in at least one field before navigating.
        </div>
      )}
      <div className="flex flex-col justify-around items-center bg-slate-700 h-[420px] w-[500px] p-4 px-6 rounded-[40px] shadow-lg shadow-black text-white" >
        <input type="link" placeholder="Imagelink" className="w-full h-[45px] pl-4 mt-[20px] bg-inherit border-b-2 focus:caret-white focus:outline-none" 
        onChange={(e)=>{
          setImage(e.target.value)
        }}/>
        <div className="flex flex-row justify-between w-full ">
          <input type="text" placeholder="Name" className="h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" 
          onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <input type="number" placeholder="Age" className="h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none"
          onChange={(e)=>{
            setAge(e.target.value)
          }}/>
        </div>
        <input type="text" placeholder="Location" className="h-[45px] w-full pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none"
        onChange={(e)=>{
          setLocation(e.target.value)
        }}/>
        <div className="flex flex-row justify-between w-full">
          <input type="number" placeholder="Followers" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" 
          onChange={(e)=>{
            setFollowers(e.target.value)
          }} />
          <input type="number" placeholder="Likes" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" 
          onChange={(e)=>{
            setLikes(e.target.value)
          }}/>
          <input type="number" placeholder="Photos" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" 
          onChange={(e)=>{
            setPhotos(e.target.value)
          }} />
        </div>
        <button className="text-black bg-slate-200 w-[100px] h-10 rounded-full font-semibold text-lg  hover:shadow-black hover:shadow-lg " 
        onClick={
          handleNavigate
        }>See Card</button>
      </div>
    </div>
  );
}
