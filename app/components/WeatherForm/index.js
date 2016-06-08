import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

class WeatherForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
        }
        
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this)        
    }
    onSubmitHandler(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.city)
        this.setState({
            city: '',
        })
    }
    onInputChangeHandler() {
        const city = this.refs.city.value
        this.setState({ city })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input ref="city" type="text" value={this.state.city}  onChange={this.onInputChangeHandler} placeholder="Rio de Janeiro, RJ" className={css(styles.textField)}/>
                <button type="submit" className={css(styles.button)}>
                    Get Weather
                </button>
            </form>
        )
    }
}

WeatherForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({  
    textField: {
        border: 0,
        padding: '0.5em',
        fontSize: '1.2em',
        fontWeight: '100',
        color: '#fe933f',
        borderBottom: '2px solid #fe933f',
        fontFace: 'Roboto, Arial, sans-serif',
    },    
    button: {
        border: 0,
        padding: '0.5em',
        fontSize: '1.2em',
        fontWeight: '100',
        backgroundColor: '#fe933f',
        color: '#FFF',
        borderBottom: '2px solid #fe933f',
        cursor: 'pointer',
        outline: 'none',
        fontFace: 'Roboto, Arial, sans-serif',
        
        ':hover': {
            backgroundColor: '#ffa04d',    
        },
    },
    
    
})

export default WeatherForm