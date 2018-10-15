const newListBeers = (page, filter = {}) => dispatch => {
        let request = `https://api.punkapi.com/v2/beers?page=${page}`;
        for(let key in filter){
            if(key !== 'open' && filter[key].trim() !== '')
                request += `&${key}=${filter[key].trim()}`
        }
        fetch(request)
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'NEW_LIST_BEERS', listBeers: data});
            console.log(data)
        })
}

export default newListBeers;