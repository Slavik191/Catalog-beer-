import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListBeers from '../ListBeers/ListBeers';
import SwitchingPage from '../SwitchingPage/SwitchingPage'

class CatalogBeer extends Component{
    render(){
        return(
            <div>
                <ListBeers />
                <SwitchingPage />
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(CatalogBeer);