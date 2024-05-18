import React, { Component } from 'react'

export default class Weather extends Component {

    render() {

        let { city, date, temp, weather, coordinates } = this.props;
        let dateNew = date.toISOString;
        console.log(coordinates.lat);
        console.log(weather.id);
        // console.log(this.props.coordi);
        return (
            <div>
                <p>{city}{dateNew}  {temp}</p>
            </div>
        )
    }
}
