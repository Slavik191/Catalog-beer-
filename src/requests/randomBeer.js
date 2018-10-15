const randomBeer = () => dispatch => {
    dispatch({type: 'PROGRESS_ON'});
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'OPEN_MODAL_BEER_INFO', beer: data[0]});
        dispatch({type: 'PROGRESS_OFF'});
    })
}

export default randomBeer;