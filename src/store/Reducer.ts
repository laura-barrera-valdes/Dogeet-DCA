export const reducer = (action: any, prevState: any) => {
    switch (action.type) {
        case "navigate":
            prevState.screen = action.payload;
            break;
    }

    return prevState;
};