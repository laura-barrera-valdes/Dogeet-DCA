import firebaseConfig from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, getDoc} from "firebase/firestore";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";
import { MyProfiledata } from "../types/MyProfiledata";
import { PetsData } from "../types/Petsdata";
import { ChatlistData } from "../types/ChatlistData";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
  } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const registerUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

    const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      alert("welcome " + userCredential.user.email);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

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

    const getChatsData = async () => {
        const querySnapShot = await getDocs(collection(db,'Chatlist'));
        const chatsArray: Array<ChatlistData> = [];

        querySnapShot.forEach((doc)=>{
            const data: ChatlistData = doc.data() as any;
            chatsArray.push({...data});
        })

        return chatsArray;
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
    saveData,
    getChatsData,
    registerUser,
    loginUser
}