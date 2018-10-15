import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './Beer.sass';

class Beer extends Component {
    beerInfo = () => {
        this.props.beerInfo(this.props.beer);
    }

    render() {
            return (
                <TableRow onClick = {this.beerInfo} className = 'beer'>
                    <TableCell component="th" scope="row">
                        {this.props.beer.name}
                    </TableCell>
                    <TableCell numeric>{this.props.beer.abv}</TableCell>
                    <TableCell numeric>{this.props.beer.ebc ? this.props.beer.ebc : '-'}</TableCell>
                    <TableCell numeric>{this.props.beer.srm ? this.props.beer.srm : '-'}</TableCell>
                    <TableCell numeric>{this.props.beer.ibu ? this.props.beer.ibu : '-'}</TableCell>
                </TableRow>
            )
    }
}

export default connect(
    state => ({
        listBeers: state.listBeers
    }),
    dispatch => ({
        beerInfo: (beer) => {
            dispatch({type: 'OPEN_MODAL_BEER_INFO', beer: beer})
        }
    })
)(Beer);;