import { useRecoilSnapshot, useRecoilState, useSetRecoilState } from "recoil";
import { paraAtom, wordsAtom } from "../../States/Project3States";
import { useState } from "react";

export function Project3() {
  const [words, setWords] = useRecoilState(wordsAtom);
  const [para, setPara] = useRecoilState(paraAtom);
  const [Invalid, setInvalid] = useState(false);
  const HandleInputs = () => {
    const count = parseInt(words);
    if (isNaN(count) || count > 20 || count < 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
      generate(count);
    }
  };

  const generate = (number) => {
    const para =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellat animi odit laudantium quaerat sit provident veniam beatae illo nesciunt voluptatem, possimus eius ullam vero nisi perspiciatis? Fuga, quod voluptates.";
    const array = para.split(" ");
    const ans = [];
    for (let i = 0; i < number; i++) {
      ans.push(array[i]);
    }
    setPara(ans.join(" "));
  };
  return (
    <div className="min-h-screen flex items-center pt-20 flex-col">
      <div className="mb-4" style={{ height: '20px' }}> {/* Fixed height */}
        <div 
          className="text-red-500" 
          style={{ visibility: Invalid ? 'visible' : 'hidden' }}> {/* Conditional visibility */}
          Invalid Inputs
        </div>
      </div>
      <div className="h-[100px] w-[900px] flex flex-col items-center justify-center ">
        <p className="font-bold text-[30px] mb-4">Generate Paragraph</p>
        <div className="flex w-[700px] justify-center items-center ">
          <input
            type="text"
            placeholder="Enter a number (2 to 20)"
            className="w-[400px] h-[40px] pl-4  border-1 border border-gray-500 focus:outline-none"
            onChange={(e) => {
              setWords(e.target.value);
              setPara("")
            }}
          />
          <button
            className="bg-slate-800 text-white h-[35px] rounded-full font-bold w-[80px] ml-4"
            onClick={HandleInputs}
          >
            Generate
          </button>
        </div>
        <div className="text-lg mt-4 text-gray-600">{para}</div>
      </div>
    </div>
  );
}
