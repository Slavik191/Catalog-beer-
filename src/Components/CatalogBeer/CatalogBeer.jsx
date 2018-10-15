import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListBeers from '../ListBeers/ListBeers';
import SwitchingPage from '../SwitchingPage/SwitchingPage';
import BeerInfo from '../BeerInfo/BeerInfo';
import Filter from '../Filter/Filter';
import ButtonFilterOpenAndRandomBeer from '../ButtonFilterOpenAndRandomBeer/ButtonFilterOpenAndRandomBeer';
import Progress from '../Progress/Progress'

class CatalogBeer extends Component{
    render(){
        return(
            <div>
                {this.props.progress && <Progress />}
                <ButtonFilterOpenAndRandomBeer />
                <Filter />
                <BeerInfo />
                <ListBeers />
                <SwitchingPage />
            </div>
        )
    }
}

export default connect(
    state => ({
        progress: state.progress
    }),
    dispatch => ({
    })
)(CatalogBeer);