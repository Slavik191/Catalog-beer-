import React, { Component } from 'react';
import { connect } from 'react-redux';
import newListBeers from '../../requests/newListBeers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Beer from '../Beer/Beer'

class ListBeers extends Component {
    componentWillMount() {
        this.props.newListBeers(1);
    }
    render() {
        let list = this.props.listBeers.map(beer => {
            return (
                <Beer beer = {beer} key = {beer.id}/>
            )
        });
        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell numeric>Крепость пива</TableCell>
                            <TableCell numeric>Цветность пива (Европейская)</TableCell>
                            <TableCell numeric>Цветность пива (Стандартная)</TableCell>
                            <TableCell numeric>Единица горечи</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default connect(
    state => ({
        listBeers: state.listBeers
    }),
    dispatch => ({
        newListBeers: (page) => dispatch(newListBeers(page))
    })
)(ListBeers);