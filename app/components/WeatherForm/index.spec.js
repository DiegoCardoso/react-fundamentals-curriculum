import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'

import WeatherForm from './index'


describe('<WeatherForm />', () => {
    it('should render a form with a text input and a button', () => {
        const wrapper = shallow(<WeatherForm />)
        const form = wrapper.find('form')
        const input = form.find('input[type="text"]')
        const button = form.find('button[type="submit"]')
        
        expect(form).to.have.length(1)        
        expect(input).to.have.length(1)        
        expect(button).to.have.length(1)        
    })
    
    it('should receive a onSubmitHandler as prop', () => {
        const onSubmit = spy()
        const wrapper = mount(<WeatherForm onSubmit={onSubmit}/>)
        
        wrapper.find('form').simulate('submit')
        
        expect(onSubmit.calledOnce).to.equal(true)
    })
    
    it('should receive the text typed on onSubmitHandler call', () => {
        const onSubmit = spy()
        const wrapper = mount(<WeatherForm onSubmit={onSubmit}/>)
        wrapper.setState({city: 'Diego'})
        wrapper.find('form').simulate('submit')
        
        expect(onSubmit.args[0][0]).to.equal('Diego')
    })
    
    it('should empty text field after submit', () => {
        const onSubmit = spy()
        const wrapper = mount(<WeatherForm onSubmit={onSubmit}/>)
        wrapper.setState({city: 'Diego'})
        wrapper.find('form').simulate('submit')
        
        expect(wrapper.state('city')).to.equal('')
    })
})