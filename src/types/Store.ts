import { communityProduct } from "./CommunityProduct";
import { MyProfiledata } from "./MyProfiledata";
import { Screens } from "./Navigation";
import { petProduct } from "./PetProduct";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: Screens;
  pets: petProduct[];
  community: communityProduct[];
  myprofiledata: MyProfiledata;
};

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface NavigatetAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export enum saveDataActions{
    "SAVE" = "SAVE",
}

export interface saveMyDataAction{
    action: saveDataActions.SAVE,
    payload: MyProfiledata;
}

export enum getDataActions {
  "MYPROFILE" = "MYPROFILE",
  "COMMUNITY" = "COMMUNITY",
  "CHATS" = "CHATS",
}

export interface getMyprofileDataAction {
  action: getDataActions.MYPROFILE;
  payload: MyProfiledata[];
}

export enum petCardActions {
  "CHECK" = "CHECK",
  "GET" = "GET",
  "DELETE" = "DELETE",
}

export interface CheckPetAction {
  action: petCardActions.CHECK;
  payload: communityProduct;
}

export interface GetPetAction {
  action: petCardActions.GET;
  payload: communityProduct[];
}

export interface DeletePetAction {
  action: petCardActions.DELETE;
  payload: communityProduct[];
}

export type Actions =
  | NavigatetAction
  | CheckPetAction
  | DeletePetAction
  | GetPetAction
  | getMyprofileDataAction
  | saveMyDataAction;
