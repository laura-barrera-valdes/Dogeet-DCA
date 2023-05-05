export type Observer = ({ render: () => void } & HTMLElement);

export enum Screens{
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    REGISTERLAST = "REGISTERLAST",
    DASHBOARD = "DASHBOARD",
}

export type AppState = {
   screen: Screens;
};

export enum NavigationActions {
   "NAVIGATE" = "NAVIGATE",
}



export interface NavigatetAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens;
}



export type Actions = NavigatetAction;