import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import newListBeers from '../../requests/newListBeers';

class SwitchingPage extends Component {
    next = () => {
        this.props.next(this.props.page + 1)
    }

    prev = () => {
        this.props.prev(this.props.page - 1)
    }
    render(){
        return(
            <div>
                <Button onClick = {this.prev}>Предыдущая</Button>
                <Button onClick = {this.next}>Следующая</Button>
            </div>
        )
    }
}

export default connect(
    state => ({
        page: state.page        
    }),
    dispatch => ({
        next: (page) => {
            dispatch({type: 'NEXT_PAGE'});
            dispatch(newListBeers(page))
        },
        prev: (page) => {
            dispatch({type: 'PREV_PAGE'});
            dispatch(newListBeers(page))
        }
    })
)(SwitchingPage);