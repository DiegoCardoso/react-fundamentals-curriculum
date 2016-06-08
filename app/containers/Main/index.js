import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from '../../components/Header'

class Main extends Component {    
    render() {
        
        return (
            <div className={css(styles.container)}>
                <Header />
                <main className={css(styles.main)}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

Main.propTypes = {
    children: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',    
    },
    main: {
        height: '80vh',
        backgroundImage: 'url("app/images/pattern.svg")',
    },
})

export default Main