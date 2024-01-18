import { atom } from "recoil";

const imgAtom = atom({
    key:"imgAtom",
    default:""
})

const nameAtom = atom({
    key:"nameAtom",
    default:""
})

const ageAtom = atom({
    key:"ageAtom",
    default:0
})

const locatuionAtom = atom({
    key:"locatuionAtom",
    default:""
})

const followersAtom = atom({
    key:"followersAtom",
    default:0
})

const likesAtom = atom({
    key:"likesAtom",
    default:0
})

const photosAtom = atom({
    key:"photosAtom",
    default:0
})

export {
    imgAtom,
    nameAtom,
    ageAtom,
    likesAtom,
    followersAtom,
    photosAtom
}
