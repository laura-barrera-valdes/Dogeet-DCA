
import { communityProduct } from "./CommunityProduct";
import { MyProfiledata } from "./MyProfiledata";
import { Screens } from "./Navigation";
import { petProduct } from "./PetProduct";
import { PetsData } from "./Petsdata";


export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
   screen: Screens;
   pets: petProduct[];
   community: communityProduct[],
   myprofiledata: MyProfiledata,
   petsdata: PetsData[],
};

export enum NavigationActions {
   "NAVIGATE" = "NAVIGATE",
}


export interface NavigatetAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens;
}

export enum getDataActions{
    "MYPROFILE" = "MYPROFILE",
    "PETS" = "PETS",
    "CHATS" = "CHATS",
    
}

export interface getMyprofileDataAction{
    action: getDataActions.MYPROFILE,
    payload: MyProfiledata
}

export interface getPetsDataAction{
    action: getDataActions.PETS,
    payload: PetsData[],
}

export enum petCardActions{
    "CHECK" = "CHECK",
    "GET" = "GET",
    "DELETE" = "DELETE",
}

export interface CheckPetAction{
    action: petCardActions.CHECK,
    payload: communityProduct,
}

export interface GetPetAction{
    action: petCardActions.GET,
    payload: communityProduct[],
}

export interface DeletePetAction{
    action: petCardActions.DELETE,
    payload: communityProduct[]
}



export type Actions = NavigatetAction | CheckPetAction | DeletePetAction | GetPetAction | getMyprofileDataAction | getPetsDataAction; 