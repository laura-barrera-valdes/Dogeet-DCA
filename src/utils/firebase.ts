import firebaseConfig from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, getDoc} from "firebase/firestore";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";
import { MyProfiledata } from "../types/MyProfiledata";
import { PetsData } from "../types/Petsdata";

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

//método para enviar la data al firestore
const saveData = async(myprofiledata: MyProfiledata) =>{
    try {
        const mydata = collection(db, 'users');
        await addDoc(mydata, myprofiledata)
        console.log("suario registrado")
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

    const getMyProfile = async () => {
        const docRef = doc(db, "users", "cM5TppGyMJszotPFMhzL" );
        const docProfile = await getDoc(docRef)

            if (docProfile.exists()) {
                return docProfile.data()
            } else {
                console.log("No document")
            }
        
    };

    const getPets = async () => {
        const querySnapShot = await getDocs(collection(db,'Pets'));
        const PetsArray: Array<PetsData> = [];

        querySnapShot.forEach((doc)=>{
            const data: PetsData = doc.data() as any;
            PetsArray.push({...data});
        })

        return PetsArray;
    };
    




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
    getMyProfile,
    getPets,
    saveData
}