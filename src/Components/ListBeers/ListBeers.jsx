import React, { Component } from 'react';
import { connect } from 'react-redux';
import newListBeers from '../../requests/newListBeers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ListBeers extends Component {
    componentWillMount() {
        this.props.newListBeers(1);
    }
    render() {
        let list = this.props.listBeers.map(beer => {
            return (
                <TableRow key={beer.id}>
                    <TableCell component="th" scope="row">
                        {beer.name}
                    </TableCell>
                    <TableCell numeric>{beer.abv}</TableCell>
                    <TableCell numeric>{beer.ebc}</TableCell>
                    <TableCell numeric>{beer.srm}</TableCell>
                    <TableCell numeric>{beer.ibu}</TableCell>
                </TableRow>
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