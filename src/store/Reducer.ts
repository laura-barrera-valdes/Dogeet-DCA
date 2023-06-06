import {
  Actions,
  AppState,
  NavigationActions,
  petCardActions,
  getDataActions,
} from "../types/Store";

export const reducer = (
  currentAction: Actions,
  currentState: AppState
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case NavigationActions.NAVIGATE:
      return {
        ...currentState,
        screen: payload,
      };

    case petCardActions.CHECK:
      return {
        ...currentState,
        community: [payload, ...currentState.community],
      };

    case petCardActions.GET:
      return {
        ...currentState,
        community: payload,
      };

    case getDataActions.MYPROFILE:
      return {
        ...currentState,
        myprofiledata: payload,
      };

    // case petCardActions.DELETE:
    // return{
    //     ...currentState,
    //     pets: {
    //         payload,
    //         ...currentState.pets
    //     }
    // }

    default:
      return currentState;
  }
};
