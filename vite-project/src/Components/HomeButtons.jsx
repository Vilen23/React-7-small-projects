import { useNavigate } from "react-router-dom"

export function HomeButtons(){
    const navigate = useNavigate();
    return <div className="flex flex-col py-4 items-center justify-center min-h-screen">
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg"
        onClick={()=>{
            navigate("/Project1")
        }}>Project 1</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 2</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 3</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 4</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 5</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 6</button>
        <button className="bg-slate-700 w-[190px] h-[60px] text-[30px] text-white font-bold rounded-full mb-4 hover:drop-shadow-lg">Project 7</button>
    </div>
}