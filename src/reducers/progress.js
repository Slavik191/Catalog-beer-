const initialState = false;

export default function progress(state = initialState, action) {
    switch (action.type) {
        case 'PROGRESS_ON':
            return true;
            break;
        case 'PROGRESS_OFF':
            return false;
            break;
        default:
            break;
    }
    return state;
}