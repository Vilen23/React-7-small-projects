import { atom, selector } from "recoil";

const paraAtom = atom({
    key:"paraAtom",
    default:""
})

const wordsAtom  = atom({
    key:"wordsAtom",
    default:0
})



export{
    paraAtom,
    wordsAtom
}