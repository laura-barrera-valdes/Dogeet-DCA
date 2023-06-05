
import { communityProduct } from "./CommunityProduct";
import { Screens } from "./Navigation";
import { petProduct } from "./PetProduct";


export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
   screen: Screens;
   pets: petProduct[];
   community: communityProduct[],
};

export enum NavigationActions {
   "NAVIGATE" = "NAVIGATE",
}


export interface NavigatetAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens;
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



export type Actions = NavigatetAction | CheckPetAction | DeletePetAction | GetPetAction; 