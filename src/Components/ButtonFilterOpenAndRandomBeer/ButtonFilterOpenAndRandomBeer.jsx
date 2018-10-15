import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import randomBeer from '../../requests/randomBeer';
import './ButtonFilterOpenAndRandomBeer.sass';

class ButtonFilterOpenAndRandomBeer extends Component {
    render(){
        return(
            <div className = 'buttonFilterOpenAndRandomBeer'>
                <Button onClick = {this.props.open}>Фильтр</Button>
                <Button onClick = {this.props.randomBeer}>Мне повезёт</Button>
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        open: () => {
            dispatch({type:'FILTER_OPEN'})
        },
        randomBeer: () => {
            dispatch(randomBeer())
        }
    })
)(ButtonFilterOpenAndRandomBeer);