import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import newListBeers from '../../requests/newListBeers';
import './SwitchingPage.sass';

class SwitchingPage extends Component {
    next = () => {
        this.props.next(this.props.page + 1, this.props.filter)
    }

    prev = () => {
        if(this.props.page > 1)
            this.props.prev(this.props.page - 1, this.props.filter)
    }
    render(){
        return(
            <div className = 'switchingPageButtons'>
                <Button onClick = {this.prev}>Предыдущая</Button>
                <Button onClick = {this.next}>Следующая</Button>
            </div>
        )
    }
}

export default connect(
    state => ({
        page: state.page,
        filter: state.filterForm     
    }),
    dispatch => ({
        next: (page, filter) => {
            dispatch({type: 'NEXT_PAGE'});
            dispatch(newListBeers(page, filter))
        },
        prev: (page, filter) => {
            dispatch({type: 'PREV_PAGE'});
            dispatch(newListBeers(page, filter))
        }
    })
)(SwitchingPage);