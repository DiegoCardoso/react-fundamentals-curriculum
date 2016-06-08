import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Home from './index'
import WeatherForm from '../WeatherForm'

describe('<Home />', () => {
    it('should render a title with a mensage "Enter a City and State"', () => {
        const wrapper = shallow(<Home />)
        const header = wrapper.find('h2')
        
        const actual = header.text()
        const expected = 'Enter a City and State'
        
        expect(actual).to.equal(expected)        
    })
    
    it('should render a <WeatherForm /> compononent', () => {
        const wrapper = shallow(<Home />)
        const actual = wrapper.containsAllMatchingElements([
            <WeatherForm />,
        ])
        const expected = true
        expect(actual).to.equal(expected)
    })
})