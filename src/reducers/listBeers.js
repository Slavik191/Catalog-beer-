const initialState = [];

export default function listBeers(state = initialState, action) {
    switch (action.type) {
        case 'NEW_LIST_BEERS':
            return action.listBeers;
            break;
        default:
            break;
    }
    return state;
}