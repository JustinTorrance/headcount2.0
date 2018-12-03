import React from 'react';
import {shallow, mount} from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import App from '../../App.js';
import Search from '../../Search.js';

describe('Search component iteration 3', () => {
  it('should exist', () => {
     const wrapper = shallow(<Search />);
     expect(wrapper).toBeDefined()
  })
  it('should match snapshot', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should update state', () => {
    const wrapper = shallow(<Search searchByLocation={jest.fn()}/>)
    const mockedEvent = {
      target: {
        value: 'howdy'
      }
    }
    wrapper.setState({location: ''})
    wrapper.instance().handleChange(mockedEvent)  
    expect(wrapper.state('location')).toEqual('howdy')
  })
  it('should invoke searchByLocaiton', () => {
    const mockedEvent = {
      target: {
        value: 'howdy'
      }
    }
    const mockState = { location: 'howdy' }
    const wrapper = mount(<Search searchByLocation={jest.fn()}/>)
    wrapper.instance().handleChange(mockedEvent)
    expect(wrapper.props().searchByLocation).toHaveBeenCalledWith(mockState.location)
  })
})




