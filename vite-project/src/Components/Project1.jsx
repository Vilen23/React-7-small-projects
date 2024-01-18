export function Project1() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-around items-center bg-slate-700 h-[420px] w-[500px] p-4 px-6 rounded-[40px] shadow-lg shadow-black text-white" >
        <input type="link" placeholder="Imagelink" className="w-full h-[45px] pl-4 mt-[20px] bg-inherit border-b-2 focus:caret-white focus:outline-none" />
        <div className="flex flex-row justify-between w-full ">
          <input type="text" placeholder="Name" className="h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" />
          <input type="number" placeholder="Age" className="h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none"/>
        </div>
        <input type="text" placeholder="Location" className="h-[45px] w-full pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none"/>
        <div className="flex flex-row justify-between w-full">
          <input type="number" placeholder="Followers" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" />
          <input type="number" placeholder="Likes" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" />
          <input type="number" placeholder="Photos" className="w-[120px] h-[45px] pl-4 bg-inherit border-b-2 focus:caret-white focus:outline-none" />
        </div>
        <button className="text-black bg-slate-200 w-[100px] h-10 rounded-full font-semibold text-lg  hover:shadow-black hover:shadow-lg ">See Card</button>
      </div>
    </div>
  );
}
