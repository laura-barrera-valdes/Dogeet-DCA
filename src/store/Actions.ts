import firebase from "../utils/firebase";
import { NavigatetAction, NavigationActions, DeletePetAction, CheckPetAction, petCardActions } from "../types/Store";
import { Screens } from "../types/Navigation";
import { petProduct } from "../types/PetProduct";


export const navigatet = (screen: Screens): NavigatetAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}

export const checkNewPet = async(): Promise<CheckPetAction> =>{
    const communitypets = await firebase.checkNewPet("Community");
    return{
        action: petCardActions.CHECK,
        payload: communitypets,
    }
}

export const deleteNewPet = ({payload}: Pick<DeletePetAction, "payload">): DeletePetAction =>{
    return{
        action: petCardActions.DELETE,
        payload
    };
};