import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'

import WeatherForm from '../WeatherForm'

class Header extends Component {
    constructor(props) {
        super(props)
        
        this.onWeatherSubmit = this.onWeatherSubmit.bind(this)
    }
    
    onWeatherSubmit(city) {
        this.setState({ city })
    }
        
    render() {
        return (
            <header className={css(styles.header)}>
                <h1 className={css(styles.header__title)}>React <strong>Weather</strong></h1>
                <WeatherForm
                    onSubmit={this.onWeatherSubmit} 
                />
            </header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        background: '#f87533',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',             
    },
    
    header__title: {
        fontFamily: 'Roboto Condensed, Myriad Pro, Arial, sans-serif',
        margin: 0,
        fontWeight: 100,
        color: '#FFF',
    },
})

export default Header