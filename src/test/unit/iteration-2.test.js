import React from 'react';
import Card from '../../Card.js';
import CardContainer from '../../CardContainer.js';
import {shallow, mount} from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        location='colorado'
        stats = { {2004: 1} }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
})

describe('CardContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const repository = new DistrictRepository(kinderData);
    const wrapper = mount(<CardContainer findAllMatches={ repository.findAllMatches } />)
    expect(wrapper).toMatchSnapshot();
  })
})
