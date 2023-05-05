import { NavigatetAction, NavigationActions, Screens } from "../types/store"


export const navigatet = (screen: Screens): NavigatetAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}


