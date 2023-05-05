import { Screens } from "../types/Navigation";

export const navigate = (screen: Screens) => {
    return{
        type:"navigate",
        payload: screen,
    };
};