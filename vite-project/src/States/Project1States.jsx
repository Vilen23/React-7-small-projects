import { atom, selector } from "recoil";

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

const locationAtom = atom({
    key:"locationAtom",
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

const detailsSelector  = selector({
    key:"detailsSelector",
    get:({get})=>({
        img:get(imgAtom),
        name:get(nameAtom),
        age:get(ageAtom),
        location:get(locationAtom),
        likes:get(likesAtom),
        followers:get(followersAtom),
        photos:get(photosAtom)
    })
}) 

export {
    imgAtom,
    nameAtom,
    ageAtom,
    locationAtom,
    likesAtom,
    followersAtom,
    photosAtom,
    detailsSelector
}
