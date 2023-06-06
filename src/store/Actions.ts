import firebase from "../utils/firebase";
import {
  NavigatetAction,
  NavigationActions,
  DeletePetAction,
  CheckPetAction,
  GetPetAction,
  petCardActions,
  getMyprofileDataAction,
  getDataActions,
  saveDataActions,
  saveMyDataAction
} from "../types/Store";
import { Screens } from "../types/Navigation";
import { petProduct } from "../types/PetProduct";
import { communityProduct } from "../types/CommunityProduct";
import { MyProfiledata } from "../types/MyProfiledata";

export const navigatet = (screen: Screens): NavigatetAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

export const checkNewPet = ({
  payload,
}: Pick<CheckPetAction, "payload">): CheckPetAction => {
  return {
    action: petCardActions.CHECK,
    payload,
  };
};

export const saveDataProfile = ({payload}: Pick<saveMyDataAction, "payload"> ): saveMyDataAction=>{
    return{
        action: saveDataActions.SAVE,
        payload
    }
}

export const getNewPetCommunity = async (): Promise<GetPetAction> => {
  const petcommunity = await firebase.getPetCommunity();
  return {
    action: petCardActions.GET,
    payload: petcommunity,
  };
};

export const getMyProfileData = async (): Promise<getMyprofileDataAction> => {
  const myprofiledata = await firebase.getMyProfile();
  return {
    action: getDataActions.MYPROFILE,
    payload: myprofiledata,
  };
};

export const deleteNewPet = ({
  payload,
}: Pick<DeletePetAction, "payload">): DeletePetAction => {
  return {
    action: petCardActions.DELETE,
    payload,
  };
};
