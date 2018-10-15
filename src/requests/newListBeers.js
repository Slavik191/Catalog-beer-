const newListBeers = (page, filter = {}) => dispatch => {
        dispatch({type: 'PROGRESS_ON'});
        let request = `https://api.punkapi.com/v2/beers?page=${page}`;
        for(let key in filter){
            if(key !== 'open' && filter[key].trim() !== '')
                request += `&${key}=${filter[key].trim()}`
        }
        fetch(request)
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'NEW_LIST_BEERS', listBeers: data});
            dispatch({type: 'PROGRESS_OFF'});
        })
}

export default newListBeers;