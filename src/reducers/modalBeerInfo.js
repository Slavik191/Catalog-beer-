const initialState = {
    open: false,
    infoBeer: null
};

export default function modalBeerInfo(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL_BEER_INFO':
            return {
                open: true,
                infoBeer: action.beer
            };
            break;
        case 'CLOSE_MODAL_BEER_INFO':
            return {
                ...state,
                open: false,
            };
            break;
        default:
            break;
    }
    return state;
}