import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './index'
import WeatherForm from '../WeatherForm'

describe('<Header />', () => {
    it('should render a title with a text "React Weather"', () => {
        const wrapper = shallow(<Header />)
        const header = wrapper.find('h1')
        
        const actual = header.text()
        const expected = 'React Weather'
        
        expect(actual).to.equal(expected)        
    })
    
    it('should render a <WeatherForm /> compononent', () => {
        const wrapper = shallow(<Header />)
        const actual = wrapper.containsAllMatchingElements([
            <WeatherForm />,
        ])
        const expected = true
        expect(actual).to.equal(expected)
    })
})