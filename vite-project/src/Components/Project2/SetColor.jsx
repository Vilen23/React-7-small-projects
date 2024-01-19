import { useRecoilValue } from "recoil";
import { Project2 } from "./Project2";
import { colorAtom } from "../../States/Project2States";

export function SetColor(){
    const color = useRecoilValue(colorAtom);
    const background = {
        backgroundColor: color
    }
    return <div style={background}>
        <Project2/>
    </div>
}