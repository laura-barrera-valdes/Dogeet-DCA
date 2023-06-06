import firebase from "../utils/firebase";
import { NavigatetAction, NavigationActions, DeletePetAction, CheckPetAction, GetPetAction, petCardActions, getMyprofileDataAction, getDataActions, getPetsDataAction, getChatsDataAction } from "../types/Store";
import { Screens } from "../types/Navigation";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";


export const navigatet = (screen: Screens): NavigatetAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}

export const checkNewPet = ({payload}: Pick<CheckPetAction, "payload"> ): CheckPetAction=>{
    return{
        action: petCardActions.CHECK,
        payload
    }
}

export const getNewPetCommunity = async (): Promise<GetPetAction> => {
    const petcommunity = await firebase.getPetCommunity();
    return{
        action: petCardActions.GET,
        payload: petcommunity
    }
}

export const getChatsData = async (): Promise<getChatsDataAction> => {
    const chatsdata = await firebase.getChatsData();
    return{
        action: getDataActions.CHATS,
        payload: chatsdata
    }
}

export const getMyProfileData =async (): Promise<getMyprofileDataAction> => {
    const myprofiledata = await firebase.getMyProfile();
    return{
        action: getDataActions.MYPROFILE,
        payload: myprofiledata
    }
}

export const getPetsData = async (): Promise<getPetsDataAction> => {
    const petsdatastate = await firebase.getPets();
    return{
        action: getDataActions.PETS,
        payload: petsdatastate
    }
}



export const deleteNewPet = ({payload}: Pick<DeletePetAction, "payload">): DeletePetAction =>{
    return{
        action: petCardActions.DELETE,
        payload
    };
};