import firebaseConfig from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";
import { MyProfiledata } from "../types/MyProfiledata";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const checkNewPet = async(pets: communityProduct) =>{
    try {
        const petdata = collection(db, 'users', 'cM5TppGyMJszotPFMhzL', 'community');
        await addDoc(petdata, pets)
        console.log("añadido a comunidad")
    } catch (error) {
        console.error(error);
    }
};



    const getPetCommunity = async () => {
        const querySnapShot = await getDocs(collection(db,'users', 'cM5TppGyMJszotPFMhzL', 'community' ));
        const communityArray: Array<communityProduct> = [];

        querySnapShot.forEach((doc)=>{
            const data: communityProduct = doc.data() as any;
            communityArray.push({...data});
        })

        return communityArray;
    };

    const getMyProfile =async () => {
        const querySnapShot = await getDocs(collection(db, 'users', 'cM5TppGyMJszotPFMhzL'));
        const myprofileArray: Array<MyProfiledata> = [];

        querySnapShot.forEach((doc)=>{
            const data: MyProfiledata = doc.data() as any;
            myprofileArray.push({...data})
        })

        return myprofileArray;
    }




const deletePet = async(petProduct:any) =>{
    try {
        await deleteDoc(petProduct);
        console.log('card deleted')
    } catch (error) {
        console.error(error);
    }
};



export default{
    checkNewPet,
    deletePet,
    getPetCommunity,
    getMyProfile
}