const initialState = 1;

export default function page(state = initialState, action) {
    switch (action.type) {
        case 'NEXT_PAGE':
            return ++state;
            break;
        case 'PREV_PAGE':
            return --state;
            break;
        default:
            break;
    }
    return state;
}