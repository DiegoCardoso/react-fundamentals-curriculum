import React, { Component, PropTypes } from 'react'
import { getForecast } from '../../helpers/api'

class Weather extends Component {
    constructor(props) {
        super(props)
        const { city } = props.params
        this.state = {
            city,
            loading: true,
            weather: {},
        }
    }
    componentDidMount() {
        getForecast(this.state.city)
            .then((response) => {
                this.setState({
                    loading: false,
                    weather: response,
                })
                console.log(response)
            })
    }
    
    render() {
        if (this.state.loading) {
            return (
                <div>
                    <h1>Loading weather...</h1>
                </div>
            )
        } 
        const { weather } = this.state
        return (
            <div>
                <h1>{weather.city}, {weather.country}</h1>
            </div>
        )
    }
}

Weather.propTypes = {
    params: PropTypes.object.isRequired,
}

export default Weather