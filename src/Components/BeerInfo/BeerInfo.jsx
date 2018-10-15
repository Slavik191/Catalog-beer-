import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import './BeerInfo.sass';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BeerInfo extends Component {
    render() {
        let foodPairing;
        let ingredients = [];
        if(this.props.beer.infoBeer){
            foodPairing = this.props.beer.infoBeer.food_pairing.map((food,index) => {
                return(
                    <TableRow key = {index}>
                        <TableCell component="th" scope="row">{food}</TableCell>
                    </TableRow>
                )
            });
            let str = '';
            this.props.beer.infoBeer.ingredients.hops.forEach((hop, index) => {
                str += ` ${hop.amount.value} ${hop.amount.unit} ${hop.name}`;
                if(this.props.beer.infoBeer.ingredients.hops.length - 1 !== index)
                    str += ',';
                else
                    str += '.';
            })
            ingredients.push(
                <div>
                    Хмель: {str}
                </div>
            )
            str = ''
            this.props.beer.infoBeer.ingredients.malt.forEach((malt, index) => {
                str += ` ${malt.amount.value} ${malt.amount.unit} ${malt.name}`;
                if(this.props.beer.infoBeer.ingredients.malt.length - 1 !== index)
                    str += ',';
                else
                    str += '.';
            })
            ingredients.push(
                <div>
                    Солод: {str}
                </div>
            )
        }

        return (
            <Dialog
                open={this.props.beer.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {this.props.beer.infoBeer ? this.props.beer.infoBeer.name : ''}
                </DialogTitle>
                <DialogContent>
                    <div className='beerDescription'>
                        <img src={this.props.beer.infoBeer ? this.props.beer.infoBeer.image_url : ''} />
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.props.beer.infoBeer ? this.props.beer.infoBeer.description : ''}
                        </DialogContentText>
                    </div>
                    <div>
                        {this.props.beer.infoBeer && <Table>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">крепкосто</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.abv}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Цветность пива(Европейская)</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.ebc}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Цветность пива(Стандартная)</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.srm}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Единица горечи</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.ibu}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">фактор затора</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.ph}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Подзаголовок</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.tagline}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Впервые сварен</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.first_brewed}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">уровень затухания</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.attenuation_level}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">Создатель</TableCell>
                                    <TableCell numeric>{this.props.beer.infoBeer.contributed_by}</TableCell>
                                </TableRow>
                            </TableBody>                            
                        </Table>}
                        <h2>Рекомендуемые блюда</h2>
                        <Table>    
                            <TableBody>                            
                            {foodPairing}
                            </TableBody>                            
                        </Table>
                        <h2>Ингридиенты</h2>
                        {ingredients}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}

export default connect(
    state => ({
        beer: state.modalBeerInfo
    }),
    dispatch => ({
        close: () => {
            dispatch({ type: 'CLOSE_MODAL_BEER_INFO' });
        }
    })
)(BeerInfo);
