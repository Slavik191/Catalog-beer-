import { combineReducers } from 'redux';
import listBeers from './listBeers';
import page from './page';
import modalBeerInfo from './modalBeerInfo';
import filterForm from './filterForm';
import progress from './progress'

export default combineReducers({
    listBeers,
    page,
    modalBeerInfo,
    filterForm,
    progress
})