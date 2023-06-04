import firebaseConfig from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc} from "firebase/firestore";
import { petProduct } from "../types/PetProduct";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const checkNewPet = async(col: string) =>{
    const firebasData = await getDocs(collection(db, col));
    const petsArray: Array<petProduct> = [];

    firebasData.forEach((doc) =>{
        const data: Omit<petProduct, "id"> = doc.data() as any;
        petsArray.push({...data});
    })

    return petsArray;
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