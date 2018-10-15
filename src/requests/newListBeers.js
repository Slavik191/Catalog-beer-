const newListBeers = (page) => dispatch => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'NEW_LIST_BEERS', listBeers: data});
            console.log(data)
        })
}

export default newListBeers;