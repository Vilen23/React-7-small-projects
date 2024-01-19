import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil";
import { colorAtom } from "../../States/Project2States";

export function Project2(){
    const setColor = useSetRecoilState(colorAtom)
    return <div className=" min-h-screen flex justify-center items-end">
        <div className="h-[60px] w-[800px] shadow-lg flex justify-center rounded-lg items-center bg-white mb-10">
            <button className="bg-red-500 h-[30px] w-[70px] text-white font-bold rounded-lg shadow-black shadow-sm mr-[50px] opacity-85 hover:opacity-100 hover:scale-105" onClick={()=>{
                setColor("red")
            }}>Red</button>
            <button className="bg-blue-500 h-[30px] w-[70px] text-white font-bold rounded-lg shadow-black shadow-sm mr-[50px] opacity-85 hover:opacity-100 hover:scale-105" onClick={()=>{
                setColor("blue")
            }}>Blue</button>
            <button className="bg-green-500 h-[30px] w-[70px] text-white font-bold rounded-lg shadow-black shadow-sm mr-[50px] opacity-85 hover:opacity-100 hover:scale-105" onClick={()=>{
                setColor("greenyellow")
            }}>Green</button>
            <button className="bg-yellow-500 h-[30px] w-[70px] text-white font-bold rounded-lg shadow-black shadow-sm mr-[50px] opacity-85 hover:opacity-100 hover:scale-105" 
            onClick={()=>{
                setColor("yellow")
            }}>Yellow</button>
            <button className="bg-purple-500 h-[30px] w-[70px] text-white font-bold rounded-lg shadow-black shadow-sm mr-[50px] opacity-85 hover:opacity-100 hover:scale-105" onClick={()=>{
                setColor("purple")
            }}>Purple</button>
        </div>
    </div>
}