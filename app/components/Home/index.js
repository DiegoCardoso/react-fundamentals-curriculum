import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import WeatherForm from '../WeatherForm'

class Home extends Component {
    constructor(props) {
        super(props)
        this.onWeatherSubmit = this.onWeatherSubmit.bind(this)
    }
    onWeatherSubmit(city) {
        const { push } = this.context.router
        push(`/weather/${city}`)
    }
    render() {
        return (
            <div className={css(styles.home)}>
                <h2 className={css(styles.title)}>Enter a City and State</h2>
                <WeatherForm onSubmit={this.onWeatherSubmit}/>
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object,
}


const styles = StyleSheet.create({
    home: {
        fontFamily: 'Roboto, Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    title: {
        fontWeight: 100,
        fontSize: '2em',
        color: '#FFF',
    },
})

export default Home