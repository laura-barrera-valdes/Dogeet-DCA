import firebaseConfig from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const checkNewPet = async(pets: Omit<petProduct, '("birth", "gender", "city")'>) =>{
    try {
        const petdata = collection(db, "users");
        await addDoc(petdata, pets)
        console.log("añadido a comunidad")
    } catch (error) {
        console.error(error);
    }
};


const getPetCommunity = async (pets:string) => {
    const querySnapShot = await getDocs(collection(db, "users"));
    const transformed: Array<communityProduct> = [];

    querySnapShot.forEach((doc)=>{
        const data: Omit<petProduct,'("birth", "gender", "city")'> = doc.data() as any;
        transformed.push({id: doc.id ...data});
    })

}

const deletePet = async(petProduct:any) =>{
    try {
        await deleteDoc(petProduct);
        console.log('card deleted')
    } catch (error) {
        console.error(error);
    }
}

export default{
    checkNewPet,
    deletePet,
}