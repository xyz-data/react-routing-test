import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
        // navigation
    }
    render(){
        const cars = this.props.route.data;
        // data
        const id = this.props.params.id;
        // params
        console.log(`&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&`);
        console.log(`typeof id = ${typeof(id)}`);
        console.log(`params.id = ${id}`);
        
        // number
        const car = cars.filter(car => {
            console.log(`******************************************************`);
            console.log(`car.id = ${car.id}`);
            console.log(`typeof car.id = ${typeof(car.id)}`);
            // number
            if(car.id == id) {
                return car;
            }
        });
        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>Year</strong>: {car[0].year}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail;