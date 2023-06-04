import { Actions, AppState, NavigationActions, petCardActions } from "../types/Store"

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case NavigationActions.NAVIGATE:
            return {
                ...currentState,
                screen: payload,
            }

        case petCardActions.CHECK:
        return{
            ...currentState,
            pets: payload,
        }    

        case petCardActions.DELETE:
        return{
            ...currentState,
            pets: {
                payload,
                ...currentState.pets
            }
        }

 
        default:
            return currentState;
    }
}