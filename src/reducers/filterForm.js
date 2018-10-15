const initialState = {
    open: false,
    abv_gt: '',
    abv_lt: '',
    ibu_gt: '',
    ibu_lt: '',
    ebc_gt: '',
    ebc_lt: '',
    beer_name: '',
    yeast: '',
    brewed_before: '',
    brewed_after: '',
    hops: '',
    malt: '',
    food: '',
};

export default function filterForm(state = initialState, action) {
    switch (action.type) {
        case 'NEW_VALUE':
            return {
                ...state,
                [action.new.name]: action.new.value
            };
            break;
        case 'FILTER_CLOSE':
            return {
                ...state,
                open: false
            };
        case 'FILTER_OPEN':
            return {
                ...state,
                open: true
            };
            break;
        default:
            break;
    }
    return state;
}