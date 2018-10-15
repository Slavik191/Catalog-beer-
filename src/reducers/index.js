import { combineReducers } from 'redux';
import listBeers from './listBeers';
import page from './page';

export default combineReducers({
    listBeers,
    page
})